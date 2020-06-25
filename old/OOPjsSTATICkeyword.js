class MyClass {
  /** Static functions can be used only without instanting their class - CANT be used when class is instatntied */
  static hello() {
    console.log("hello");
  }
  /** Methods can be used only on instances of class */
  hello() {
    console.log("2nd hello");
  }
}

MyClass.hello();
const my = new MyClass();
my.hello();
