describe("Async Specs", function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100;

  it("sync spec is defined without done() callback.", function() {
    //pass
  });

  it("async spec has done() callback that must be called before timeout", function(done) {
    setTimeout(function() {
        done();
      }
    ,50);
  });

  xit("async spec that does not invoke done() will fail", function(done) {
  });


});
