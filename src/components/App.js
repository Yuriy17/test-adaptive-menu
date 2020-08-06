import Navbar from "./Navbar";

export default class App {
  init(){
    window.addEventListener('DOMContentLoaded', () => {
      this.navbar = new Navbar();
      this.navbar.init();
    });
  }
};
