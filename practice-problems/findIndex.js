let arr = [2, 1, 4, 3, 5].findIndex((num) => num < 1); // undefined
console.log(arr);

/*
The console will log -1.

The findIndex method returns the index of the first element in the array that meets the callback's condition.  If the element is present in the array, it will return the index of that element.  If the element is not in the array, it will return -1. 

In this case, the array consists of the elements 2, 1, 4, 3, 5.  The callback's condition is to find the index of the element whose value is less than one.  None of the elements in the array meets this condition resulting in the logged value of -1. 

(When explaining a method, first say what the method does, then how many parameters it takes, then what it returns and in which data structure you can invoke it (string, array, object, numbers))
*/

// forEach:
/*
parameter:
- currentValue
- Index (optional)
- Array (optional)

Study the methods from JS110
High order functions
Callbacks
*/
