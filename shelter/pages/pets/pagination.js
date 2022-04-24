paginationPetsjson=`[
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
    }
  ]`
paginationPetsObj= JSON.parse(paginationPetsjson);
 

///////////////////////////Генератор массива////////////////////////////////////////////////

let petsCreator = {
  testarr:[],
  
  randomaize(){
    let num=Math.floor(Math.random()*8);
    if(!this.testarr.includes(num, 0)){
      return num
    }
    return this.randomaize()
  },
  generator (arr){
    this.testarr=[];
    let newArr=[];
    let petsarr=[];
    for(let k=0;k<3;k++){
      for(let i=0;i<8;i++){
        this.testarr.push(this.randomaize())
      }
      for(let i=0;i<=7;i++){
        newArr.push(this.testarr[i])
      }
      for(let i=5;i>=0;i--){
        newArr.push(this.testarr[i])
      }
      newArr.push(this.testarr[6])
      newArr.push(this.testarr[7])
      this.testarr=[]
    }
    for(let i in newArr){
      petsarr.push(arr[newArr[i]])
    }
    return petsarr
  },
}


//////////////////////////////////////////////////////////////////////////


////////////////Контейнер с карточками /////////////////////////////////
let petsContainer={
    container:document.querySelector('.pets_slider'),
    pageNumber:document.querySelector('.pets_container_pageNavigator_pageNumber'),
    btnNext:document.querySelector('.nexPage'),
    btnLast:document.querySelector('.lastPage'),
    btnPrev:document.querySelector('.prevPage'),
    btnFirst:document.querySelector('.firstPage'),
    pageCount:1,
    petsCountOnPage:2,
    curentPage:1,
    pets:[{}],
    currentPagePets:[{}],

    clear(){
        this.container.innerHTML=''; //Clear
    },
    insert(elem){
        petsContainer.container.insertAdjacentHTML("afterbegin",`${elem}`)
    },
    setPageCount(petsArr){
        let len = petsArr.length;
        if(document.documentElement.clientWidth>1199){
            this.petsCountOnPage=8;
            this.pageCount=Math.ceil(petsArr.length/8)
        } else if(document.documentElement.clientWidth>767 && document.documentElement.clientWidth<1200){
            this.petsCountOnPage=6;
            this.pageCount=Math.ceil(petsArr.length/6)
        }  else if(document.documentElement.clientWidth<768){
            this.petsCountOnPage=3;
            this.pageCount=Math.ceil(petsArr.length/3)
        };
    },
    insertElementsOnPage(arr,page){
        this.clear();
        this.curentPage=page;
        this.currentPagePets=[];
        let cardCounter=0; // Для стилей кнопки, чтобы потом работать с модальными окнами
        let counter = page*this.petsCountOnPage<arr.length?page*this.petsCountOnPage:arr.length; // Проходов цикла столько, сколько элементов в случае, если элементов меньше, чем влазит на страницу
        this.pageNumber.innerHTML=`<pre>${page}<pre>`;
        //Удаление ивент листенера
        for(let i=0;i<9;i++){
            if(document.querySelector(`.card${i}`)!=null){
                document.querySelector(`.card${i}`).addEventListener('click',()=>modalWindow.openModal(this.currentPagePets[i]));
            }
        }
        ////Отрисовка карточек
        for(let i=(page-1)*this.petsCountOnPage;i<counter;i++){
            this.currentPagePets.push(arr[i])
            this.insert(`
           <div class="pets_slider_card card${cardCounter} next">
                <img src="${arr[i].img}" alt="pet" width="270" height="270">
                <div class="pets_slider_card_text"> ${arr[i].name}</div>
                <button class="pets_slider_card_button"><div class="pets_slider_card_button_text">Learn more</div></button>
            </div>
           `)
           cardCounter++;   
        }
        for(let i=0;i<9;i++){
            if(document.querySelector(`.card${i}`)!=null){
                document.querySelector(`.card${i}`).addEventListener('click',()=>modalWindow.openModal(this.currentPagePets[i]));
            }
        }
    },
    init(arr=[]){ //Получает массив объектов (питомцев)
        let len=arr.length;
        this.setPageCount(arr)
        this.insertElementsOnPage(arr,1)
        this.btnNext.addEventListener("click",()=>petsContainer.nextPage(arr)); 
        this.btnLast.addEventListener("click",()=>petsContainer.lastPage(arr));
        this.btnPrev.addEventListener("click",()=>petsContainer.prevPage(arr)); 
        this.btnFirst.addEventListener("click",()=>petsContainer.firstPage(arr));
    },
    nextPage(arr){
        if(this.curentPage<this.pageCount){
            this.curentPage++;
            this.insertElementsOnPage(arr,this.curentPage);
            this.btnPrev.classList.add('arrowEnabled');
            this.btnPrev.classList.remove('disabled');
            this.btnFirst.classList.add('arrowEnabled');
            this.btnFirst.classList.remove('disabled');
        }
        if(this.pageCount==this.curentPage){
            this.btnNext.classList.remove('arrowEnabled');
            this.btnNext.classList.add('disabled');
            this.btnLast.classList.remove('arrowEnabled');
            this.btnLast.classList.add('disabled');
        }
    },
    lastPage(arr){
            this.curentPage=this.pageCount;
            this.insertElementsOnPage(arr,this.curentPage);
            this.btnNext.classList.remove('arrowEnabled');
            this.btnNext.classList.add('disabled');
            this.btnLast.classList.remove('arrowEnabled');
            this.btnLast.classList.add('disabled');
            this.btnFirst.classList.add('arrowEnabled');
            this.btnFirst.classList.remove('disabled');
            this.btnPrev.classList.add('arrowEnabled');
            this.btnPrev.classList.remove('disabled');
    },
    prevPage(arr){
        if(this.curentPage>1){
            this.curentPage--;
            this.insertElementsOnPage(arr,this.curentPage);
            this.btnNext.classList.add('arrowEnabled');
            this.btnNext.classList.remove('disabled');
            this.btnLast.classList.add('arrowEnabled');
            this.btnLast.classList.remove('disabled');
        }
        if(this.curentPage==1){
            this.btnPrev.classList.remove('arrowEnabled');
            this.btnPrev.classList.add('disabled');
            this.btnFirst.classList.remove('arrowEnabled');
            this.btnFirst.classList.add('disabled');
        }
    },
    firstPage(arr){
            this.curentPage=1;
            this.insertElementsOnPage(arr,this.curentPage);
            this.btnPrev.classList.remove('arrowEnabled');
            this.btnPrev.classList.add('disabled');
            this.btnFirst.classList.remove('arrowEnabled');
            this.btnFirst.classList.add('disabled');
            this.btnLast.classList.add('arrowEnabled');
            this.btnLast.classList.remove('disabled');
            this.btnNext.classList.add('arrowEnabled');
            this.btnNext.classList.remove('disabled');
    }

}   
////////////////////////////////////////////////////////////////
let myPets=petsCreator.generator(paginationPetsObj); ///Генерим петов
petsContainer.init(myPets); // инициализация контейнера при загрузке страницы
window.addEventListener('resize', function(event){petsContainer.setPageCount(paginationPetsObj)});// отслеживает изменение размера окна и подгоняет пагинацию


//petsContainer.init(paginationPetsObj); // инициализация контейнера при загрузке страницы
//petsCreator.generator(paginationPetsObj)
//console.log(petsCreator.generator(paginationPetsObj))
