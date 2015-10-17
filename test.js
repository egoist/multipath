var mp = require('./')
mp.set('component', 'src/react/component')

console.log(mp)

var mp2 = require('./')
mp2.set('css', 'src/css')

console.log(mp2)

console.log(mp2.css('main.css'))