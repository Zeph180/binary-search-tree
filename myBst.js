class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

//insert a node into the tree with a given key
function insert(node, key){
  if (node === null) {
    return new Node(key);
  }
  if ( key < node.key) {
    node.left = insert(node.left, key);
  }
  else if (key > node.key) {
    node.right = insert(node.right, key);
  }
  return node;
}

function inOrder(root){
  if (root != null) {
    inOrder(root.left);
    console.log(root.key);
    inOrder(root.right);
  }
}

let root = null;
root = insert(root, 50);
root = insert(root, 80);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);

inOrder(root);