describe("The testing libraries are wired up properly", function () {
  describe("Mocha and Chai", function () {
    it("work together", function () {
      expect(hi()).to.equal("Hi from js-world!");
    });
  });

  describe("Mocha, Chai and Sinon", function () {
    it("work together", function () {
      var hiSinonSpy = sinon.spy(window, "hi");

      hi();
      expect(hiSinonSpy.called).to.be.true;

      hi.restore();
    });
  });
});

