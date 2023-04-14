class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(node) {
    if (!this.root) {
      this.root = node
      return this
    }

    let current = this.root
    while (true) {
      if (node.data < current.data) {
        if (!current.left) {
          current.left = node
          return this
        }
        current = current.left
      } else if (node.data > current.data) {
        if (!current.right) {
          current.right = node
          return this
        }
        current = current.right
      } else {
        return this
      }
    }
  }

  preOrder(node = this.root) {
    if (!node) {
      return ''
    }
    return `${node.data} ${this.preOrder(node.left)}${this.preOrder(node.right)}`
  }
}

function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree
