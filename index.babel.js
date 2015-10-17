import root from 'node-root'
import path from 'path'

class MultiPath {
  set (name, dir) {
    this[name] = (file = '') => {
      return root(path.join(dir, file), 2)
    }
  }
}

export default new MultiPath()