class CircularDeque {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = -1;
    this.rear = -1;
    this.elements = new Array(capacity);
  }

  isFull() {
    return (this.rear + 1) % this.capacity === this.front;
  }

  isEmpty() {
    return this.front === -1;
  }

  insertFront(value) {
    if (this.isFull()) {
      console.log('Queue is full');
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      console.log(
        `(this.front - 1 + this.capacity) % this.capacity:`,
        (this.front - 1 + this.capacity) % this.capacity,
      );
      this.front = (this.front - 1 + this.capacity) % this.capacity;
    }
    this.elements[this.front] = value;
    console.log(`this.front:`, this.front);
    console.log(`this.elements:`, this.elements);
    return true;
  }

  insertLast(value) {
    if (this.isFull()) {
      console.log('Queue is full');
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      console.log(`(this.rear + 1) % this.capacity:`, (this.rear + 1) % this.capacity);
      this.rear = (this.rear + 1) % this.capacity;
    }
    this.elements[this.rear] = value;
    return true;
  }

  deleteFront() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return false;
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
    return true;
  }

  deleteLast() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return false;
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    }
    return true;
  }

  getFront() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return -1;
    }
    return this.elements[this.front];
  }

  getRear() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return -1;
    }
    return this.elements[this.rear];
  }
}

// Example usage:
const deque = new CircularDeque(5);
deque.insertFront(1);
console.log(deque.getRear()); // Expected output: 1
deque.insertLast(2);
deque.insertFront(3);
deque.insertFront(9);
deque.insertFront(10);
console.log(deque.getFront()); // Expected output: 3
console.log(deque.getRear()); // Expected output: 2
deque.deleteFront();
console.log(deque.getFront()); // Expected output: 1
deque.deleteLast();
console.log(deque.getRear()); // Expected output: 1
