export const GameChartsServices = [

'$http',
'$rootScope',
'UserProfileServices',

class GameChartsServices {
  constuctor($http, $rootScope, UserProfileServices){
    this.$http = $http;
    this.$rootScope = $rootScope;
    this.userDataQuery = this.userDataQuery.bind(this);
    this.UserProfileServices = UserProfileServices;
  }


  userDataQuery() {
    if ($rootScope.visible !== true) {
      console.log('no user logged in')
      $state.go('splash');
    } else {
      const req ={
        method: 'GET',
        url: `/api/game-stats/${this.$rootScope.user}`,
      };
      return this.$http(req).success(response => {
        console.log('response.stats', response.stats)
      })
    }

  }

}];