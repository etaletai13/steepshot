var buildApp = require("nativefier").default;

var darwin = require("./darwin");
var linux = require("./linux");
var win32 = require("./win32");

var confFile = [darwin, linux, win32];

for (var i = 0; i < confFile.length; i++) {
  buildApp(confFile[i], function(error, appPath) {
    if (error) {
      console.error(error);
      return;
    }
    console.log("App has been built in", appPath);
  });
}
