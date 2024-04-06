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
8. для запуска напишите в косли:
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
      true // true/false - показать/скрыть болк значений
    );
    slider1.init();
   ```

## Архитектура приложения

## [APP UML diagram](https://viewer.diagrams.net/index.html?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1Ox9ASGbxKiB7AVY_K0LVlEeC8Fwm2Tb8)

Функция инициализации слайдера (initSlider) имеет 2 аргумента wrapper и settings.
При вызове данной функции нужно указать два параметра:

1. в какой контейнер поместить слайдер;
2. какой тип слайдера будет выведен на страницу.

В классе SliderSettings описаны все свойства для слайдера,
эти свойства могут принимать следующие значения:

- interval: 'interval' / 'single';
- orientation: 'horizontal' / 'vertical';
- minValue: минимально возможное значение слайдера;
- maxValue: минимально возможное значение слайдера.

Вся логика работы слайдера "зашита" в функцию initSlider посредством вызова IFFE handleRange.

Файл "app.ts" служит примером для использования слайдера.
Там создаются изначальные настройки слайдера с помощью
new SliderSettings.

Пример:

```

let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)

```

Выше приведена настройка для слайдера с двумя "ручками", со
значениями от 1 до 200, с горизонтальной ориентацией.

```

```
