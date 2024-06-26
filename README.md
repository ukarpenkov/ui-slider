# UI-SLIDER

## [DEMO URL](https://ukarpenkov.github.io/ui-slider/demo/)

![](https://raw.githubusercontent.com/ukarpenkov/ui-slider/main/src/img/uislider.png)

## Как воспользоваться данным слайдером

1. Клонируйте себе в папку [этот репозиторий](https://github.com/ukarpenkov/get-plugin/tree/main)
   или перенесите в свой проект следующие файлы и папки
   - index.js;
   - папку 'plugin';
2. в папке проектв создайте 'index.html' с базовой разметкой:
   ```
   <div class="wrapper" id="wrapper">
      <div class="slider-page"></div>
      <div class="toolbar-page"></div>
   </div>
   ```
3. Установите нужный вам бандлер, например parcel
   ```
   nmp i
   npm i parcel
   ```
4. проверьте путь для подключения стилей плагина в index.html:
   ```
   <link rel="stylesheet" href="./plugin/slider-plugin/index.bb83c982.css" />
   ```
   при необходимости обновите путь.
5. проверьте путь для подключения js кода плагина в index.js:
   ```
   import {
   setSliderSettings, initSlider, initTooltips,}
   from "./plugin/slider-plugin/index.20a44db0";
   ```
6. проверьте путь для подключения index.js в index.html:
   ```
   <script type="module" src="index.js"></script>
   ```
   при необходимости обновите путь.
7. пропишите необхомые команды для старта и сборки проекта в package.json:
   ```
   "scripts": {
    "start": "yarn parcel index.html",
    "build": "parcel build index.html ",
   },
   ```
8. для запуска напишите в консоли:
   ```
   yarn parcel index.html
   ```
9. для начальной настройки слайдера использйте следующие аргументы:
   ```
    let slider1 = new (0, setSliderSettings)(
      "1", // css класс для обертки слайдера
      "interval", // "single"/"interval" - 1 или 2 ручки
      "horizontal", // "vertial"/"horizontal" - направление слайдера
      1, // текущее положение левого бегунка
      50,// текущее положение правого бегунка
      1, // минимально возможное значение
      100, // максимально возможное значение
      1, // шаг слайдера
      false, // true/false - показать/скрыть тултипы
      true // true/false - показать/скрыть блок значений
    );
    slider1.init();
   ```

## Архитектура приложения

## [APP UML diagram](https://viewer.diagrams.net/index.html?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1Ox9ASGbxKiB7AVY_K0LVlEeC8Fwm2Tb8)

Для инициализации слайдера нужно создать новый объект класса AddSliderToStore и вызвать метод .init().
Класс AddSliderToStore содержит основные свойста и методы слайдера

```
  id: string - id по порядку
  interval: 'single' | 'interval' - варианты с 1 или 2 ручками
  orientation: 'vertical' | 'horizontal' - направление слайдера
  minValue: number - минимальное положение бегунка при инициализации
  maxValue: number - максимальное положение бегунка при инициализации
  minScale: number - минимально возможное значение
  maxScale: number - максимально возможное значение
  step: number - шаг слайдера
  tooltip: boolean - показать/скрыть тултипы
  valueBlock: boolean - показать/скрыть блок значений
```

Все изменения значений слайдера в процессе использования на странице происзодят через функцию-редьюсер, любое изменение (передвижение ручки, ввод новых значений, проставление чекбосков) создает событие, которое изменяет состояние слайдера и тулбара.

Например при установке чекбоса для вертикального отображения срабатывает редьюсер
\src\scripts\model\reducer.js

```
    case 'VERTICAL_ORIENTANTION':
      return state.map((slider) => {
        if (slider.id === action.id) {
          return { ...slider, orientation: 'vertical' }
        }
        return slider
```

Редьюсер вызывается из повешенного на чекбокс хендлера changeOrientation()
src\scripts\controller\toolbarHandlers\toolbar-handlers.ts

После каждого изменения стэйта происходит вызов функции обновляющую компоненты с усетом новых данных updateSliders()

Отрисовка слайдера и тулбара происходит с помощью функций initSlider и initToolbar. Эти функции содержат верстку элементов и основную логику поведения.

## Используеммые зависимости

```
  "dependencies": {
    "jquery": "^3.6.1",
    "mermaid": "^9.3.0",
    "pug": "^3.0.2",
    "yarn": "^1.22.21"
  },
  "name": "ui-slider",
  "version": "1.0.0",
  "description": "This is a plugin for jQuery that implemented the “slider” functionality - a special controller that allows you to drag for a given numeric value",
  "repository": "https://github.com/ukarpenkov/ui-slider.git",
  "browserslist": "> 0.5%, last 2 versions, not dead",
  "author": "ukarpenkov <truloveu@gmail.com>",
  "license": "MIT",
  "source": "src/index.pug",
  "scripts": {
    "start": "yarn parcel src/index.pug",
    "build": "parcel build --no-optimize src/index.pug ",
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
