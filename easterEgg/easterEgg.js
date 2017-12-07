function easterEgg(){
}

easterEgg.prototype.caca = function(){
  console.log("Tata");
}

easterEgg.prototype.drunk = function(source = 0, timer = 0, force = 1) {
  source = force + 2;
  console.log(source);
  this.caca();
}
