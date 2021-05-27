# CustomSnakeColors
Custom Colors for the Snakes 

## Enable the Mod
paste the code from `customColors.js` into the console

## Enable a Flag
paste into the console:
```
window.snake.flag(
  '#rrggbb', // hex code, your first color
  '#rrggbb', // hex code, your second color
  '#rrggbb' // hex code, your third color
); // you can have as many colors as you want in here, it can be fewer or more than three
```

## Other Custom Snakes
paste into the console:
```
window.snake.customColor({
  gradient: [ // the color for all snakes but the rainbow one, optional
    '#rrggbb', // the first color of the gradient
    '#rrggbb', // the second color of the gradient
  ],
  rainbow: [ // the color for the rainbow snake, optional
    '#rrggbb', // hex code, your first color
    '#rrggbb', // hex code, your second color
    '#rrggbb', // hex code, your third color
  ], // you can have as many colors as you want in here, it can be fewer or more than three
  rainbowYinYang: [ // the color for the other snake in yin yang when you play with rainbow snake, optional
    '#rrggbb', // hex code, your first color
    '#rrggbb', // hex code, your second color
    '#rrggbb', // hex code, your third color
  ], // you can have as many colors as you want in here, it can be fewer or more than three
});
```

### <3 Fishes
