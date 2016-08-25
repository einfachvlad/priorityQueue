const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
this.maxSize=maxSize||30;
this.heap=new MaxHeap();
	}

	push(data, priority) {
if(this.size()>=this.maxSize)
throw new Error("Queue has max size");
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
