// Bump this version alongside the CSS and script URLs in index.html when assets change.
const assetVersion = '20261117-8'

const themeStyles = {
    light: 'css/style.css',
    blue: 'css/style-blue.css',
    green: 'css/style-green.css',
    purple: 'css/style-purple.css',
}

const themeButtons = document.querySelectorAll('.theme-dot')
const themeStyle = document.getElementById('theme-style')

function setTheme(mode) {
    const selectedMode = Object.hasOwn(themeStyles, mode) ? mode : 'light'

    themeStyle.href = `${themeStyles[selectedMode]}?v=${assetVersion}`
    themeButtons.forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.mode === selectedMode))
    })

    try {
        localStorage.setItem('theme', selectedMode)
    } catch {
        // Theme switching still works when browser storage is unavailable.
    }
}

themeButtons.forEach(button => {
    button.addEventListener('click', () => setTheme(button.dataset.mode))
})

let savedTheme = 'light'
try {
    savedTheme = localStorage.getItem('theme') || 'light'
} catch {
    // Use the default theme when browser storage is unavailable.
}
setTheme(savedTheme)
