const pets = `[
    {
        "name": "Jennifer",
        "img": "./pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
    {
      "name": "Jennifer",
      "img": "./assets/images/pets-jennifer.png",
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
      "img": "./assets/images/pets-sophia.png",
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
      "img": "./assets/images/pets-woody.png",
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
      "img": "./assets/images/pets-scarlet.png",
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
      "img": "./assets/images/pets-katrine.png",
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
      "img": "./assets/images/pets-timmy.png",
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
      "img": "./assets/images/pets-freddie.png",
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
      "img": "./assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]`

let pet = JSON.parse(pets)[4];


let modalWindow = {
    modalWindowFade:document.querySelector('.modalWindowFade'),
    wrapper:document.querySelector('.wrapper'),
    modalWindow:document.querySelector('.modalWindow'),
    closeBtn:document.querySelector('.modalWindow_close'),

    img:document.querySelector('#modalWindow_img'),
    petName: document.querySelector('#petName'),
    petType:document.querySelector('#petType'),
    petDescription:document.querySelector('#petDescription'),
    petAge: document.querySelector('#petAge'),
    Inoculations: document.querySelector('#Inoculations'),
    Diseases:document.querySelector('#Diseases'),
    Parasites:document.querySelector('#Parasites'),

    setPet(pet){
        modalWindow.img.src=pet.img;
        modalWindow.petName.innerHTML=pet.name;
        modalWindow.petType.innerHTML=`${pet.type} - ${pet.breed}`;
        modalWindow.petDescription.innerHTML=pet.description;
        modalWindow.petAge.innerHTML=`<b>Age:</b> ${pet.age}`;
        modalWindow.Inoculations.innerHTML=`<b>Inoculations:</b>  ${pet.inoculations}`;
        modalWindow.Diseases.innerHTML=`<b>Diseases:</b> ${pet.diseases}`;
        modalWindow.Parasites.innerHTML=`<b>Parasites:</b> ${pet.parasites}`;
    },
    closeModal(){
       modalWindow.modalWindowFade.style.display='none';
       modalWindow.wrapper.style.display='none';
    }
}

modalWindow.setPet(pet); //Установка питомца в модальное окно
modalWindow.closeBtn.addEventListener('click',()=>modalWindow.closeModal()); // Закрыть окно по кнопке
///Закрыть окно при нажатии на серую область ///
modalWindow.modalWindowFade.addEventListener('click',(e)=>
    {
        if(e.path[0].classList[0]=="modalWindowFade"){
            modalWindow.closeModal();
        }
    })


// Чтобы удалить скрол, нужно поставить атрибут overflow:hiden height:100vh для тега html

/*
function xer(){
for(let i=0;i<=6;i++){
     setTimeout(()=>{
        pet = JSON.parse(pets)[i];
        modalWindow.setPet(pet)
        if(i==6){xer()}
        },i*1000)
        
}}
xer()
*/