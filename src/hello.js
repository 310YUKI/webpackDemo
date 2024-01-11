export class Hello {
  constructor(name){
    this.name = name;
  }

  greet(){
    console.log("hello," + this.name + "!");
  }
}
