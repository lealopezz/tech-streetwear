let btnMenu = document.getElementById('btn-menu');
let sideMenu = document.getElementById('sidebar-menu');
let sideClose = document.getElementById('sidebar-close');
btnMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('show');
});
sideClose.addEventListener('click',()=>{
    sideMenu.classList.toggle('show');
});