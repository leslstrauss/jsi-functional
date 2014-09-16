/**
 * A function that allows another function to happen one time
 * @function doItOnce
 * @param {function} a function that only happens once
 * @returns {function} 
 * a function that takes a function and returns a function
 *
 */

module.exports.doItOnce = function(oneTimeFunction) {
  var numberOfTimes = 0
  return function() {
    if (numberOfTimes === 0) {
      numberOfTimes = 1;
      return oneTimeFunction();
    }
    else {
      return null;
    }
  };
};