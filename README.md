# UI-SLIDER

## [DEMO URL](https://ukarpenkov.github.io/ui-slider/demo/)

![](https://raw.githubusercontent.com/ukarpenkov/ui-slider/main/src/img/uislider.png)

## How to Use This Slider

1. Clone [this repository](https://github.com/ukarpenkov/get-plugin/tree/main) into your folder  
   or copy the following files and folders into your project:

   - `index.js`
   - the `plugin` folder

2. Create an `index.html` file in your project folder with the following basic markup:

   ```html
   <div class="wrapper" id="wrapper">
     <div class="slider-page"></div>
     <div class="toolbar-page"></div>
   </div>
   ```

3. Install the bundler you need, for example, Parcel:

   ```bash
   npm i
   npm i parcel
   ```

4. Check the path for including the plugin's styles in `index.html`:

   ```html
   <link rel="stylesheet" href="./plugin/slider-plugin/index.bb83c982.css" />
   ```

   Update the path if necessary.

5. Check the path for including the plugin's JavaScript code in `index.js`:

   ```javascript
   import {
     setSliderSettings,
     initSlider,
     initTooltips,
   } from "./plugin/slider-plugin/index.20a44db0";
   ```

6. Check the path for including `index.js` in `index.html`:

   ```html
   <script type="module" src="index.js"></script>
   ```

   Update the path if necessary.

7. Add the necessary commands for starting and building the project in `package.json`:

   ```json
   "scripts": {
      "start": "yarn parcel index.html",
      "build": "parcel build index.html"
   },
   ```

8. To start the project, run the following command in the console:

   ```bash
   yarn parcel index.html
   ```

9. Use the following arguments for the initial slider setup:
   ```javascript
   let slider1 = new (0, setSliderSettings)(
     "1", // CSS class for the slider wrapper
     "interval", // "single"/"interval" - 1 or 2 handles
     "horizontal", // "vertical"/"horizontal" - slider orientation
     1, // current position of the left handle
     50, // current position of the right handle
     1, // minimum possible value
     100, // maximum possible value
     1, // slider step
     false, // true/false - show/hide tooltips
     true // true/false - show/hide value block
   );
   slider1.init();
   ```

## Application Architecture

### [APP UML Diagram](https://viewer.diagrams.net/index.html?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1Ox9ASGbxKiB7AVY_K0LVlEeC8Fwm2Tb8)

To initialize the slider, create a new object of the `AddSliderToStore` class and call the `.init()` method.  
The `AddSliderToStore` class contains the main properties and methods of the slider:

```javascript
id: string - sequential ID
interval: 'single' | 'interval' - options for 1 or 2 handles
orientation: 'vertical' | 'horizontal' - slider orientation
minValue: number - initial position of the left handle
maxValue: number - initial position of the right handle
minScale: number - minimum possible value
maxScale: number - maximum possible value
step: number - slider step
tooltip: boolean - show/hide tooltips
valueBlock: boolean - show/hide value block
```

All changes to the slider values during usage are handled through a reducer function. Any change (e.g., moving a handle, entering new values, toggling checkboxes) triggers an event that updates the slider and toolbar state.

For example, when toggling the checkbox for vertical orientation, the reducer is triggered:

```javascript
case 'VERTICAL_ORIENTATION':
   return state.map((slider) => {
      if (slider.id === action.id) {
         return { ...slider, orientation: 'vertical' };
      }
      return slider;
   });
```

The reducer is called from the `changeOrientation()` handler attached to the checkbox:  
`src\scripts\controller\toolbarHandlers\toolbar-handlers.ts`

After each state update, the `updateSliders()` function is called to refresh components with the new data.

The slider and toolbar are rendered using the `initSlider` and `initToolbar` functions. These functions contain the markup and core behavior logic.

## Dependencies

```json
"dependencies": {
   "jquery": "^3.6.1",
   "mermaid": "^9.3.0",
   "pug": "^3.0.2",
   "yarn": "^1.22.21"
},
"name": "ui-slider",
"version": "1.0.0",
"description": "This is a plugin for jQuery that implements the 'slider' functionality - a special controller that allows you to drag for a given numeric value",
"repository": "https://github.com/ukarpenkov/ui-slider.git",
"browserslist": "> 0.5%, last 2 versions, not dead",
"author": "ukarpenkov <truloveu@gmail.com>",
"license": "MIT",
"source": "src/index.pug",
"scripts": {
   "start": "yarn parcel src/index.pug",
   "build": "parcel build --no-optimize src/index.pug",
   "wdio": "wdio run ./wdio.conf.js"
},
"devDependencies": {
   "@parcel/compressor-brotli": "^2.7.0",
   "@parcel/compressor-gzip": "^2.7.0",
   "@parcel/transformer-pug": "^2.7.0",
   "@types/jest": "^29.2.5",
   "@types/jquery": "^3.5.29",
   "@wdio/cli": "^8.1.3",
   "@wdio/local-runner": "^8.1.3",
   "@wdio/mocha-framework": "^8.1.2",
   "@wdio/spec-reporter": "^8.1.2",
   "chromedriver": "^113.0.0",
   "eslint": "^8.56.0",
   "jest-environment-jsdom": "^29.3.1",
   "parcel": "^2.7.0",
   "ts-node": "^10.9.1",
   "typescript": "^4.9.4",
   "wdio-chromedriver-service": "^8.1.1"
}
```
