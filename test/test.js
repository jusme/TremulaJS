


var expect = chai.expect;

mocha.setup({
	ui:'bdd'
	,timeout: 5000 //ms
});

describe("TremulaJS", function() {
	describe("instantiated tremula obj", function() {

		it("it has a Grid obj", function() {
		  expect(tremula.Grid).to.be.an('object');
		});

		it("it has no boxes", function() {
		  expect(tremula.Grid.boxes).to.be.an('array');
		  expect(tremula.Grid.boxes).to.have.length(0);
		});

	});//instantiated tremula obj

// 	  describe("#greets", function() {
// 		it("should throw if no target is passed in", function() {
// 		  expect(function() {
// 			(new Cow()).greets();
// 		  }).to.throw(Error);
// 		});
//  
// 		it("should greet passed target", function() {
// 		  var greetings = (new Cow("Kate")).greets("Baby");
// 		  expect(greetings).to.equal("Kate greets Baby");
// 		});
// 	  });

});//TremulaJS




setTimeout(mocha.run,1100);






