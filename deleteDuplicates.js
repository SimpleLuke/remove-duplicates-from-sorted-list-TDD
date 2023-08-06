const deleteDuplicates = (linkedList) => {
  let current = linkedList;
  let last = linkedList.next;
  let value = current.val;
  while (last) {
    if (value == last.val) {
      current.next = last.next;
    } else {
      current = current.next;
    }
    value = current.val;
    last = last.next;
  }
  return linkedList;
};

module.exports = deleteDuplicates;
