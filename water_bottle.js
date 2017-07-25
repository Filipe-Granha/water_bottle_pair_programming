var WaterBottle = function() {
  this.volume = 0;
}

module.exports = WaterBottle; // has to be here in order to be 'importable' by the specs file



WaterBottle.prototype.full = function() {
  this.volume = 100;
}



WaterBottle.prototype.drink = function() {
  if(this.volume >= 10) {
    this.volume -= 10;
  }
}


WaterBottle.prototype.empty = function() {
  this.volume = 0;
}





  