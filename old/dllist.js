class ListaDwukierunkowa {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addElement(value);
  }

  addElement(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}
