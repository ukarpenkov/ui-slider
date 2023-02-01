# ui-slider

## [GITHUB PAGES LINK](https://ukarpenkov.github.io/ui-slider/dist/)

## [APP UML diagram](https://viewer.diagrams.net/index.html?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1Ox9ASGbxKiB7AVY_K0LVlEeC8Fwm2Tb8)

## Как воспользоваться данным слайдером

1. Склонируйте себе в папку [данный репозиторий](https://github.com/ukarpenkov/ui-slider)
2. Перенесите в свой проект следующие файлы и папки
   - package.json;
   - папку styles;
   - папку scripts;
   - в папке проекта создайте папку src;
   - в папке src index.html с базовой разметкой:
   ```
   <div class="slider-page">
     <div class="page-item js-page-item1">
       <div class="id2 slider-wrapper"></div>
     </div>
     <div class="page-item js-page-item2">
       <div class="id3 slider-wrapper"></div>
     </div>
     <div class="page-item js-page-item3">
       <div class="id4 slider-wrapper"></div>
     </div>
   </div>
   ```
   ;
   - подключите стили:
   ```
   <link rel="stylesheet" href="styles/styles.css" />;
   ```
   - подключите ts файл:
   ```
   <script type="module" src="scripts/app.ts"></script>;
   ```
   - установите зависимости командой npm i;
   - при изменении классов необходимо изменить инициализацию слайдера в app.ts
   ```
     initSlider('.id2', settings1)
   ```
   для настройки типа слайдера измените параметы объекта
   ```
   let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
   ```
   возможные опции:
   - 'interval' / 'single';
   - 'horizontal' / 'vertical';
   - начальное и конечное значение слайдера.
