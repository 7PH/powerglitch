<img src="./assets/intro.gif">

PowerGlitch is a standalone library with no external dependencies. It leverages CSS animations to create a glitch effect on images. No canvas or DOM manipulations are needed. It weights around 1.8kb minified and gzipped and 4kb minified.<br>

Want to try it out? Check out the [demo](https://7ph.github.io/powerglitch/#/playground) 😊

<p align="right">
    Like this project? Give a star 🌟
</p>

## Getting started

1. Install PowerGlitch using a package manager
    ```bash
    npm i --save powerglitch
    # or
    yarn add powerglitch
    ```
    or by saving the web bundle in [dist/powerglitch.min.js](./dist/powerglitch.min.js) and importing it using a script tag
    ```html
    <script src="./path/to/your/powerglitch.min.js"></script>
    ```

2. Find an image to glitch
    ```html
    <img src='https://.../image.png' class='glitch' />
    ```

3. Import PowerGlitch using ES6 import
    ```javascript
    import { PowerGlitch } from 'powerglitch'
    ```
    or using ES5 require
    ```javascript
    const PowerGlitch = require('powerglitch').PowerGlitch
    ```
    if you are importing PowerGlitch using a `script` tag, the `PowerGlitch` global variable is automatically available.

4. Glitch the image
    ```javascript
    PowerGlitch.glitch('img.glitch')
    ```

5. That's it, your image is glitched!
6. For customization and optimization tips, check-out the [usage guide](https://7ph.github.io/powerglitch/#/usage).

## Useful links

- Visually try out effects using the [demo](https://7ph.github.io/powerglitch/#/playground).
- Lookup PowerGlitch [home page](https://7ph.github.io/powerglitch/).
- For customization and optimization tips, check the [usage guide](https://7ph.github.io/powerglitch/#/usage).
