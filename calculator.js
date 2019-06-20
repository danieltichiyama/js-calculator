/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 function calculatorModule () {
     var memory=0;
     var total=0;
    //  console.log(total);
     calculator = {};

 

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   calculator.load = function (x){
       this.validation(x);
        total = x;
        // console.log('total after loading', total)
        console.log('load',total);
        return total;
    }

  /**
   * Return the value of `total`
   * @return { Number }
   */

   calculator.getTotal = function (){
    //    console.log("getTotal", total);
        return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

    calculator.add = function (x) {
        this.validation(x);
        total += x;
        console.log('add', total);
        return total;
    }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

    calculator.subtract = function (x){
        this.validation(x);
        total -= x;
        return total;
    }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

  calculator.multiply = function (x){
    this.validation(x);

    total *= x;
    return total;
}

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */

  calculator.divide = function (x){
    this.validation(x);

    total /= x;
    return total;
}

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */

   calculator.recallMemory = function (){
       if (typeof memory !=="number"){
           return 'ERR';
       }
       return memory;
   }


  /**
   * Stores the value of `total` to `memory`
   */

   calculator.saveMemory = function (){
       if (typeof total !== "number"){
        return "ERR";
        }
        memory = total;
       return memory;
   }


  /**
   * Clear the value stored at `memory`
   */

   calculator.clearMemory = function (){
       memory = 0;
       return memory;
   }
  /**
   * Validation
   */

   calculator.validation = function (){
        if (typeof x !=='number'){
            return 'Error';
         }
    }

  return calculator;

}

console.log('whole module',calculatorModule());