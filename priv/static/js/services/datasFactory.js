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
  return {
    datas: {
        userStatus: 'logout',
        userName: '',
        currentFileName: 'None',
        currentFileContent: speudoDemoContent
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
            this.datas.currentFileContent = content;
    }
 };
});