import React, { useEffect } from 'react'
const ThemeToggle: React.FunctionComponent = () => {

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if ((document.body.classList.contains("dark-theme") !== prefersDarkScheme.matches)) {
            let element = document.getElementById('theme-indicator');
            console.log(element);
            if (element != null) {
                toggleTheme(element);
            }
        }
    })

    const toggleTheme = (target: HTMLElement) => {
        if (document.body.classList.contains("dark-theme")) {
            document.body.classList.remove('dark-theme');
            target.innerHTML = '<span class="material-icons-outlined" style="font-size: 32px">dark_mode</span>';
        }
        else {
            document.body.classList.add('dark-theme');
            target.innerHTML = '<span class="material-icons-outlined" style="font-size: 32px">light_mode</span>';
        }
    }

    return (
        <div id="theme-indicator" style={{ width: "32px", height: "32px"}} 
            onClick={(e) => { toggleTheme(e.currentTarget) }}>
        </div>
    )
}

export default ThemeToggle