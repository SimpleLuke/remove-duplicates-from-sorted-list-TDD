const deleteDuplicates = (linkedList) => {
  let current = linkedList;
  let last = linkedList.next;
  while (last) {
    if (current.val == last.val) {
      current.next = last.next;
    }
    last = last.next;
  }
  return linkedList;
};

module.exports = deleteDuplicates;
