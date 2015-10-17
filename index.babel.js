import root from 'node-root'
import path from 'path'

class MultiPath {
  set (name, dir) {
    this[name] = (file = '') => {
      return path.join(root(dir, 4), file)
    }
  }
}

export default new MultiPath()