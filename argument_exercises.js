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
