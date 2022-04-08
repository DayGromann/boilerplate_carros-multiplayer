class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  esconderElementos() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

}
