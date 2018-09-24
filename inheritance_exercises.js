
Function.prototype.inherits = function inherits(parentClass){
  
  function Surrogate (){}
  Surrogate.prototype =  parentClass.prototype;
  this.prototype = new Surrogate ();
  this.prototype.constructor = this;
};

Function.prototype.inheritsAgain = function inheritsAgain(parentClass){
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
};

function Curry(spiceLevel){
  this.spiciness = spiceLevel;
}

Curry.prototype.announce = function announce(){
    console.log(`I have a spice level of ${spiciness}`);
  };

function burmeseCurry(spiceLevel, cuisine){
  Curry.call(this, spiceLevel);
  this.cuisine = cuisine;
}

burmeseCurry.inheritsAgain(Curry);

const joesTalkingCurry = new burmeseCurry(8, "Burmese");
joesTalkingCurry.announce();

