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

// We will create a function that when we give it the attribute as a parameters, it will create an object with all parameters.

function makeComputer(maker, Processor, Ram, HardDisc) {
    return {
		maker : maker,
		Processor : Processor,
		Ram : Ram,
		HardDisc : HardDisc
	};
};
// we create two variable and we use our previous function makeComputer for that.
var computer1 = makeComputer ('hp', 'i7', '16 Gb', '500 Gb');
var computer2 = makeComputer ('Lenovo', 'i5', '8 Gb', '500 Gb');
var computers = [computer1 , computer2];


// write function displayComputer that can be used to display one computer.

function displayComputer(computer) {
    console.log(computer);
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

// we will use the function map to return another array with the change.
function uppercaseAll(arrayOfStrings) {
     return map (arrayOfStrings, function(element, i){
		 return element.toUpperCase();
	 });
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

// in this function we will just return an array with name of the countries with a population more than 500 million
//we can use each to return jus the calue of the key country.
function crowdedCountries (array){
	var arr = [];
	each (array, function (element, i){
		if (element.population >= 500000000){
		return arr.push(element.country)
		};
	})
	return arr;
}

// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

// we use here the function filter in order to return just the object of the countries that match the criteria of more than 500 million population 
function highestPopulation(arrayOfObjects) {
	return filter (array, function (element, i){
		return (element.population >= 500000000);
	});
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


// in order to retrun an array with all the numbers are halved, we can use map to divide each number by 2 and push it in a new array
function halveAll(numbers) {
	return map (numbers , function (x){
		return x/2;
	})

}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 
// Note: please write one or two lines here describing your solution.

// we could use map in this exercise but here we do not have the version of map that take into consideration objects.
// I decided to use each and push the value each time in the new array.
 function values(obj) {
	 var arr = [];
	 each (obj, function (element, key){
		 arr.push(element)
	 })
	 return arr;
 }

 
							//Good Luck :))


