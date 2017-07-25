var Athlete = function( bottle ) {
  this.hydration = 100;
  this.distance = 0;
  this.bottle = bottle;
}


module.exports = Athlete;

Athlete.prototype.increaseDistance = function(){
  this.distance += 15;
}

Athlete.prototype.decreaseHydration = function(){
  this.hydration -= 15;
}


Athlete.prototype.run = function() {
  if (this.hydration > 0) {
   this.increaseDistance();
   this.decreaseHydration();
 } 
}

Athlete.prototype.drinkWater = function() {
  this.hydration += 10;
  this.bottle.drink();
}



