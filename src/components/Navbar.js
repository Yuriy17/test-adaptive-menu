export default class Navbar {
  constructor() {
    this.menuListElement = document.querySelector('.menu__list');
    this.burger = document.querySelector('#burger');
  }
  
  init(){
    this.menuListElement.addEventListener('click',(event)=>{
      if(event.target.classList.contains('arrow')){
        event.target.classList.toggle('arrow_active');
      }
    });
    this.burger.addEventListener('click',()=>{
      document.body.classList.toggle('lock');
    });
  }
};
