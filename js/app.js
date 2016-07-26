angular.module( "expApp", [ "ui.router", 'ngCookies' ] )

.config( function( $stateProvider, $urlRouterProvider ) {

	$stateProvider

			.state( "login", {
				url: "/"
				, templateUrl: "../templates/login/login.html"
				, controller: "loginCtrl"
			} )
			.state( "home", {
				url: "/home"
				, templateUrl: "../templates/home/home.html"
				, controller: "homeCtrl"
			} );

	$urlRouterProvider.otherwise( "home" );

} );
