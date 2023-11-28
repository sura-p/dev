var robot = require("robotjs");
var art = require("ascii-art");
// Speed up the mouse.
robot.setMouseDelay(2);
art.font("DEVLOPED            BY          SURAJ", 'doom',)
	.then((rendered) => {
		   console.log(rendered);
           //rendered is the ascii
       }).catch((err)=>{
           //err is an error
       })
var twoPI = Math.PI * 2.0;
var screenSize = robot.getScreenSize();
var height = screenSize.height / 2 - 10;
var width = screenSize.width;

// for (var x = 0; x < width; x++)
// {
// 	y = height * Math.sin((twoPI * x) / width) + height;
// 	robot.moveMouse(x, y);
// }

setInterval(() => {
  for (var x = 0; x < width; x++) {
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
  }
}, 1000);
