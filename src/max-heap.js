const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
    this.parentNodes=[];
    this.nodes=[];
	}

	push(data, priority) {
//this.insertNode(new Node(data,priority));

	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
return this.parentNodes.length;
	}

	isEmpty() {
if(this.parentNodes.length==0)
return true;
else return false;
	}

	clear() {
    this.root=null;
    this.parentNodes=[];
    this.nodes=[];
	}

  insertNode(node) {
    if(this.isEmpty()){
    this.root=node;
    this.nodes.push(node);
    this.parentNodes.push(node);
}
    else{
      this.nodes.push(node);
      this.parentNodes.push(node);
      var parent=this.nodes[Math.floor((this.nodes.length-2)/2)];
      parent.appendChild(node);
      if(parent.left!=null&&parent.right!=null)
      this.parentNodes.splice(this.parentNodes.indexOf(parent),1);

    }

    // while(node.parent!=null&&node.parent.>node.data)
    // node.swapWithParent();
  }

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
