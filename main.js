var buildApp = require("nativefier").default;
var aConsole = require("asyncconsole");

var darwin = require("./darwin");
var linux = require("./linux");
var win32 = require("./win32");

var confFile = [darwin, linux, win32];

for (var i = 0; i < confFile.length; i++) {
  buildApp(confFile[i], function(error, appPath) {
    if (error) {
      aConsole.error(error);
      return;
    }
    console.log("App has been built in", appPath);
  });
}
