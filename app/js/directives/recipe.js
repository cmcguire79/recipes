/* global angular */
(function(){
  'use strict';

  angular.module('recipeApp')
  .directive('rcRecipe', function() {
    return {
      restrict: 'A',
      templateUrl: 'partials/recipe.html',
      scope: {
        recipe: '=recipe'
      },
      link: function(scope) {
        scope.clickMe = function () {
        };
      }
    };
  });
}());
