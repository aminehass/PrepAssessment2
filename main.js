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

// This factorial function enable to put all the computers configuration into an object using the parameters of function as keys.
function makeComputer( label , CPU , Ram  , laptopOr , Os, price ) {

	return  computer = {computer :{ LabelName : label , ProcessUnit : CPU , RamSize : Ram , Laptop : laptopOr , OperatedSystem : Os,price:price }}
	
}

makeComputer ( "Lenovo" , "I7" , "16GO", false , "Windows 10" , 1000 );

makeComputer ( "Macintosh" , "AMD Rysen 9 generation" ,"8GO" , true ,1500);

// We can build our new array called computers 
var computers =[];
computers[0]= makeComputer ( "Lenovo" , "I7" , "16GO", false , "Windows 10" , 1000 );
computers[1] = makeComputer ( "Macintosh" , "AMD Rysen 9 generation" ,"8GO" , true ,1500);
 // Now we can use console.log just to display our new array on screen as a human machine communication 
console.log (computers) //

// write function displayComputer that can be used to display one computer.


function displayComputer(computer) {
    computer = makeComputer ( label , CPU , Ram , laptop , Os , price )
	return " The computer is " computer.label  " ,its process "+ computer.CPU + " ,its RAM" +computer.Ram +", is it Laptop?  " +computer.laptop+ ", its OS "+ computer.Os+  ", its Price "  +computer.price  ;
	
	
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



// This function uses function map that iterate a function to all  the elements of array , then returns 
// the new array with the modifided values.

function uppercaseAll(arrayOfStrings) {
	 
	return map ( arrayOfStrings , function (element) {  // map permit to return a new array of mofided values.

        return element.toUpperCase() ;

	})


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

// We use function filter that permits  to add to a new array only the elements that answer to the
// condition , then return this new
function highestPopulation(arrayOfObjects) {


	
	return filter ( arrayOfObjects , function ( element , key ){

      

      return  element["population"] >= 500000000 ;

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


// This function used map function wich
//iterate a function on all the element of an array , then return a new array with modified values

function halveAll(numbers) {

	return map ( numbers , function (element){

      return (0.5* element);

	})


}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 
// Note: please write one or two lines here describing your solution.


// Here we have to modify the map function in order to accept objects



 

 
							//Good Luck :))


