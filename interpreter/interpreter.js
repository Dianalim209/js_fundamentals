	// Problem 1
	var first_variable = "Yipee I was first!";
	console.log(first_variable);
	function firstFunc() {
	  first_variable = "Not anymore!!!";
	  console.log(first_variable);
	}
	console.log(first_variable);

	// Problem 2
	var food = "Chicken";
	function eat() {
	  var food = "gone";
	  food = "half-chicken";
	  console.log(food);
	}
	eat();
	console.log(food);

  // Problem 3
  var new_word = "NEW!";
  function lastFunc() {
    new_word = "old";
  }
  console.log(new_word);
