// Generated by CoffeeScript 1.7.1
(function() {
  angular.module("google-maps.directives.api".ns()).service("IDrawingManager".ns(), [
    function() {
      return {
        restrict: "EA",
        replace: true,
        require: '^' + 'GoogleMap'.ns(),
        scope: {
          "static": "@",
          control: "=",
          options: "="
        }
      };
    }
  ]);

}).call(this);
