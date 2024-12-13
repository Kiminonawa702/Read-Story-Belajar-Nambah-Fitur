process.on('uncaughtException', console.error)
const {
  default: WAConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  Browsers,
  fetchLatestWaWebVersion
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const readline = require('readline');
const { Boom } = require("@hapi/boom");
const cfonts = require('cfonts'); // Import cfonts library
const settings = require('./settings'); // Import settings

const pairingCode = process.argv.includes("--pairing-code");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });


async function WAStart() {
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const randomColor = getRandomColor(); // Generate random color
  
  cfonts.say('auto-read-sw\nby-wily-kun', { // Call cfonts.say()
    font: 'tiny',       
    align: 'center',
    colors: [randomColor], // Use random color
    background: 'transparent', 
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLength: '0',
    gradient: true, // Enable gradient
    independentGradient: false,
    transitionGradient: false,
    env: 'node',
    border: 'underline', // Add a border
  });
  const { state, saveCreds } = await useMultiFileAuthState("./sesi");
  const { version, isLatest } = await fetchLatestWaWebVersion().catch(() => fetchLatestBaileysVersion());
  console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);

  const client = WAConnect({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !pairingCode,
    browser: Browsers.ubuntu("Chrome"),
    auth: state,
  });

  store.bind(client.ev);

  if (pairingCode && !client.authState.creds.registered) {
    const phoneNumber = await question(`Silahkan masukin nomor Whatsapp kamu: `);
    let code = await client.requestPairingCode(phoneNumber);
    code = code?.match(/.{1,4}/g)?.join("-") || code;
    console.log(`⚠︎ Kode Whatsapp kamu : ` + code)
  }

  let startTime = Date.now();

  client.ev.on("messages.upsert", async (chatUpdate) => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
      const m = chatUpdate.messages[0];
      if (!m.message) return;
      
      const maxTime = 1000; // 1 second

      if (m.key && !m.key.fromMe && m.key.remoteJid === 'status@broadcast') {
        if (!m.message.reactionMessage) {
          const allowedSenders = [
            "6281447345627@s.whatsapp.net",
            "628145563553@s.whatsapp.net",
          ];

          if (!allowedSenders.includes(m.key.participant)) {
            const currentTime = Date.now();
            const messageTime = m.messageTimestamp * 1000;
            const timeDiff = currentTime - messageTime;

            if (timeDiff <= maxTime) {
              const emojis = require('./randomemot').emojis;

              function getRandomEmoji() {
                const randomIndex = Math.floor(Math.random() * emojis.length);
                return emojis[randomIndex];
              }

              const randomEmoji = getRandomEmoji();
              try {
                await client.sendMessage("status@broadcast", {
                  react: { text: randomEmoji, key: m.key },
                }, { statusJidList: [m.key.participant] });

                await client.readMessages([m.key]);
                console.log(`Berhasil melihat status dari ${m.pushName}`);
              } catch (error) {
                console.error('Error', error);
              }
            }
          }
        }
      }

      // Kirim pesan "Typing..." jika autoTyping diaktifkan
      if (settings.autoTyping && !m.key.fromMe) {
        await client.sendPresenceUpdate("composing", m.key.remoteJid);
        await new Promise(resolve => setTimeout(resolve, 20000)); // Tunggu 20 detik
        await client.sendPresenceUpdate("paused", m.key.remoteJid);
      }
    } catch (err) {
      console.log(err);
    }
  });
  

  client.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
      if (connection === "close") {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
          console.log(`Bad Session File, Please Delete Session and Scan Again`);
          process.exit();
        } else if (reason === DisconnectReason.connectionClosed) {
          console.log("Connection closed, reconnecting....");
          WAStart();
        } else if (reason === DisconnectReason.connectionLost) {
          console.log("Connection Lost from Server, reconnecting...");
          WAStart();
        } else if (reason === DisconnectReason.connectionReplaced) {
          console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
          process.exit();
        } else if (reason === DisconnectReason.loggedOut) {
          console.log(`Device Logged Out, Please Delete Folder Session and Scan Again.`);
          process.exit();
        } else if (reason === DisconnectReason.restartRequired) {
          console.log("Restart Required, Restarting...");
          WAStart();
        } else if (reason === DisconnectReason.timedOut) {
          console.log("Connection TimedOut, Reconnecting...");
          WAStart();
        } else {
          console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
          WAStart();
        }
      } else if (connection === "open") {
      console.log("Connected to Readsw");
      if (settings.uptime) {
        setInterval(() => {
          const uptime = Date.now() - startTime;
          const hours = Math.floor(uptime / (1000 * 60 * 60));
          const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((uptime % (1000 * 60)) / 1000);
          console.log(`Bot telah berjalan selama ${hours} jam, ${minutes} menit, ${seconds} detik`);
          if (settings.updateBio) {
            client.updateProfileStatus(`Bot telah berjalan selama ${hours} jam, ${minutes} menit, ${seconds} detik`);
          }
        }, 1000 * 60); // Update uptime every minute // Update uptime every second // Update uptime every minute
      }
      // Send notification message when bot reconnects
      await client.sendMessage(settings.notificationNumber, { text: 'Bot terhubung kembali tuan' });
    }
  });

  client.ev.on("creds.update", saveCreds);

  return client;
}

WAStart();