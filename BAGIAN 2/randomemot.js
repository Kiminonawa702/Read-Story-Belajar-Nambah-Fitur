const emojis = [
    // Smiley Orang
    "😊", "🥶", "🗿", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🙂", "🙃", "😉", "😇", 
    "😈", "👿", "💀", "👻", "👽", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", 
    "😽", "🙀", "😿", "😾", "😔", "😮", "🥺", "🧐", "🤨", "🙄", "🤫", "🤭",
    "🤑", "🤪", "🤯", "🤠", "🤡", "🎅", "🦸", "🦹", "🧙", "🧝", "🧛", "🧜",
    "👼", "🤰", "👨‍👩‍👧‍👦", "👫", "🤝", "✊", "✌️", "🤞", "👍", "👎", "🙏",
    "🤝", "👋", "🚶", "🏃", "💃", "🕺", "🕴️", "🤸", "🧘", "🏄", "🚣", "🏊",
    "🚴", "🚵", "🏎️", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🚲", "🛵", 
    "✈️", "🚁", "🚀", "🛰️", "🛳️", "🚢", "⚓", "😔", "😮", "🥺", "🧐", "🤨", 
    "🙄", "🤫", "🤭", "🤑", "🤪", "🤯", "🤠", "🤡", "🎅", "🦸", "🦹", "🧙", 
    "🧝", "🧛", "🧜", "👼", "🤰", "👨‍👩‍👧‍👦", "👫", "🤝", "✊", "✌️", "🤞", 
    "👍", "👎", "🙏", "🤝", "👋", "🚶", "🏃", "💃", "🕺", "🕴️", "🤸", "🧘", 
    "🏄", "🚣", "🏊", "🚴", "🚵", "🏎️", "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", 
    "🚜", "🚲", "🛵", "✈️", "🚁", "🚀", "🛰️", "🛳️", "🚢", "⚓",

    // Hewan & Alam
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐺", 
    "🐴", "🦄", "🐮", "🐷", "🐸", "🐢", "🐍", "🦎", "🦖", "🦕", "🐙", "🐠", 
    "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐦", "🐧", "🕊️", "🦅", "🦉", "🦇", 
    "🐔", "🦃", "🦆", "🦅", "🦉", "🦇", "🐛", "🐌", "🦋", "🐝", "🐜", "🐞", 
    "🕷️", "🕸️", "🌱", "🌲", "🌳", "🌴", "🌵", "🌾", "🍁", "🍂", "🍄", "💐", 
    "🌻", "🌹", "🌷", "🌺", "🌸", "🌼", "🌎", "🌍", "🌏", "🌕", "🌖", "🌗", 
    "🌘", "🌑", "🌒", "🌓", "🌔", "☀️", "🌤️", "⛅️", "🌥️", "🌦️", "🌧️", 
    "⛈️", "🌩️", "🌨️", "❄️", "⛄️", "💧", "💦", "🌊", "🌋", "⛰️", "🏔️", 
    "🗻", "🏕️", "⛺️", "🏞️", "🦍", "🐘", "🦒", "🦓", "🦌", "🐇", "🐿️", "🦔", 
    "🦇", "🦅", "🦉", "🦜", "🦩", "🦚", "🐢", "🦎", "🐍", "🐛", "🐜", "🐝", 
    "🐞", "🕷️", "🕸️", "🦂", "🦀", "🦞", "🦐", "🦑", "🐙", "🐠", "🐟", "🐬", 
    "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🐈", "🐕", "🐩", "🐎", "🐄", "🐖", 
    "🐏", "🐐", "🐑", "🦙", "🦘", "🦥", "🐼", "🐨", "🐻", "🦊", "🐺", "🦝", 
    "🦨", "🦡", "🦦", "🐇", "🐿️", "🦔", "🦇", "🦅", "🦉", "🦜", "🦩", "🦚", 
    "🐦", "🐧", "🕊️", "🦃", "🐔", "🐤", "🐥", "🦆", "🦅", "🦉", "🦇", "🐛", 
    "🐌", "🦋", "🐝", "🐜", "🐞", "🕷️", "🕸️", "🦂", "🦀", "🦞", "🦐", "🦑", 
    "🐙", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐢", "🦎", "🐍", "🐲", 
    "🐉", "🦕", "🦖", "🌱", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "☘️", "🍀", 
    "🍁", "🍂", "🍄", "💐", "🌻", "🌹", "🌷", "🌺", "🌸", "🌼", "🌎", "🌍", 
    "🌏", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "☀️", "🌤️", 
    "⛅️", "🌥️", "🌦️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️", "⛄️", "💧", "💦", 
    "🌊", "🌋", "⛰️", "🏔️", "🗻", "🏕️", "⛺️", "🏞️", "🦍", "🐘", "🦒", "🦓", 
    "🦌", "🐇", "🐿️", "🦔", "🦇", "🦅", "🦉", "🦜", "🦩", "🦚", "🐢", "🦎", 
    "🐍", "🐛", "🐜", "🐝", "🐞", "🕷️", "🕸️", "🦂", "🦀", "🦞", "🦐", "🦑", 
    "🐙", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🐈", "🐕", 
    "🐩", "🐎", "🐄", "🐖", "🐏", "🐐", "🐑", "🦙", "🦘", "🦥", "🐼", "🐨", 
    "🐻", "🦊", "🐺", "🦝", "🦨", "🦡", "🦦", "🐇", "🐿️", "🦔", "🦇", "🦅", 
    "🦉", "🦜", "🦩", "🦚", "🐦", "🐧", "🕊️", "🦃", "🐔", "🐤", "🐥", "🦆", 
    "🦅", "🦉", "🦇", "🐛", "🐌", "🦋", "🐝", "🐜", "🐞", "🕷️", "🕸️", "🦂", 
    "🦀", "🦞", "🦐", "🦑", "🐙", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", 
    "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🌱", "🌲", "🌳", "🌴", "🌵", 
    "🌾", "🌿", "☘️", "🍀", "🍁", "🍂", "🍄", "💐", "🌻", "🌹", "🌷", "🌺", 
    "🌸", "🌼", "🌎", "🌍", "🌏", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", 
    "🌔", "☀️", "🌤️", "⛅️", "🌥️", "🌦️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️", 
    "⛄️", "💧", "💦", "🌊", "🌋", "⛰️", "🏔️", "🗻", "🏕️", "⛺️", "🏞️", 

    // Makanan & Minuman
    "🍎", "🍏", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍒", "🍑", "🍍", 
    "🥭", "🥑", "🥕", "🍆", "🍅", "🥔", "🧅", "🍄", "🌶️", "🥒", "🥦", "🥬", 
    "🥑", "🍕", "🍔", "🍟", "🌭", "🌮", "🥪", "🍦", "🍧", "🍨", "🍩", "🍪", 
    "🍫", "🍬", "🍭", "🍿", "🥂", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🍇", "🍈", 
    "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍒", "🍓", "🍑", 
    "🥝", "🥑", "🍆", "🍅", "🥔", "🥕", "🧅", "🌶️", "🥒", "🥦", "🥬", "🍄", 
    "🥜", "🌰", "🍞", "🥐", "🥖", "🥨", "🧀", "🥚", "🥓", "🥩", "🍗", "🍖", 
    "🌭", "🍔", "🍟", "🍕", "🌮", "🥪", "🍿", "🍩", "🍪", "🎂", "🍰", "🧁", 
    "🥧", "🍫", "🍬", "🍭", "🍦", "🍧", "🍨", "🥂", "🍾", "🍷", "🍸", "🍹", 
    "🍺", "🍻", "🥤", "☕", "🍵", "🍶", "🍾", "🥛", "🍼", "🍽️", "🍴", "🥄", 
    "🔪", "🧂", "🌶️", "🍯", "🧂", "🌶️", "🍯",

    // Aktivitas
    "⚽", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🏒", "🏑", 
    "🏏", "⛳️", "🏹", "🎣", "🥊", "🥋", "🏋️", "🚴", "🏊", "🏄", "⛷️", 
    "🏂", "🪂", "🧗", "🎮", "🕹️", "🎲", "🎯", "🎼", "🚶", "🏃", "💃", "🕺", 
    "🕴️", "🤸", "🧘", "🏄", "🚣", "🏊", "🚴", "🚵", "🏎️", "🚓", "🚑", "🚒", 
    "🚐", "🚚", "🚛", "🚜", "🚲", "🛵", "✈️", "🚁", "🚀", "🛰️", "🛳️", "🚢", 
    "⚓", "🏹", "🎣", "🥊", "🥋", "🏋️", "🚴", "🏊", "🏄", "⛷️", "🏂", "🪂", 
    "🧗", "🎮", "🕹️", "🎲", "🎯", "🎼", "🎤", "🎧", "🎺", "🎷", "🎸", "🎻", 
    "🎹", "🥁", "🎨", "🎭", "🎬", "🎥", "📸", "🖼️", "📚", "📖", "✍️", "✏️", 
    "✂️", "📌", "📎", "📏", "📐", "🗃️", "🗄️", "🗑️", "🧰", "🔨", "🔧", "🔩", 
    "🧲", "💡", "🔦", "🕯️", "🔌", "🔋", "💻", "🖥️", "📱", "☎️", "📡", "🖨️", 
    "⌨️", "🖱️", "🌐", "🗺️", "🧭", "⏰", "⌚️", "⏳", "⏱️", "🧮", "💰", "💵", 
    "💶", "💷", "💳", "💎", "💍", "👑", "🎒", "💼", "👜", "👝", "👛", "👓", 
    "🕶️", "👔", "👕", "👖", "👗", "👠", "👞", "👟", "🥾", "🧦", "🧤", "🧣", 
    "🎩", "🧢", "👒", "🌂", "☂️", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", 
    "🐼", "🐨", "🐯", "🦁", "🐺", "🐴", "🦄", "🐮", "🐷", "🐸", "🐢", "🐍", 
    "🦎", "🦖", "🦕", "🐙", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐦", 
    "🐧", "🕊️", "🦅", "🦉", "🦇", "🐔", "🦃", "🦆", "🦅", "🦉", "🦇", "🐛", 
    "🐌", "🦋", "🐝", "🐜", "🐞", "🕷️", "🕸️", "🦂", "🦀", "🦞", "🦐", "🦑", 
    "🐙", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐢", "🦎", "🐍", "🐲", 
    "🐉", "🦕", "🦖", "🌱", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "☘️", "🍀", 
    "🍁", "🍂", "🍄", "💐", "🌻", "🌹", "🌷", "🌺", "🌸", "🌼", "🌎", "🌍", 
    "🌏", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "☀️", "🌤️", 
    "⛅️", "🌥️", "🌦️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️", "⛄️", "💧", "💦", 
    "🌊", "🌋", "⛰️", "🏔️", "🗻", "🏕️", "⛺️", "🏞️", "🏖️", "🏝️", "🏜️", 
    "🌋", "⛰️", "🏔️", "🗻", "🏕️", "⛺️", "🏞️",

    // Perjalanan & Tempat
    "✈️", "🚆", "🚇", "🚌", "🚗", "🚕", "🚲", "🛵", "🛳️", "🚀", "🚁", "🛸", 
    "🏠", "🏢", "🏫", "🏥", "🏦", "🏪", "🏛️", "⛪️", "🛕", "⛩️", "🕋", "🕍", 
    "🏞️", "🏖️", "🏝️", "⛰️", "🏔️", "🌋", "🏕️", "⛺️", "✈️", "🚆", "🚇", 
    "🚌", "🚗", "🚕", "🚲", "🛵", "🛳️", "🚀", "🚁", "🛸", "🏠", "🏢", "🏫", 
    "🏥", "🏦", "🏪", "🏛️", "⛪️", "🛕", "⛩️", "🕋", "🕍", "🏞️", "🏖️", "🏝️", 
    "⛰️", "🏔️", "🌋", "🏕️", "⛺️", "🏞️",

    // Objek
    "📱", "💻", "🖥️", "🖨️", "📸", "🎥", "🎧", "🎤", "🎨", "📚", "✏️", 
    "✂️", "🗝️", "🔐", "⌚️", "💍", "💎", "💰", "💵", "💳", "📱", "💻", "🖥️", 
    "🖨️", "📸", "🎥", "🎧", "🎤", "🎨", "📚", "✏️", "✂️", "🗝️", "🔐", "⌚️", 
    "💍", "💎", "💰", "💵", "💳",

    // Simbol
    "⭐", "🌟", "💫", "✨", "⚡️", "🔥", "💧", "💨", "🌈", "☁️", "☀️", 
    "🌕", "🌑", "⭐", "🌟", "💫", "✨", "⚡️", "🔥", "💧", "💨", "🌈", 
    "☁️", "☀️", "🌕", "🌑", "💯", "🔢", "🆚", "➕", "➖", "✖️", "➗", "💲", 
    "💰", "💳", "💎", "💍", "👑", "🏆", "🥇", "🥈", "🥉", "🏅", "🎗️", "🎁", 
    "🎀", "🎈", "🎉", "🎊", "🎆", "🎇", "🧨", "✨", "💫", "⭐️", "🌟", "💫", 
    "✨", "⚡️", "🔥", "💧", "💨", "🌈", "☁️", "☀️", "🌕", "🌑", "☔️", "☂️", 
    "🌂", "❄️", "⛄️", "💧", "💦", "🌊", "🌋", "⛰️", "🏔️", "🗻", "🏕️", "⛺️", 
    "🏞️", "🏖️", "🏝️", "🏜️", "🌋", "⛰️", "🏔️", "🗻", "🏕️", "⛺️", "🏞️", 

    // Bendera
    "🇺🇸", "🇨🇳", "🇮🇳", "🇮🇩", "🇯🇵", "🇰🇷", "🇬🇧", "🇫🇷", "🇩🇪", "🇮🇹", 
    "🇪🇸", "🇷🇺", "🇧🇷", "🇦🇺", "🇨🇦", "🇲🇽", "🇦🇷", "🇨🇱", "🇨🇴", "🇵🇪", "🇧🇴", 
    "🇪🇨", "🇻🇪", "🇬🇹", "🇭🇳", "🇸🇻", "🇳🇮", "🇨🇷", "🇵🇦", "🇩🇴", "🇭🇹", "🇨🇺", 
    "🇯🇲", "🇧🇧", "🇹🇹", "🇬🇩", "🇸🇹", "🇻🇨", "🇧🇸", "🇧🇿", "🇬🇾", "🇸🇷", "🇫🇯", 
    "🇹🇴", "🇸🇲", "🇲🇨", "🇱🇮", "🇦🇩", "🇲🇹", "🇨🇾", "🇱🇺", "🇮🇪", "🇳🇱", "🇧🇪", 
    "🇩🇰", "🇸🇪", "🇳🇴", "🇫🇮", "🇮🇸", "🇵🇹", 
];

module.exports = { emojis };