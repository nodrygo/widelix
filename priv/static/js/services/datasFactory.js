app.factory('Datas', function () {
  // Initial speudo code content...
     speudoDemoContent = '// DEMO ELIXIR code here.\n' +
    'defmodule Widelix.Mixfile do\n'+
    '   use Mix.Project\n' +
    'config :phoenix, Widelix.Router,\n'+
    '  port: System.get_env("PORT"),\n'+
    '  ssl: false,\n'+
    '  host: "example.com",\n'+
    '  def application do\n'+
    '    [mod: {Widelix, []},\n'+
    '     applications: [:phoenix, :cowboy, :logger]]\n'+
    '  end\n'+
    'end\n\n'+
    '// DEMO Javascript code in here.\n' +
    'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';  

    demoTreeFiles = [
        { "label" : "User", "id" : "role1", "children" : [
            { "label" : "subUser1", "id" : "role11", "children" : [] },
            { "label" : "subUser2", "id" : "role12", "children" : [
                { "label" : "subUser2-1", "id" : "role121", "children" : [
                    { "label" : "subUser2-1-1", "id" : "role1211", "children" : [] },
                    { "label" : "subUser2-1-2", "id" : "role1212", "children" : [] }
                ]}
            ]}
        ]},
        { "label" : "Admin", "id" : "role2", "children" : [] },
        { "label" : "Guest", "id" : "role3", "children" : [] }
    ]; 

    defConfig = {
        headers: { 
                'Content-Type' : 'application/json',
                 },
        cache: false,
        timeout: 5000
    };
    //$httpProvider.defaults.headers.common = { 
    //           'Content-Type' : 'application/json',
    //            }

  return {
    datas: {
        userStatus: 'disconnected',
        userName: '',
        userToken: '',
        currentFileID: '',
        currentFileName: 'None',
        currentFileModified: false,
        currentFileContent: speudoDemoContent,
        treeFiles: demoTreeFiles
    },
    getCurrentFileName: function () {
            return this.datas.currentFileName;
    },
    setCurrentFileName: function (fname) {
            this.datas.currentFileName = fname;
    },
    getCurrentFileContent: function () {
            return this.datas.currentFileContent;
    },
    setCurrentFileContent: function (content) {
            this.datas.currentFileContent = this.readCurrentFile();
    },
    allFiles: function () {
        $http.get('/api/files').
          success(function(data, status, headers, config) {
            if (status==200){
                this.datas.treeFiles = angular.fromJson(data);
            }
          }).
          error(function(data, status, headers, config) {
            this.datas.treeFiles = [];
          });
    },
    readCurrentFile: function () {
        $http.get('/api/files/'+this.datas.currentFileID,defConfig).
          success(function(data, status, headers, config) {
            if (status==200){
                this.datas.currentFileContent = data;
            }
          }).
          error(function(data, status, headers, config) {
          });
    },
    updateCurrentFile: function(){
        $http.put('files/'+this.datas.currentFileID,data, defConfig).
          success(function(data, status, headers, config) {
          }).
          error(function(data, status, headers, config) {
          });
    }
    }
});