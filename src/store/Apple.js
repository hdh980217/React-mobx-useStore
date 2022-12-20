import { makeAutoObservable } from "mobx";

class Apple {
    num = 0
    constructor() {
        makeAutoObservable(this)
    }
    increase() { 
      console.log('increase');
      this.num += 1; 
    }
}
export default new Apple();