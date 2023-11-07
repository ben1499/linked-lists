function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

function LinkedList() {
  let head = null;
  let tail = null;
  let size = 0;

  const append = (value) => {
    let temp;
    if (head == null) {
      head = Node(value);
      tail = head;
      size++;
    } else {
      temp = head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = Node(value);
      tail = temp.nextNode;
      size++;
    }
  };

  const prepend = (value) => {
    if (head == null) {
      head = Node(value);
      tail = head;
      size++;
    } else {
      const newNode = Node(value);
      newNode.nextNode = head;
      head = newNode;
      size++;
    }
  };

  const at = (index) => {
    let temp;
    if (head == null || index < 0) {
      return "No items or invalid index";
    } else if (index == 0) {
      return head;
    } else {
      temp = head;
      let count = 0;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
        count++;
        if (count == index) break;
      }
      if (count != index) {
        return "Index not present in list";
      } else {
        return temp;
      }
    }
  };

  const pop = () => {
    let temp, prev;
    if (head == null) return "List empty";
    // If only one node in list
    else if (head.nextNode == null) {
      head = null;
      tail = null;
      size--;
    } else {
      temp = head;
      while (temp.nextNode != null) {
        prev = temp;
        temp = temp.nextNode;
      }
      prev.nextNode = null;
      tail = prev;
      size--;
    }
  };

  const contains = (value) => {
    if (head == null) return false;
    let temp = head;
    while (temp != null) {
      if (temp.value == value) return true;
      temp = temp.nextNode;
    }
    return false;
  };

  const find = (value) => {
    if (head == null) return null;
    let count = -1;
    let temp = head;
    while (temp != null) {
      count++;
      if (temp.value == value) return count;
      temp = temp.nextNode;
    }
    return null;
  };

  const toString = () => {
    if (head == null) return null;
    let temp = head;
    let string = "";
    while (temp != null) {
      string += `(${temp.value}) -> `;
      temp = temp.nextNode;
    }
    return string + "null";
  };

  const insertAt = (value, index) => {
    if (head == null && index == 0) append(value);
    else if (head == null && index > 0) return "Invalid index";
    else {
      let indexCount = -1;
      let temp = head;
      let prev;
      let passFlag = false;
      while (temp != null) {
        indexCount++;
        if (indexCount == index) {
          passFlag = true;
          break;
        }
        prev = temp;
        temp = temp.nextNode;
      }
      if (passFlag == false) return "Invalid index";
      if (temp == head) {
        prepend(value);
      } else {
        let newNode = Node(value);
        prev.nextNode = newNode;
        newNode.nextNode = temp;
        size++;
      }
    }
  };

  const removeAt = (index) => {
    if (head == null) return "List empty";
    let temp = head;
    let count = -1;
    let prev;
    let passFlag = false;
    while (temp != null) {
      count++;
      if (count == index) {
        passFlag = true;
        break;
      }
      prev = temp;
      temp = temp.nextNode;
    }
    if (passFlag == false) return "Invalid Index";
    if (temp == head) {
      head = head.nextNode;
      size--;
    } else {
      prev.nextNode = temp.nextNode;
      if (temp.nextNode == null) tail = prev;
      size--;
    }
  };

  return {
    get head() {
      return head;
    },
    get tail() {
      return tail;
    },
    get size() {
      return size;
    },
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const newList = LinkedList();

// Tests

newList.append(2);
newList.append(3);
newList.append(5);
newList.prepend(1);

newList.pop();

console.log("HEAD");
console.log(newList.head);

console.log("TAIL");
console.log(newList.tail);

console.log(newList.size);

console.log(newList.at(3));

console.log("CONTAINS?");
console.log(newList.contains(5));

console.log("FIND INDEX");
console.log(newList.find(3));

console.log("TO STRING");
console.log(newList.toString());

console.log(newList.insertAt(9, 1));

console.log("TO STRING AFTER INSERTION");
console.log(newList.toString());

newList.removeAt(3);

console.log("TO STRING AFTER REMOVAL");
console.log(newList.toString());

console.log(newList.tail);
console.log(newList.size);
