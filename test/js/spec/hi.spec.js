window.hi = function () {
  return "Hi from js-world!";
};

describe("The testing libraries are wired up properly", function () {
  describe("Mocha and Chai", function () {
    it("work together", function () {
      expect(hi()).to.equal("Hi from js-world!");
    });
  });
});

