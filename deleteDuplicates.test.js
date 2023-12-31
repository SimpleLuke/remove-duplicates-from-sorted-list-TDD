const deleteDuplicates = require("./deleteDuplicates");

describe("deleteDuplicates", () => {
  it("returns the input when there is no duplicates element", () => {
    const linkedListOne = { val: 1, next: null };
    expect(deleteDuplicates(linkedListOne)).toEqual(linkedListOne);
    const linkedListTwo = { val: 1, next: { val: 2, next: null } };
    expect(deleteDuplicates(linkedListTwo)).toEqual(linkedListTwo);
  });

  it("removes one duplicated element and returns the linked list", () => {
    const linkedListOne = {
      val: 1,
      next: { val: 1, next: null },
    };
    const outputOne = { val: 1, next: null };
    expect(deleteDuplicates(linkedListOne)).toEqual(outputOne);

    const linkedListTwo = {
      val: 1,
      next: { val: 1, next: { val: 2, next: null } },
    };
    const outputTwo = { val: 1, next: { val: 2, next: null } };
    expect(deleteDuplicates(linkedListTwo)).toEqual(outputTwo);
  });

  it("removes more than one duplicated elements and returns the linked list", () => {
    const linkedListOne = {
      val: 1,
      next: { val: 1, next: { val: 2, next: { val: 2, next: null } } },
    };

    const outputOne = { val: 1, next: { val: 2, next: null } };
    expect(deleteDuplicates(linkedListOne)).toEqual(outputOne);

    const linkedListTwo = {
      val: 1,
      next: {
        val: 2,
        next: { val: 2, next: { val: 3, next: { val: 3, next: null } } },
      },
    };

    const outputTwo = {
      val: 1,
      next: { val: 2, next: { val: 3, next: null } },
    };
    expect(deleteDuplicates(linkedListTwo)).toEqual(outputTwo);
  });
});
