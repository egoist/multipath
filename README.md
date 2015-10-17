# multipath

Access your file from anywhere, built on the top of [node-root](https://github.com/egoist/node-root).

## Usage

Install via NPM: `npm install multipath --save`

```javascript
import mp from 'multipath'

mp.set('jsx', 'src/react/component')

// now access one of your jsx file
// return '$ProjectRoot/src/react/component/header.jsx'
mp.jsx('header.jsx')
```

## License

MIT.