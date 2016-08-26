const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root=null;
		this.parentNodes=[];
		this.nodes=[];
	}

	push(data, priority) {
	var node=new Node(data,priority);
	this.insertNode(node);
	this.shiftNodeUp(node);
	}

	pop() {
if(!this.isEmpty()){
	var detached=this.detachRoot();
	this.restoreRootFromLastInsertedNode(detached);
	this.shiftNodeDown(this.root);
	return detached.data;
}
	}

	detachRoot() {
		var detachedRoot=this.root;
		this.root=null;
		if(detachedRoot.left==null||detachedRoot.right==null)
		this.parentNodes.splice(this.parentNodes.indexOf(detachedRoot),1);
		this.nodes.splice(this.nodes.indexOf(detachedRoot),1);
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		if (Object.keys(detached).length == 0) return;
		var lastInsertNode=this.parentNodes[this.parentNodes.length-1];
		if(lastInsertNode==undefined) return;
		var parent=lastInsertNode.parent;
		var left=detached.left;
		var right=detached.right;

		if(this.isNodeInParentNodes(detached))
			this.parentNodes.shift();

		if(parent.left==lastInsertNode)
			parent.left=null;
		else
			parent.right=null;
		if(!this.isNodeInParentNodes(parent)){
			if(parent.parent!=null){
			if(parent.parent.right==parent)
				this.parentNodes.unshift(parent);
			else{
				this.parentNodes.splice(this.parentNodes.indexOf(parent.parent.right),0,parent);
			}}
			}

		this.parentNodes.pop();
		this.nodes.pop();

		this.root=lastInsertNode;
		if(left!=lastInsertNode)
			lastInsertNode.left=left;
		else lastInsertNode.left=null;
		if(right!=lastInsertNode)
			lastInsertNode.right=right;
		else lastInsertNode.right=null;
		if(left!=null) left.parent=lastInsertNode;
		if(right!=null) right.parent=lastInsertNode;

		this.nodes.unshift(lastInsertNode);

		lastInsertNode.parent=null;
		if(lastInsertNode.left==null||lastInsertNode.right==null)
		this.parentNodes.unshift(lastInsertNode);

	}

	size() {
		return this.nodes.length;
	}

	isEmpty() {
		if(this.nodes.length==0)
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
	}

isNodeInParentNodes(currentNode){
	if(this.parentNodes.some(node=>{
		return node==currentNode;
	}))
	return true;
	else return false;
}
	shiftNodeUp(node) {
		var isZeroElement=false;
		while(node.parent!=null&&node.parent.priority<node.priority){
			if(node.parent.left==null||node.parent.right==null){
				if(!this.isNodeInParentNodes(node.parent)){
					this.parentNodes.push(node.parent);
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,0);
					isZeroElement=true;
				}
				if(!this.isNodeInParentNodes(node)){
					this.parentNodes.push(node);
					this.parentNodes.splice(this.parentNodes.indexOf(node.parent),1,0);
					isZeroElement=true;
				}
			}
				else if(this.isNodeInParentNodes(node.parent))
					this.parentNodes.splice(this.parentNodes.indexOf(node.parent),1);

			if(node.left==null||node.right==null){
			 if(!this.isNodeInParentNodes(node)){
				 this.parentNodes.push(node);
				 this.parentNodes.splice(this.parentNodes.indexOf(node.parent),1,0);
				 isZeroElement=true;
			 }
			 if(!this.isNodeInParentNodes(node.parent)){
				 this.parentNodes.push(node.parent);
				 this.parentNodes.splice(this.parentNodes.indexOf(node),1,0);
				 isZeroElement=true;
			 }
			}
				else if(this.isNodeInParentNodes(node))
					this.parentNodes.splice(this.parentNodes.indexOf(node),1);

			if(this.parentNodes.indexOf(node)>this.parentNodes.indexOf(node.parent)){
				if(isZeroElement){
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,Number(0));
					this.parentNodes.splice(this.parentNodes.indexOf(Number(0)),1,node);}
				else{
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,node.parent);
					this.parentNodes.splice(this.parentNodes.indexOf(node.parent),1,node);
					if(this.nodes.length!=0){
						this.nodes.splice(this.nodes.indexOf(node),1,node.parent);
						this.nodes.splice(this.nodes.indexOf(node.parent),1,node);}
				}

		}
			else{
				if(isZeroElement){
					this.parentNodes.splice(this.parentNodes.indexOf(node.parent),1,Number(0));
					this.parentNodes.splice(this.parentNodes.indexOf(Number(0)),1,node.parent);}
				else{
					this.parentNodes.splice(this.parentNodes.indexOf(node.parent),1,node);
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,node.parent);
					if(this.nodes.length!=0){
						this.nodes.splice(this.nodes.indexOf(node.parent),1,node);
						this.nodes.splice(this.nodes.indexOf(node),1,node.parent);}
				}
			}

			this.parentNodes.forEach(node=>{
				if(node===0)
					this.parentNodes.splice(this.parentNodes.indexOf(node),1);
			})

		node.swapWithParent();
		this.shiftNodeUp(node);
		}

		if(this.root.parent==node)
			this.root=node;
	}

	shiftNodeDown(node) {
		if(this.root==null) return;
		var isZeroElement=false;
		while(node.left!=null||node.right!=null){
			if(node.left==null){
			 if(node.right.priority<node.priority)
				break;
		 }
		 else{
			 if(node.left.priority<node.priority)
			 break;
		 }
			if(node.left.priority>node.priority)
				var child=node.left;
			else var child=node.right;
			if(node.left!=null&&node.right!=null){
				if(node.left.priority>node.priority&&node.right.priority>node.priority){
					if(node.left.priority<node.right.priority)
						child=node.right;
					}
				}

			if(node.left==null||node.right==null){
				if(!this.isNodeInParentNodes(node)){
					this.parentNodes.push(node);
					this.parentNodes.splice(this.parentNodes.indexOf(child),1,0);
					isZeroElement=true;
				}
				if(!this.isNodeInParentNodes(child)){
					this.parentNodes.push(child);
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,0);
					isZeroElement=true;
				}
			}
				// else if(this.isNodeInParentNodes(child))
				// 	this.parentNodes.splice(this.parentNodes.indexOf(node),1);

			if(child.left==null||child.right==null){
			 if(!this.isNodeInParentNodes(child)){
				 this.parentNodes.push(child);
				 this.parentNodes.splice(this.parentNodes.indexOf(node),1,0);
				 isZeroElement=true;
			 }
			 if(!this.isNodeInParentNodes(node)){
				 this.parentNodes.push(node);
				 this.parentNodes.splice(this.parentNodes.indexOf(child),1,0);
				 isZeroElement=true;
			 }
			}
				// else if(this.isNodeInParentNodes(node))
				// 	this.parentNodes.splice(this.parentNodes.indexOf(child),1);


if(!this.isNodeInParentNodes(child)&&!this.isNodeInParentNodes(node)){
if(this.nodes.indexOf(child)>this.nodes.indexOf(node)){
			this.nodes.splice(this.nodes.indexOf(child),1,node);
			this.nodes.splice(this.nodes.indexOf(node),1,child);
}
else{
			this.nodes.splice(this.nodes.indexOf(node),1,child);
			this.nodes.splice(this.nodes.indexOf(child),1,node);
	}
}
else{
			if(this.parentNodes.indexOf(child)>this.parentNodes.indexOf(node)){
				if(isZeroElement){
					this.parentNodes.splice(this.parentNodes.indexOf(child),1,Number(0));
					this.parentNodes.splice(this.parentNodes.indexOf(Number(0)),1,child);}
				else{
					this.parentNodes.splice(this.parentNodes.indexOf(child),1,node);
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,child);
					if(this.nodes.length!=0){
						this.nodes.splice(this.nodes.indexOf(child),1,node);
						this.nodes.splice(this.nodes.indexOf(node),1,child);}
				}

		}
			else{
				if(isZeroElement){
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,Number(0));
					this.parentNodes.splice(this.parentNodes.indexOf(Number(0)),1,node);}
				else{
					this.parentNodes.splice(this.parentNodes.indexOf(node),1,child);
					this.parentNodes.splice(this.parentNodes.indexOf(child),1,node);
					if(this.nodes.length!=0){
						this.nodes.splice(this.nodes.indexOf(node),1,child);
						this.nodes.splice(this.nodes.indexOf(child),1,node);}
				}
			}
		}

			this.parentNodes.forEach(child=>{
				if(child===0)
					this.parentNodes.splice(this.parentNodes.indexOf(child),1);
			})

		child.swapWithParent();
		if(this.root.parent==child)
			this.root=child;
		this.shiftNodeDown(node);
		}
	}
}
module.exports = MaxHeap;
