

// defined logtypes. for more information refer here http://stackoverflow.com/questions/2031163/when-to-use-the-different-log-levels
var logTypes = {
	FATAL : 1,
	ERROR : 2,
	WARN : 3,
	INFO : 4,
	DEBUG : 5,
	TRACE : 6
}


console.prettylog = function(log,logType,logTheme){
	
	// default theme when no theme value is passed
	if (typeof logTheme == 'undefined')
		logTheme = "default";

	// default message type when no message type value is passed
	if (typeof logType == 'undefined')
		logType = "INFO";

	var logStyle = getTheme(logTheme);
	console.log(logStyle,logTheme);


	console.log("%c"+log,"font-size: "+ logStyle.fontSize[logTypes[logType]-1] +"; color: "+logStyle.fontColor[logTypes[logType]-1]+"; ")


}


function getTheme(themeName){
	
	var themeObject = new Object();

	switch(themeName){
		case "default":
		themeObject.fontSize = [16,12,12,12,12,12];
		themeObject.fontColor = ["#e74c3c","#e74c3c","#f39c12","#3498db","#2c3e50","#95a5a6"];
		themeObject.background = ["#fff","#fff","#fff","#fff","#fff","#fff"];
		return themeObject;
		break;

	}

}