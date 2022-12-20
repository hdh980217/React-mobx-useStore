import { makeAutoObservable } from "mobx";

class Banana {
    num2 = 0
    constructor() {
        makeAutoObservable(this)
    }
    increase() { 
      console.log('increase');
      this.num2 += 1; 
    }
}
export default new Banana();