// create a basic function currying example in Javascript

function curry(func){
return function curried(...args){
   if(args.length >= func.length){
      return func.apply(this,args)
   }else{
	    return function(...args2){
            return curried.apply(this,args.concat(args2))
            }
        }
    }
}


// test 
function sum(a,b,c){return a+b+c}

sum(1,2,3) //6

let c1 = curry(sum);

c1(1,2,3) //6

c1(1)(2)(3)  //6


// sum(1)(2)(3) ....n times should return sum of n number
function sum(args){
	let rs = args;
	function result(ag){
		rs = rs+ ag;
		return result
	}
	result.toString=()=>{return rs};
	return result
}

