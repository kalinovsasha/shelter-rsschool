
petsDb=`
[
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/Charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      }
  ]
`
pets=JSON.parse(petsDb);








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
        } else {
            this.open=false;
            this.blackout.style.display='none';
            this.nav.classList.remove('header_nav_visible')
            this.burger.classList.remove('burger_rotate');
            this.blackout.removeEventListener('click', ()=>this.closeBurger());
            this.li.forEach(el=>el.removeEventListener('click', ()=>burgerMenu.closeBurger()))
        }
    },
    closeBurger(){
        this.open=false;
        this.blackout.style.display='none';
        this.nav.classList.remove('header_nav_visible')
        this.burger.classList.remove('burger_rotate');
        this.blackout.removeEventListener('click', ()=>this.closeBurger());
        this.li.forEach(el=>el.removeEventListener('click', ()=>burgerMenu.closeBurger()))
    }

}
burgerMenu.menu.addEventListener('click', ()=>burgerMenu.showBurger())

//////////////////Slider Main Page/////////////////////

let slider={
    slider_card:document.querySelector('.slider_card'),
    buttonPrev:document.querySelector('.slider_button1'),
    buttonNext:document.querySelector('.slider_button2'),
    cards:[document.querySelector('.card1'),document.querySelector('.card2'),document.querySelector('.card3'),document.querySelector('.card4'),document.querySelector('.card5'),
        document.querySelector('.card6'),document.querySelector('.card7'),document.querySelector('.card8'),document.querySelector('.card9')], 
    petsRandom:[pets[0],pets[2],pets[4]],
    petsActual:[pets[0],pets[2],pets[4]],
    petsActualIndex:[0,2,4],
    petsRandomIndex:[0,2,4],

    setCards(){
        
        this.setRandomPets();
        this.petsActual=this.petsRandom;
        this.petsActualIndex=this.petsRandomIndex;
        for(let i=0; i<3;i++){
            slider.cards[i].innerHTML=`
                <div class="slider_card_image"><img src="${this.petsRandom[i].img}" alt="name"></div>
                <div class="slider_card_text">${this.petsRandom[i].name}</div>
                <div class="slider_card_button button${this.petsRandomIndex[i]}">Learn more</div>`
        };
        for(let i=6; i<9;i++){
            slider.cards[i].innerHTML=`
                <div class="slider_card_image"><img src="${this.petsRandom[i-6].img}" alt="name"></div>
                <div class="slider_card_text">${this.petsRandom[i-6].name}</div>
                <div class="slider_card_button button${this.petsRandomIndex[i]}">Learn more</div>`
        };
    },
    setRandomPets(){
        function random(){
            let ran;
            while(true){
                ran= Math.floor( Math.random()*8);
                if(ran!=slider.petsActualIndex[0] && ran!=slider.petsActualIndex[1] && ran!=slider.petsActualIndex[2] && ran!=slider.petsRandomIndex[0] && ran!=slider.petsRandomIndex[1] && ran!=slider.petsRandomIndex[2] ){
                    return ran
                }
            }
        }
            this.petsRandomIndex[0]=random();
            this.petsRandomIndex[1]=random();
            this.petsRandomIndex[2]=random();
            this.petsRandom[0]=pets[this.petsRandomIndex[0]];
            this.petsRandom[1]=pets[this.petsRandomIndex[1]];
            this.petsRandom[2]=pets[this.petsRandomIndex[2]];
    },
    moveNext(){
        this.cards[0].classList.add('moveNext');
        this.cards[1].classList.add('moveNext');
        this.cards[2].classList.add('moveNext');
        this.cards[3].classList.add('moveNext');
        this.cards[4].classList.add('moveNext');
        this.cards[5].classList.add('moveNext');
    },
    movePrev(){
        this.cards[6].classList.add('movePrev');
        this.cards[7].classList.add('movePrev');
        this.cards[8].classList.add('movePrev');
        this.cards[3].classList.add('movePrev');
        this.cards[4].classList.add('movePrev');
        this.cards[5].classList.add('movePrev');
    },
    removeNext(){
        this.cards[0].classList.remove('moveNext');
        this.cards[1].classList.remove('moveNext');
        this.cards[2].classList.remove('moveNext');
        this.cards[3].classList.remove('moveNext');
        this.cards[4].classList.remove('moveNext');
        this.cards[5].classList.remove('moveNext');
    },
    removePrev(){
        this.cards[6].classList.remove('movePrev');
        this.cards[7].classList.remove('movePrev');
        this.cards[8].classList.remove('movePrev');
        this.cards[3].classList.remove('movePrev');
        this.cards[4].classList.remove('movePrev');
        this.cards[5].classList.remove('movePrev');
    },
}


slider.buttonPrev.addEventListener('click',()=>{
    slider.movePrev()
    slider.cards[3].addEventListener('animationend',()=>{
        slider.removePrev();
        for(let i=3; i<6;i++){
            slider.cards[i].innerHTML=`
            <div class="slider_card_image"><img src="${slider.petsActual[i-3].img}" alt="name"></div>
            <div class="slider_card_text">${slider.petsActual[i-3].name}</div>
            <div class="slider_card_button button${slider.petsRandomIndex[i-3]}">Learn more</div>`
        };
    });
    slider.setCards();
});

slider.buttonNext.addEventListener('click',()=>{
    slider.moveNext()
    slider.cards[3].addEventListener('animationend',()=>
        {
        slider.removeNext();
        for(let i=3; i<6;i++){
            slider.cards[i].innerHTML=`
            <div class="slider_card_image"><img src="${slider.petsActual[i-3].img}" alt="name"></div>
            <div class="slider_card_text">${slider.petsActual[i-3].name}</div>
            <div class="slider_card_button button${slider.petsRandomIndex[i-3]}">Learn more</div>`
        };
    });
    slider.setCards();
});
    






