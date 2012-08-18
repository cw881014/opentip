// Generated by CoffeeScript 1.3.3
var $, adapters;

$ = ender;

adapters = ["native", "ender"];

describe("Generic adapter", function() {
  var adapterName, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = adapters.length; _i < _len; _i++) {
    adapterName = adapters[_i];
    _results.push(describe("" + adapterName + " adapter", function() {
      var adapter;
      it("should add itself to Opentip.adapters." + adapterName, function() {
        return expect(Opentip.adapters[adapterName]).to.be.ok();
      });
      adapter = Opentip.adapters[adapterName];
      describe("domReady()", function() {
        return it("should call the callback", function(done) {
          return adapter.domReady(done);
        });
      });
      return describe("DOM", function() {
        return describe("clone()", function() {
          return it("should create a shallow copy", function() {
            var obj, obj2;
            obj = {
              a: 1,
              b: 2,
              c: {
                d: 3
              }
            };
            obj2 = adapter.clone(obj);
            expect(obj).to.not.equal(obj2);
            expect(obj).to.eql(obj2);
            obj2.a = 10;
            expect(obj).to.not.eql(obj2);
            expect(obj.a).to.equal(1);
            obj2.c.d = 30;
            return expect(obj.c.d).to.equal(30);
          });
        });
      });
    }));
  }
  return _results;
});
