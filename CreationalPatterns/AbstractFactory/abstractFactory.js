// Button interface
class Button {
    render() {
        throw new Error("This method should be overridden!");
    }
}

// Checkbox interface
class Checkbox {
    render() {
        throw new Error("This method should be overridden!");
    }
}

// Windows button
class WindowsButton extends Button {
    render() {
        console.log("Rendering Windows button");
    }
}

// Windows checkbox
class WindowsCheckbox extends Checkbox {
    render() {
        console.log("Rendering Windows checkbox");
    }
}

// macOS button
class MacOSButton extends Button {
    render() {
        console.log("Rendering macOS button");
    }
}

// macOS checkbox
class MacOSCheckbox extends Checkbox {
    render() {
        console.log("Rendering macOS checkbox");
    }
}

class GUIFactory {
    createButton() {
        throw new Error("This method should be overridden!");
    }

    createCheckbox() {
        throw new Error("This method should be overridden!");
    }
}

class WindowsFactory extends GUIFactory {
    createButton() {
        return new WindowsButton();
    }

    createCheckbox() {
        return new WindowsCheckbox();
    }
}

class MacOSFactory extends GUIFactory {
    createButton() {
        return new MacOSButton();
    }

    createCheckbox() {
        return new MacOSCheckbox();
    }
}

function createUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.render();
}

// Create Windows UI
const windowsFactory = new WindowsFactory();
createUI(windowsFactory);

// Create macOS UI
const macFactory = new MacOSFactory();
createUI(macFactory);
