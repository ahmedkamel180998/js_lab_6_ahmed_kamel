class Engine {
  static #count = 0;
  constructor(source) {
    if (new.target.name === "Engine") {
      throw new Error("Cannot instantiate an abstract class.");
    }
    this.source = source;
  }
}

class Car extends Engine {
  constructor(top, left, source) {
    super(source);
    this.top = top;
    this.left = left;

    this.img = document.createElement("img");
    this.img.src = this.source;
    this.img.width = 100;
    this.img.style.position = "absolute";
    this.img.style.top = `${this.top}px`;
    this.img.style.left = `${this.left}px`;
    this.img.style.transition = "left 0.5s ease-in-out";
    document.body.appendChild(this.img);
  }

  set Top(value) {
    this.top = value;
    this.img.style.top = `${this.top}px`;
  }

  set Left(value) {
    this.left = value;
    this.img.style.left = `${this.left}px`;
  }

  moveLeft() {
    this.Left = this.left - 100;
  }

  moveRight() {
    this.Left = this.left + 100;
  }

  changeStyle(styles) {}

  moveCar(direction) {
    if (direction === "left") {
      this.moveLeft();
    } else if (direction === "right") {
      this.moveRight();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const car = new Car(200, 200, "car.jpg");

  document.getElementById("move-left").addEventListener("click", () => {
    car.moveCar("left");
  });

  document.getElementById("move-right").addEventListener("click", () => {
    car.moveCar("right");
  });
});
