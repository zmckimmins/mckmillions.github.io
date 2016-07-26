angular.module( "expApp" ).controller( "homeCtrl", function( $scope, $state, $cookies ) {

	$scope.user = $cookies.getObject( "user" );
	$scope.pending = [];
	$scope.reimbursed = [];
	$scope.expenses = [];
	$scope.edit = true;

	if ( !$scope.user ) {
		$state.go( "login" );
		return "Unauthorized", "Please log in", "error";
	}

	$scope.logout = function() {
		$scope.user = {};
		$cookies.remove( "user" );
		if ( !$scope.user.length ) {
			$state.go( "login" );
		}
	};

	$scope.getExpenses = function() {
		$scope.pending = [];
		$scope.reimbursed = [];
	};

	$scope.addUserExpense = function() {
		$scope.newExpense.id = $scope.expenses.length + 1;
		$scope.expenses.push( $scope.newExpense );
		$scope.getExpenses();
		$scope.newExpense = {};
		$scope.expense.$setUntouched();
	};

	$scope.reimburse = function( reimburse ) {
		var index = reimburse.id - 1;

		reimburse.dateReimbursed = new Date();
		$scope.reimbursed.push( reimburse );
		$scope.expenses.splice( index, 1 );
	};

	$scope.rmvExpense = function( expense ) {
		$scope.expenses.splice( expense.id - 1, 1 );
	};

	// $scope.editModel = function( expense ) {
	// 	// $scope.initialExp = expense;
	// 	$scope.initialArr = [];
	// 	$scope.initialArr.push( expense );
	// 	$scope.initialExpense = $scope.initialArr.slice( 0, 1 );
  //   $scope.initialValue = $scope.initialExpense;
  //   console.log("initialValue", $scope.initialValue);
	// 	$scope.expenseEdited = $scope.initialExpense;
  //   console.log($scope.expenseEdited);
	// };

	$scope.updateExpense = function() {
		// $scope.expenses.push( editExpense );
		// var index = $scope.initialExpense.id - 1;
		// $scope.expenses.splice( index, 1, $scope.expenseEdited );
		// scope.expense = $scope.exepnseEdited;
		// $scope.initalArr = [];
		$scope.getExpenses();
	};

} );
