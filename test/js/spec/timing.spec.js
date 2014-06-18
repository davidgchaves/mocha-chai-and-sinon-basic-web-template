describe("Test timing", function () {

  it("is a fast test", function (done) {
    expect("hi").to.equal("hi");
    done();
  });

  it("is a not so fast test (40 ms induced delay)", function (done) {
    setTimeout(function () {
      expect("hi").to.equal("hi");
      done();
    }, 40);
  });

  it("is a slow test (100 ms induced delay)", function (done) {
    setTimeout(function () {
      expect("hi").to.equal("hi");
      done();
    }, 100);
  });

  it("is a very slow test (2001 ms induced delay) and fails (timeout)", function (done) {
    setTimeout(function () {
      expect("hi").to.equal("hi");
      done();
    }, 2001);
  });

});

