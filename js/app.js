// variables

let theme = localStorage.getItem('theme')

let themeDots = document.getElementsByClassName('theme-dot')


for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', () => {
        let mode = themeDots[i].dataset.mode
        setTheme(mode)
    })
}

const setTheme = (mode) => {
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'css/style.css'
    }

    if (mode === 'blue') {
        document.getElementById('theme-style').href = 'css/style-blue.css'
    }

    if (mode === 'green') {
        document.getElementById('theme-style').href = 'css/style-green.css'
    }

    if (mode === 'purple') {
        document.getElementById('theme-style').href = 'css/style-purple.css'
    }

    localStorage.setItem('theme', mode)
}

if (theme === null) {
    setTheme('light')
} else {
    setTheme(theme)
}