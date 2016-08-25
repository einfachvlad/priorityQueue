class Node {
	constructor(data, priority) {
this.data=data;
this.priority=priority;
this.parent=null;
this.left=null;
this.right=null;
	}

	appendChild(node) {
		if(this.left==null)
		this.left=node;
		else if(this.right==null)
		this.right=node;
		node.parent=this;
	}

	removeChild(node) {
		if(this.left==node)
		this.left=null;
		else if(this.right==node)
		this.right=null;
	else if(node!=this.left&&node!=this.right)
		throw new Error("This node isn't a child");
		node.parent=null;
	}

	remove() {
		if(this.parent!=null)
		this.parent.removeChild(this);

	}

	swapWithParent() {
		if (this.parent != null){

	  var parentOfParent = this.parent.parent;
	  var parent = this.parent;
	  var child = this;
	  var tempChild = {
	   left:  child.left,
	   right:  child.right
	  }

	  if (parentOfParent != null){
	   if (parentOfParent.left === parent)
	    parentOfParent.left = child;
	   else
	    parentOfParent.right = child;
	   child.parent = parentOfParent;
	  }
	  else{
	   child.parent = null;
	  }
if(parent.left===child)
{
	child.left=parent;
	child.right=parent.right;
	child.right=parent.right;

}
else{
	child.left=parent.left;
	child.right=parent;
	parent.left.parent=child;

}
parent.parent=child;

parent.left=tempChild.left;
parent.right=tempChild.right;

if(tempChild.left!=null)
	tempChild.left.parent=parent;

if(tempChild.right!=null)
tempChild.right.parent=parent;

}

	}
}
module.exports = Node;
