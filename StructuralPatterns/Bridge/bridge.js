// Implementor Interface
class Theme {
  applyTheme() {
    throw new Error("This method should be overwritten!");
  }
}

// Concrete Implementor 1
class LightTheme extends Theme {
  applyTheme() {
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
  }
}

// Concrete Implementor 2
class DarkTheme extends Theme {
  applyTheme() {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#FFFFFF";
  }
}

// Abstraction
class UIComponent {
  constructor(theme) {
    this.theme = theme;
  }

  render() {
    throw new Error("This method should be overwritten!");
  }

  changeTheme(theme) {
    this.theme = theme;
    this.theme.applyTheme();
  }
}

// Re fined Abstraction
class makeContent extends UIComponent {
  render() {
    this.theme.applyTheme();
  }
}

const lightTheme = new LightTheme();
const darkTheme = new DarkTheme();

let themeSwitcher = document.getElementById("switch-theme");

themeSwitcher.addEventListener("click", () => {
  let toTheme = themeSwitcher.innerHTML === "dark" ? "light" : "dark";
  themeSwitcher.innerHTML = toTheme;
  let getTheme = toTheme === "dark" ? lightTheme : darkTheme;
  const content = new makeContent(getTheme);
  content.render();
});
