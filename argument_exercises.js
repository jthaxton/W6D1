function sum1(...args) {
  
  let sum = 0;
  
  args.forEach ((arg) => sum += arg);
  return sum;
}

function sum2() {
  let sum = 0;
  
  let arr = Array.from(arguments);
  
  arr.forEach ((arg) => sum += arg);
  return sum;
}

Function.prototype.myBind1 = function (ctx) {
  const fun = this;
  const boundArgs = Array.from(arguments).slice(1);
  return function boundFn (){
    const callArgs = Array.from(arguments);
    fun.apply(ctx, boundArgs.concat(callArgs));
  };
};

Function.prototype.myBind2 = function (ctx, ...args){
  return (...callArgs) => this.apply(ctx, args.concat(callArgs));
};


Function.prototype.myCurry = function (numArgs) {
  const numbers = [];
  
  const curriedSum = (num) => {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(arg => sum += arg);
      return sum;
    } else {
      return curriedSum;
    }
  };
  return curriedSum;
};



Function.prototype.mediocreCurry = function (numArgs) {
  const numbers = [];
  
  const curriedFun = (...num) => {
    num.forEach (arg => numbers.push(arg));
    
    if (numbers.length === numArgs) {
      this(...num);
    } else {
      return curriedFun;
    }
  };
  return curriedFun;
};