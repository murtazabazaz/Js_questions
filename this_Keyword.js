// Example 1 for this keyword(using objects)..

let counter = createCounter();
let counter1 = createCounter();

function createCounter(){
    return{
        count: 0,
        increment: function(){
            this.count++;
        }
    }
}

counter.increment();
counter.increment();
counter.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
 console.log("the count for counter 1 = ", counter.count)
 console.log("the count for counter 2 = ", counter1.count)


// using this inside a normal function...

function xyz(){
    return this;
}
console.log(xyz());
