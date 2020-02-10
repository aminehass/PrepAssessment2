// use the following helper functions in your solution
function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}

function filter(array, predicate) {
	var acc = [];
	each(array, function(element, i) {
		if (predicate(element, i)) {
			acc.push(element);
		}
	});
	return acc;
}

function map(array, func) {
	var acc = [];
	each(array, function(element, i) {
		acc.push(func(element, i));
	});
	return acc;
}


  // Remember to relax :)




//=======================================================================
/*                                  Q1                                 */
//=======================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in one array called computers!
// Note: please write one or two lines here describing your solution.

// the function make computer will take the attributes as parameters and than create an object with them;

function makeComputer(name,price,color) {
	

	return {
		name:name,
		price:price,
		color:color
	}
    
}
// we will use the function make computer to create our two object :compter1, and coumputer2
var computer1=makeComputer('dell',1700,'black');
var computer2=makeComputer('acer',1400,'white');
var computers=[computer1,computer2];

// write function displayComputer that can be used to display one computer.

// display computer function will return a string containing the caracterestique of the computer , we will extract the information using the keys.

function displayComputer(computer) {
    return 'this computer is '+computer.name+' ,its price is '+computer.price+' and its color is '+computer.color;
}


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function that takes an array of strings as a input,and returns an array 
//of all of those strings, but transformed to upper case. 
//You can use toUpperCase method to convert a string to upper case.
//solve it using the most appropriate helper functions(each,map,filter).
// Note: please write one or two lines here describing your solution.
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]

// upperCaseAll will use each to loop over all the input array, and change its values to upper case ,every value changed will be pushed into new array of the result;

function uppercaseAll(arrayOfStrings) {
		
	
	var array=[];
	each(arrayOfStrings, function(value){
		array.push(value.toUpperCase());
	})
	return array;
 }


//=============================================================================
/*                                  Q3                                       */
//=============================================================================
//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helperthe helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
{
	country: 'China',
	population: 1409517397,
},
{
	country: 'India',
	population: 1339180127,
},
{
	country: 'USA',
	population: 324459463,
},
{
	country: 'Indonesia',
	population: 263991379,
}
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

// we will use filter function, because we have a condition regarding the population , we will take only the object with population > 500 millioin

function highestPopulation(arrayOfObjects) {


	return filter(arrayOfObjects, function(value){
		return value.population>500000000;

})

}



//=============================================================================
/*                              Q4                                           */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//Note: solve it using the most appropriate helper functions(each,map,filter)
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: please write one or two lines here describing your solution.


// we will use map , to change the values inside our input array, we will divied each value by 2 , and return it
function halveAll(numbers) {
	
	return map(numbers, function(value){
		return value/2;
	})

}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 
// Note: please write one or two lines here describing your solution.


//we will use each because it's moderated here to loop over object, we will push every value of the input object inside and array of the result

 function values(obj) {
	
	var result=[];
	each(obj, function(value, key){
    result.push(value);
	})
 	 return result; 
 }

 
							//Good Luck :))


