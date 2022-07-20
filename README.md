<img src="./assets/intro.gif">

PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to create a glitch effect on images. No canvas or DOM manipulations are needed.

Want to try it out? Check out the [demo](https://7ph.github.io/powerglitch/#/playground) 😊

<p align="right">
    Like this project? Give a star 🌟
</p>

## Getting started

1. Install PowerGlitch using npm or yarn
    ```bash
    npm i --save powerglitch
    # or
    yarn add powerglitch
    ```

2. Add a container for the image with fixed width and height
    ```html
    <div id="glitched-image"></div>
    ```
    ```css
    #glitched-image {
        width: 80px;
        height: 80px;
    }
    ```

3. Import PowerGlitch using ES6 import
    ```javascript
    import { PowerGlitch } from 'powerglitch'
    ```
    or using ES5 require
    ```javascript
    const PowerGlitch = require('powerglitch').PowerGlitch
    ```

4. Glitch the image
    ```javascript
    PowerGlitch.glitch(
        '#glitched-image',
        { imageUrl: 'https://.../image.png' }
    )
    ```

5. Customize the glitch effect
    ```javascript
    PowerGlitch.glitch(
        '#glitched-image',
        {
            imageUrl: 'https://.../image.png',
            backgroundColor: 'transparent',
            timing: {
                duration: 2 * 1000,
                iterations: Infinity,
            },
            glitchTimeSpan: {
                start: 0.5,
                end: 0.7,
            },
            shake: {
                velocity: 20,
                amplitudeX: 0.4,
                amplitudeY: 0.4,
            },
            slice: {
                count: 10,
                velocity: 25,
                minHeight: 0.02,
                maxHeight: 0.15,
                hueRotate: true,
            },
        }
    )
    ```

## Useful links

- Visually try out effects using the [demo](https://7ph.github.io/powerglitch/#/playground).
- Lookup PowerGlitch [home page](https://7ph.github.io/powerglitch/).
- For detailed usage, check the [API Reference](https://7ph.github.io/powerglitch/#/api).
