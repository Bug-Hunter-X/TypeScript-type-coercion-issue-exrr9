function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // Works correctly

try {
  let result2 = add(1, "2"); // Throws an error at compile time
} catch (error) {
  console.error(error);
}

//Alternative solution using Type Guard
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function add2(a: any, b: any): number {
    if(!isNumber(a) || !isNumber(b)){
        throw new Error('Both arguments must be numbers');
    }
    return a+b;
}

let result3 = add2(1,2);

try{
  let result4 = add2(1, "2"); // Throws an error at compile time
}catch(e){
    console.error(e);
}