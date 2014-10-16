app.controller('MainController', function($scope,Datas){

    $scope.datas = Datas.datas;
    $scope.userStatus = $scope.datas.userStatus;

    $scope.login = function() {
      $scope.datas.userStatus = 'connected';
    };
    $scope.logout = function() {
      $scope.datas.userName= '';
      $scope.datas.userToken= '';
      $scope.datas.userStatus = 'disconnected';
    };
  });

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

