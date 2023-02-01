# ui-slider

## [GITHUB PAGES LINK](https://ukarpenkov.github.io/ui-slider/dist/)

## [APP UML diagram](https://viewer.diagrams.net/index.html?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1Ox9ASGbxKiB7AVY_K0LVlEeC8Fwm2Tb8)

## Как воспользоваться данным слайдером

1. Клонируйте себе в папку [данный репозиторий](https://github.com/ukarpenkov/ui-slider)
2. Перенесите в свой проект следующие файлы и папки
   - package.json;
   - папку 'styles';
   - папку 'scripts';
3. в папке проекта создайте папку 'src';
4. в папке 'src' создайте 'index.html' с базовой разметкой:
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
5. подключите стили:
   ```
   <link rel="stylesheet" href="styles/styles.css" />;
   ```
6. подключите '.ts' файл:
   ```
   <script type="module" src="scripts/app.ts"></script>;
   ```
7. установите зависимости командой npm i;
8. при изменении классов необходимо изменить инициализацию слайдера в app.ts
   ```
     initSlider('.id2', settings1)
   ```
9. для настройки типа слайдера измените параметры объекта

```
let settings1 = new SliderSettings('interval', 'horizontal', 1, 200)
```

10. возможные опции для слайдера:

- 'interval' / 'single';
- 'horizontal' / 'vertical';
- начальное и конечное значение слайдера.

11. запустите проект командой 'npm parcel src/index.html'

12. для использования автотестов скопируйте себе в корневую папку проекта папку 'tests'

13. запустите тесты командой 'wdio run ./wdio.conf.js'

## Архитектура приложения
