const deleteDuplicates = require("./deleteDuplicates");

describe("deleteDuplicates", () => {
  it("returns the input when there is no duplicates element", () => {
    const linkedListOne = { val: 1, next: null };
    expect(deleteDuplicates(linkedListOne)).toEqual(linkedListOne);
    const linkedListTwo = { val: 1, next: { val: 2, next: null } };
    expect(deleteDuplicates(linkedListTwo)).toEqual(linkedListTwo);
  });
});
