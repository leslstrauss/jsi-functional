var expect = require('chai').expect;
var lib = require('../index');
var doItOnce = lib.doItOnce;

describe("do it once function", function(){
  it("takes a function and runs it one time", function(){
    var numberOfTimes = 0;
    var getTrueLove = doItOnce(function() { // take doItOnce name out becuase it is undefined
    var trueLove = "Found it, no thanks";
    console.log(trueLove);
    numberOfTimes = numberOfTimes + 1;
    });

    getTrueLove();
    getTrueLove()
    expect(numberOfTimes).to.eql(1);

    });
});