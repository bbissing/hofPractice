// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var sum = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      sum += 1;
    }
  });

  return sum;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {

  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  return _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {

  return _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var prices = [];

  _.each(products, function(product, index, collection) {
    var arr = product.price.split('$');
    prices.push(parseFloat(arr[1]));
  });

  return _.reduce(prices, function(memo, price) {
    return memo += price;
  });
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var result = {};
  var dessertTypes = [];

  _.each(desserts, function(dessert, index, collection) {
    dessertTypes.push(dessert.type);
  });

  _.reduce(dessertTypes, function(memo, value, index) {
    if (index === 1) {
      result[memo] = 1;
      if (memo === value) {
        result[memo] += 1;
      } else {
        result[value] = 1;
      }
    } else {
      if (!result[value]) {
        result[value] = 1;
      } else {
        result[value] += 1;
      }
    }
  });

  return result;
};


// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var arr = [];

  return arr.concat(_.reduce(movies, function(memo, value, index) {
    if (value.releaseYear >= 1990 && value.releaseYear < 2000) {
      memo.push(value.title);
      return memo;
    } else {
      return memo;
    }
  }, []));

};

// var ninetiesKid = function(movies) {
//   var arr = [];

//   _.reduce(movies, function(memo, value, index) {
//     if (value.releaseYear >= 1990 && value.releaseYear < 2000) {
//       arr.push(value.title);
//     }
//   }, false);

//   return arr;
// };

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(memo, value, index) {
    if (memo) {
      return memo;
    } else if (value.runtime < timeLimit) {
      memo = true;
      return memo;
    } else {
      return memo;
    }
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit, index, fruits) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert, index, desserts) {
    if (dessert.ingredients.indexOf('flour') < 0) {
      dessert.glutenFree = true;
      return dessert;
    } else {
      dessert.glutenFree = false;
      return dessert;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(item, index, groceries) {
    var price = item.price.split('$');
    item.salePrice = '$' + ((price[1]) * (1 - coupon)).toFixed(2);
    return item;
  });
};