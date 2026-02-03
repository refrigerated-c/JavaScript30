++The some() method of Array instances returns true if it finds one element in the array that satisfies the provided testing function. Otherwise, it returns false.

++The every() method of Array instances returns false if it finds one element in the array that does not satisfy the provided testing function. Otherwise, it returns true.

++ The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

++ The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

++ all of them need in it is a call back funct
### Example
const array = [5, 12, 8, 130, 44];

const found = array.find((element) => element > 10);

console.log(found);
// Expected output: 12