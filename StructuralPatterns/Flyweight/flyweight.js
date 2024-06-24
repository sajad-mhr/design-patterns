class Character {
  constructor(font, color, size) {
    this.font = font;
    this.color = color;
    this.size = size;
  }

  display(positionX, positionY) {
    console.log(
      `Character with font: ${this.font}, color: ${this.color}, size: ${this.size} at position (${positionX}, ${positionY})`
    );
  }
}

class CharacterFactory {
  constructor() {
    this.characters = {};
  }

  getCharacter(font, color, size) {
    const key = `${font}-${color}-${size}`;
    if (!this.characters[key]) {
      this.characters[key] = new Character(font, color, size);
    }
    return this.characters[key];
  }
}

const factory = new CharacterFactory();

const character1 = factory.getCharacter("Arial", "Black", 12);
character1.display(10, 20);

const character2 = factory.getCharacter("Arial", "Black", 12);
character2.display(30, 40);

const character3 = factory.getCharacter("Times New Roman", "Red", 14);
character3.display(50, 60);
