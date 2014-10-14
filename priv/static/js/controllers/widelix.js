var app=angular.module('widelix', ['angularTreeview','ui.codemirror']);

app.controller('MainController', ['$scope', function($scope,Datas){
    $scope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

    $scope.logged = true;


    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  }]);

app.controller('ClockController', ['$scope', function($scope) { 
    $scope.clock = { now: new Date().format('jS M Y - H:i') };

    var updateClock = function() {
      $scope.clock.now = new Date().format('jS M Y - H:i')
    };
    setInterval(function(){
      $scope.$apply(updateClock);
    },5000);
    updateClock();
  }]);


app.controller('codeMirrorController',  function($scope,Datas) {

    $scope.modes = ['elixir', 'Javascript','erlang','elixir','coffescript','XML'];
    $scope.themes = ['twilight', 'cobalt', 'monokai','elegant'];
    $scope.datas = Datas.datas;

    $scope.mode = $scope.modes[0];
    $scope.theme = $scope.themes[0];

    $scope.cmOption = {
      lineNumbers: true,
      indentWithTabs: true,
      theme:$scope.theme,
      mode: $scope.mode,
      onLoad: function (_cm) {
        // HACK to have the codemirror instance in the scope...
        $scope._cm=_cm;
        $scope.modeChanged = function () {
          _cm.setOption('mode', $scope.mode.toLowerCase());
        };
       $scope.themeChanged = function () {
          _cm.setOption('theme', $scope.theme.toLowerCase());
        };
      }
    };

    // Initial code content...
    $scope.cmModel = $scope.datas.currentFileContent;
});

