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
            const height = subMenu.scrollHeight;
            
            if (subMenu.classList.contains('desplegar')) {
                subMenu.classList.remove('desplegar');
                // angleDown.style.transform = 'rotate(0deg)';
                // angleDown.style.transition = 'transform 200ms';
                subMenu.removeAttribute('style');
            } else {   
                subMenu.classList.add('desplegar');
                subMenu.style.height = height + "px";
                // angleDown.style.transform = 'rotate(90deg)';
                // angleDown.style.transition = 'transform 200ms';
            }
        }
    })
}