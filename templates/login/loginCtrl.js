angular.module( "expApp" ).controller( "loginCtrl", function( $scope, $state, $cookies ) {

	$scope.IsVisible = false;
	$scope.ShowHide = function() {
		//If DIV is visible it will be hidden and vice versa.
		$scope.IsVisible = $scope.IsVisible ? false : true;
	};

	$scope.createUser = function() {
		$cookies.putObject( "user", $scope.userInfo );
		$state.go( "home" );
	};

} );
