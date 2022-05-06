///////////////////Burger Menu//////////////////////////
let burgerMenu={
    open:false,
    menu:document.querySelector('.header_burger'),
    nav: document.querySelector('nav'),
    burger:document.querySelector('.header_burger'),
    blackout:document.querySelector('.menuBlackout'),
    li:document.querySelectorAll('li'),

    showBurger(){
        if(this.open==false)
        {
        this.open=true;
        this.nav.classList.add('header_nav_visible');
        this.burger.classList.add('burger_rotate');
        this.blackout.style.display='block';
        this.blackout.addEventListener('click', ()=>burgerMenu.closeBurger())
        this.li.forEach(el=>el.addEventListener('click', ()=>burgerMenu.closeBurger()))
        document.querySelector('html').style.position="fixed";
        document.querySelector('html').style.ocerflow="hidden";
        } else {
            this.closeBurger();
        }
    },
    closeBurger(){
        this.open=false;
        this.blackout.style.display='none';
        this.nav.classList.remove('header_nav_visible')
        this.burger.classList.remove('burger_rotate');
        this.blackout.removeEventListener('click', ()=>this.closeBurger());
        this.li.forEach(el=>el.removeEventListener('click', ()=>burgerMenu.closeBurger()))
        document.querySelector('html').style.position="static";
        document.querySelector('html').style.ocerflow="visible";
    }

}
burgerMenu.menu.addEventListener('click', ()=>burgerMenu.showBurger())