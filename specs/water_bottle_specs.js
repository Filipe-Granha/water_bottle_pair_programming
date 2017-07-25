var assert = require("assert"); // object used to do assertions
var WaterBottle = require("../water_bottle.js");


describe("Water Bottle", function() {
  var bottle;

  beforeEach(function() {
     bottle = new WaterBottle();
  });

  it("should be empty at start", function() {
    assert.strictEqual(bottle.volume, 0); // expected result comes in second place
  });

  it("should be 100 when full", function() {
    bottle.full();
    assert.strictEqual(bottle.volume, 100);
  })

  
  it("should go down by 10 when drank", function() {
    bottle.full();
    bottle.drink();
    assert.strictEqual(bottle.volume, 90);
  })

  it("should go to 0 when emptied", function() {
    bottle.full();
    bottle.empty();
    assert.strictEqual(bottle.volume, 0);
  })

  it("should not be able to go below 0", function(){
    bottle.drink();
    assert.strictEqual(bottle.volume, 0);
  })




});