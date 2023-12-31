
const themeToggle = document.getElementById("theme-toggle");
const themeToggleDark = document.getElementById('theme-toggle-dark')
const currentTheme = localStorage.getItem("theme");
if (!currentTheme){localStorage.setItem('theme', 'light-theme')}
else {
    document.body.classList.add(currentTheme);
}
if (currentTheme === 'dark-theme'){themeToggle.checked = true; themeToggleDark.checked = true}
themeToggleDark.addEventListener('click', ()=>{ if (document.body.classList.contains("dark-theme")) {
        
    document.body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light-theme");
} else { 
    document.body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
}})
themeToggle.addEventListener("click", () => {
   

    if (document.body.classList.contains("dark-theme")) {
        
        document.body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light-theme");
    } else { 
        document.body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark-theme");
    }
}); 
