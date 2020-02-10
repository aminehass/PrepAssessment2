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

//we enter the different components of a computer as an argument, in which the function will create an array for these components. 
// we create two objects of computers through the function

function makeComputer(cpu, gpu, OS, res, noteOrDesk, date) {
    return objComputer={
		cpu: cpu,
		gpu: gpu,
		operatingSystem: OS,
		monitorRes: res,
		notebookOrDesktop: noteOrDesk,
		productionYear: date  
	}
}

objComputerOne= {
    cpu: "i5",
    gpu: "tegra",
    operatingSystem: "Windows",
    monitorRes: "1080p",
    notebookOrDesktop: "notebook",
    productionYear: 2018
}

objComputerTwo= {
    cpu: "i7",
    gpu: "radeon",
    operatingSystem: "Linux",
    monitorRes: "2160p",
    notebookOrDesktop: "desktop",
    productionYear: 2020
}

computerArray=[objComputerOne,objComputerTwo];

// write function displayComputer that can be used to display one computer.

//this function takes two arguments, the array of computers we had created & the number of the computer we wish to display

function displayComputer(computerArr, num) {
    if(num=1) {
		return computerArr[0];
	} else if(num=2) {
		return computerArr[1];
	}
	else {return 'This is not a valid code number.';}
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

// we can solve this problem using the map function
// we simply invoke the map function inside our new function and apply toUpperCase 

var strArr = ['hello', 'world', 'whirled', 'peas'];

function uppercaseAll(arrayOfStrings) {
	var upperArray=[];
	map(arrayOfStrings, function(element, i){
       upperArray[i]= arrayOfStrings[i].toUpperCase();
	});
	return upperArray;
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

//  we will use the filter function to exclude any objects that have a population less than the ordained condition


function highestPopulation(arrayOfObjects) {

    return filter(arrayOfObjects, function(element,i){
       return arrayOfObjects[i].population>500000000;   
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

// we can use the map function to half all of the elements

function halveAll(numbers) {
	var halveArray=[];
	map(numbers,function(element, i){
		halveArray[i]=(numbers[i]/2);
	});
	return halveArray;
}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 
// Note: please write one or two lines here describing your solution.

 function values(obj) {
 	// your code is here
 }

 
							//Good Luck :))


