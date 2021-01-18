/**
* marqueegen.js
* Interaction Marquee Statistic Package Generator
*
*
* @license The Unlicense, http://unlicense.org/
* @version 0.2
* @author  Kamil Sienicki
*
*/

var datetime = require('node-datetime');
var fs = require('fs');
var config = fs.readFileSync("config.json");
var configJSON = JSON.parse(config);
var xslData = fs.readFileSync("xslData.json");
var xslDataJSON = JSON.parse(xslData);
var template = fs.readFileSync("template.html");
var htmlData = fs.readFileSync("htmlData.json");
var htmlDataJSON = JSON.parse(htmlData);

var dt = datetime.create(); // generate version
var formattedDate = dt.format('d-m-Y H:M'); // generate version
console.log(xslDataJSON.head) // generate header

// generate workgroup configuration variables
var workgroup_interval = xslDataJSON.workgroup_cfg.replace(/!WORKGROUP_VARIABLE!/g, "WORKGROUP_INTERVAL");
console.log(workgroup_interval.replace(/!WORKGROUP_VALUE!/g, configJSON.workgroup_cfg[0].WORKGROUP_INTERVAL));
var shortcall_interval = xslDataJSON.workgroup_cfg.replace(/!WORKGROUP_VARIABLE!/g, "SHORTCALL_INTERVAL");
console.log(shortcall_interval.replace(/!WORKGROUP_VALUE!/g, configJSON.workgroup_cfg[0].SHORTCALL_INTERVAL));

// generate workgroups variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.workgroup.replace(/!WORKGROUP!/g, configJSON.workgroup[i].list[x]).replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate servicelevel variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.servicelevel.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x).replace(/!WORKGROUP_NAME!/g, configJSON.workgroup[i].list[x]));
	}
}

// generate abandoned rate distribution variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.abandonedratedistribution.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x).replace(/!WORKGROUP_NAME!/g, configJSON.workgroup[i].list[x]));
	}
}

// generate servicelevel abandoned variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		//console.log(xslDataJSON.servicelevelabandoned.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate calls entered variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.callsentered.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate calls entered summary
for(i=0;i<configJSON.workgroup.length;i++) {
	var str = "";
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		y = x + 1;
		if(y == configJSON.workgroup[i].list.length) {
			str += "$" + configJSON.workgroup[i].name + "_ENTERED_WG_" + x;
			console.log(xslDataJSON.callsentered_sum.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!WORKGROUPS_NAME!/g, str));
		} else {
			str += "$" + configJSON.workgroup[i].name + "_ENTERED_WG_" + x + "+";
		}
	}
}

// generate calls answered variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.callsanswered.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate calls answered summary
for(i=0;i<configJSON.workgroup.length;i++) {
	var str = "";
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		y = x + 1;
		if(y == configJSON.workgroup[i].list.length) {
			str += "$" + configJSON.workgroup[i].name + "_ANSWERED_WG_" + x;
			console.log(xslDataJSON.callsanswered_sum.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!WORKGROUPS_NAME!/g, str));
		} else {
			str += "$" + configJSON.workgroup[i].name + "_ANSWERED_WG_" + x + "+";
		}
	}
}

// generate calls waiting variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.callswaiting.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate calls waiting summary
for(i=0;i<configJSON.workgroup.length;i++) {
	var str = "";
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		y = x + 1;
		if(y == configJSON.workgroup[i].list.length) {
			str += "$" + configJSON.workgroup[i].name + "_WAITING_WG_" + x;
			console.log(xslDataJSON.callswaiting_sum.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!WORKGROUPS_NAME!/g, str));
		} else {
			str += "$" + configJSON.workgroup[i].name + "_WAITING_WG_" + x + "+";
		}
	}
}

// generate calls completed variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.callscompleted.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate calls completed summary
for(i=0;i<configJSON.workgroup.length;i++) {
	var str = "";
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		y = x + 1;
		if(y == configJSON.workgroup[i].list.length) {
			str += "$" + configJSON.workgroup[i].name + "_COMPLETED_WG_" + x;
			console.log(xslDataJSON.callscompleted_sum.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!WORKGROUPS_NAME!/g, str));
		} else {
			str += "$" + configJSON.workgroup[i].name + "_COMPLETED_WG_" + x + "+";
		}
	}
}

// generate longest call waiting variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.longestcallwaiting.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate average waiting time variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.averagewaitingtime.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate average conversation time variables
for(i=0;i<configJSON.workgroup.length;i++) {
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		console.log(xslDataJSON.averageconversationtime.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x));
	}
}

// generate average conversation time summary
for(i=0;i<configJSON.workgroup.length;i++) {
	var str = "";
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		y = x + 1;
		if(y == configJSON.workgroup[i].list.length) {
			str += "$" + configJSON.workgroup[i].name + "_ACT_WG_" + x + "_s" + "+";
			str += "$" + configJSON.workgroup[i].name + "_ACT_WG_" + x + "_m" + "+";
			str += "$" + configJSON.workgroup[i].name + "_ACT_WG_" + x + "_h";
			console.log(xslDataJSON.averageconversationtime_sum.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!WORKGROUPS_NAME!/g, str));
		} else {
			str += "$" + configJSON.workgroup[i].name + "_ACT_WG_" + x + "_s" + "+";
			str += "$" + configJSON.workgroup[i].name + "_ACT_WG_" + x + "_m" + "+";
			str += "$" + configJSON.workgroup[i].name + "_ACT_WG_" + x + "_h" + "+";
		}
	}
}

var workgroups = "";
var entered = "";
var completed = "";
var waiting = "";
var longest_waiting = "";
var avg_workingtime = "";
var avg_waittime = "";
var servicelevel = "";
var responserate = "";

// generate HTML
for(i=0;i<configJSON.workgroup.length;i++) {
	var longestwaiting_timetoseconds = "[ ";
	var avg_workingtime_timetoseconds = "";
	var avg_waittime_timetoseconds = "";
	var servicelevel_sl_calc = "";
	var servicelevel_ard_calc = "";
	var responserate_ard = "";
	workgroups += (htmlDataJSON.workgroups.replace(/!NAME!/g, configJSON.workgroup[i].name))
	entered += (htmlDataJSON.entered.replace(/!NAME!/g, configJSON.workgroup[i].name))
	completed += (htmlDataJSON.completed.replace(/!NAME!/g, configJSON.workgroup[i].name))
	waiting += (htmlDataJSON.waiting.replace(/!NAME!/g, configJSON.workgroup[i].name))
	for(x=0;x<configJSON.workgroup[i].list.length;x++) {
		y = x + 1;
		if(y == configJSON.workgroup[i].list.length) {
			longestwaiting_timetoseconds += (htmlDataJSON.longestwaiting_timetoseconds.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			longestwaiting_timetoseconds += "];"
			avg_workingtime_timetoseconds += (htmlDataJSON.avg_workingtime_timetoseconds.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			avg_waittime_timetoseconds += (htmlDataJSON.avg_waittime_timetoseconds.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			servicelevel_sl_calc += (htmlDataJSON.servicelevel_sl_calc.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			servicelevel_ard_calc += (htmlDataJSON.servicelevel_ard_calc.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			responserate_ard += (htmlDataJSON.responserate_ard.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
		} else {
			longestwaiting_timetoseconds += (htmlDataJSON.longestwaiting_timetoseconds.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			longestwaiting_timetoseconds += ',';
			avg_workingtime_timetoseconds += (htmlDataJSON.avg_workingtime_timetoseconds.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			avg_workingtime_timetoseconds += "+"
			avg_waittime_timetoseconds += (htmlDataJSON.avg_waittime_timetoseconds.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			avg_waittime_timetoseconds += "+"
			servicelevel_sl_calc += (htmlDataJSON.servicelevel_sl_calc.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			servicelevel_sl_calc += "+"
			servicelevel_ard_calc += (htmlDataJSON.servicelevel_ard_calc.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
			responserate_ard += (htmlDataJSON.responserate_ard.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, x))
		}
	}
	longest_waiting += (htmlDataJSON.longestwaiting.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!TIME_TO_SECONDS!/g, longestwaiting_timetoseconds))
	avg_workingtime += (htmlDataJSON.avg_workingtime.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!TIME_TO_SECONDS!/g, avg_workingtime_timetoseconds))
	avg_waittime += (htmlDataJSON.avg_waittime.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!TIME_TO_SECONDS!/g, avg_waittime_timetoseconds))
	servicelevel += (htmlDataJSON.servicelevel.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!SL_CALC!/g, servicelevel_sl_calc).replace(/!ARD_CALC!/g, servicelevel_ard_calc))
	responserate += (htmlDataJSON.responserate.replace(/!NAME!/g, configJSON.workgroup[i].name).replace(/!INDEX!/g, i).replace(/!ARD_CALC!/g, responserate_ard))
}

//console.log(longestwaiting_timetoseconds)

console.log(template.toString().replace(/!TITLE!/g, configJSON.title).replace(/!WORKGROUPS_CONF!/g, workgroups).replace(/!ENTERED!/g, entered).replace(/!COMPLETED!/g, completed).replace(/!WAITING!/g, waiting).replace(/!LONGEST_WAITING!/g, longest_waiting).replace(/!AVG_WORKINGTIME!/g, avg_workingtime).replace(/!AVG_WAITTIME!/g, avg_waittime).replace(/!SERVICELEVEL!/g, servicelevel).replace(/!RESPONSE_RATE!/g, responserate).replace(/!VERSION!/g, "@created at "+formattedDate).replace(/!AUTHOR!/g, "@author: Kamil Sienicki - infinIT Codelab Sp. z o.o."));

console.log(xslDataJSON.footer)