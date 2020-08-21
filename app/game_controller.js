class GameController {
  constructor(control) {
    this.control = control;
  }

  draw() {
    window.ctx.fillStyle = "orange";
    window.ctx.font = "48px serif";
    window.ctx.fillText("Hello WORLD", 50, 50);
  }

  update() {}
}

export default GameController;
