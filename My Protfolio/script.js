console.log("script runnning...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener = ("click", () => {
    document.querySelector('.sidebarGo').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebarGo').classList.toggle('sidebarGo')) {
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.cross').style.display = 'inline'
    }
})