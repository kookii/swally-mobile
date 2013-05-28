// Generated by CoffeeScript 1.4.0
(function() {

  window.ourApp.factory('Categories', [
    '$resource', function($resource) {
      return $resource('http://swally.herokuapp.com/categories/:categoryId.json', {
        categoryId: '@id',
        callback: "JSON_CALLBACK"
      }, {
        getById: {
          method: 'JSONP',
          isArray: true
        }
      });
    }
  ]);

  window.ourApp.factory('Pleges', [
    '$resource', function($resource) {
      return $resource('http://swally.herokuapp.com/pledges.json', {
        callback: "JSON_CALLBACK"
      }, {
        getAll: {
          method: 'JSONP'
        }
      });
    }
  ]);

  window.ourApp.factory('sharedServices', [
    '$rootScope', function($rootScope) {
      var sharedBroadcoast, sharedVar;
      sharedVar = {};
      sharedVar.show_mini_game = false;
      sharedVar.current_mini_game = [];
      sharedVar.showMiniGame = function(current_mini_game) {
        this.show_mini_game = true;
        this.current_mini_game = current_mini_game;
        return sharedBroadcoast();
      };
      sharedVar.hideMiniGame = function() {
        this.show_mini_game = false;
        this.current_mini_game = {};
        return sharedBroadcoast();
      };
      sharedBroadcoast = function() {
        return $rootScope.$broadcast('show-mini-game');
      };
      return sharedVar;
    }
  ]);

}).call(this);
