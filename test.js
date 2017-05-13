// "use strict";
//
// const polyglot = {
//     name : "Michel Thomas",
//     languages : ["Spanish", "French", "Italian", "German", "Polish"],
//     introduce : function() {
//         // this.name is "Michel Thomas"
//         const self = this;
//         console.log('languages', this.languages);
//         this.languages.forEach(language => {
//             // this.name is undefined, so we have to use our saved "self" variable
//             console.log("My name is " + this.name + ", and I speak " + language + ".");
//         });
//     }
// }
//
// polyglot.introduce();
//
//


(function() {

  var name = 'other name';

  this.name = 'Dillon';

  this.run = function () {
    console.log('name', name);
    console.log('this.name', this.name);
  }

  this.run();

})();

// test();

// test.run();
