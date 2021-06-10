const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
btnMenu.addEventListener('click',function(){
    menu.classList.toggle('show');
});

const subMenuBtn = document.querySelectorAll('.submenu-btn');
// const angleDown = document.getElementById('angleDown');
for(let i=0;i<subMenuBtn.length;i++){
    subMenuBtn[i].addEventListener('click', function(){
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const angle = this.firstElementChild;
            const height = subMenu.scrollHeight;
            
            if (subMenu.classList.contains('desplegar')) {
                subMenu.classList.remove('desplegar');
                angle.classList.remove('desplegar');
                angle.style.transform = 'rotate(0deg)';
                subMenu.removeAttribute('style');
            } else {   
                subMenu.classList.add('desplegar');
                subMenu.style.height = height + "px";
                angle.classList.add('desplegar');
                angle.style.transform = 'rotate(-90deg)';
            }
        }
    })
}