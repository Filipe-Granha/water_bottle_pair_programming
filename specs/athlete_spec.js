var assert = require("assert"); // object used to do assertions
var WaterBottle = require("../water_bottle.js");
var Athlete = require("../athlete.js");



describe("Athlete", function(){ 

 var athlete;
 var bottle;

 beforeEach(function() {
      bottle = new WaterBottle();
      athlete = new Athlete( bottle );
   });

  it("should have a hydration attribute that starts at 100", function() {
    assert.strictEqual(athlete.hydration, 100);
  })

  it("should have a distance covered attribute that starts at 0", function(){
    assert.strictEqual(athlete.distance, 0);
  })

  it("should increase distance covered by 15", function(){
    athlete.increaseDistance();
    assert.strictEqual(athlete.distance, 15);
  })

  it("should decrease hydration by 15", function(){
    athlete.decreaseHydration();
    assert.strictEqual(athlete.hydration, 85);
  })

  it("should be able to run", function() {
    athlete.run();
    assert.strictEqual(athlete.distance, 15);
    assert.strictEqual(athlete.hydration, 85);
  })

  it("should not be able to run if hydration equals to 0", function() {
    athlete.hydration = 0;
    athlete.run();
    assert.strictEqual(athlete.distance, 0);
    assert.strictEqual(athlete.hydration, 0);
  })


  it("should be able to increase hydration by drinking from water bottle", function() {
    bottle.full();
    athlete.drinkWater();
    assert.strictEqual(athlete.hydration, 110);
    assert.strictEqual(bottle.volume, 90);
  })



})