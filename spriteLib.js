/* spriteLib.js: A simple JavaScript library to draw sprites on an HTML canvas */

class Sprite {
    constructor(imageSrc, width, height) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.width = width;
        this.height = height;
    }

    draw(ctx, x, y) {
        if (this.image.complete) {
            ctx.drawImage(this.image, x, y, this.width, this.height);
        } else {
            this.image.onload = () => {
                ctx.drawImage(this.image, x, y, this.width, this.height);
            };
        }
    }
}

const keyBindings = {};

function bindKey(key, pressCallback, releaseCallback) {
    keyBindings[key] = { press: pressCallback, release: releaseCallback };
}

function handleKeyDown(event) {
    const keyBinding = keyBindings[event.key];
    if (keyBinding && keyBinding.press) {
        keyBinding.press();
    }
}

function handleKeyUp(event) {
    const keyBinding = keyBindings[event.key];
    if (keyBinding && keyBinding.release) {
        keyBinding.release();
    }
}

function initializeKeyBindings() {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
}

export { Sprite, bindKey, initializeKeyBindings };