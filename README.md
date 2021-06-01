# Custom Snake Colors
Custom Colors for the Snakes 

## Enable the Mod
Paste the code from `customColors.js` into the console

## Enable a Flag
### Specific Flags
Paste into the console:
```
window.snake.pride(
  orientation1 = string, // string, the first orientation
  orientation2 = string, // string, the yin yang mode orientation, optional
);
```
#### Supported Orientations:
- gay/homo/homosexual/pride/lgbt/lgbtq/lgbtq+/lgbtqia+/alphabet mafia
- bi/bisexual
- trans/transgender
- pan/pansexual
- asexual
- aro/aromantic
- intersex
- lesbian
- enby/non-binary/nonbinary

### Custom Flags
Paste into the console:
```
window.snake.flag({
  primary: [ // the flag for the used-to-be-rainbow snake
    '#rrggbb', // hex code, the first color
    '#rrggbb', // hex code, the second color
    '#rrggbb', // hex code, the third color
  ], // you can have as many colors as you want in here, it can be fewer or more than three
  yinYang: [ // the flag for the second snake in yinyang mode
    '#rrggbb', // hex code, the first color
    '#rrggbb', // hex code, the second color
    '#rrggbb', // hex code, the third color
  ], // you can have as many colors as you want in here, it can be fewer or more than three
}); 
```

## Other Custom Snakes
Paste into the console:
```
window.snake.customColor({
  gradient: [ // the gradient for the blue snake, optional
    '#rrggbb', // the first color of the gradient
    '#rrggbb', // the second color of the gradient
  ],
  gradientYinYang: [ // the gradient for the orange snake, optional
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

## Contributors
* fishes <3
