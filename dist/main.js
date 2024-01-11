(() => {
  "use strict";
  new (class {
    constructor(e) {
      this.name = e;
    }
    greet() {
      console.log("hello," + this.name + "!");
    }
  })("John").greet();
})();
