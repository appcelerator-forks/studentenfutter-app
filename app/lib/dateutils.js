var moment = require('alloy/moment'),
	date = moment(new Date());

function setToday(newDate) {
	date = newDate;
}

/*
function getDayName(slug) {	
	
	if (new Date() == getToday()) {
		return L("today");
	}
		
	var days = [{
		key : "sunday",
		val : L("sunday")
	},{
		key : "monday",
		val : L("monday")
	},{
		key : "tuesday",
		val : L("tuesday")
	},{
		key : "wednesday",
		val : L("wednesday")
	},{
		key : "thursday",
		val : L("thursday")
	},{
		key : "friday",
		val : L("friday")
	},{
		key : "saturday",
		val : L("saturday")
	}];
	 
	var day = moment(slug).format("dddd");
	
	for(var i = 0; i < days.length; i++) {
		if(days[i].key == day.toLowerCase()) {
			day = days[i].val;
			break;
		}
	}

	return day;
}*/

function getToday() {
	return moment(new Date()).format("DD.MM.YYYY");
}

exports = {
	// getDayName : getDayName,

	setToday : setToday,

	getToday : getToday,
	
	getFormattedDate: function() {
		var tomorrow = moment(new Date).add(1, "day");
		var yesterday = moment(new Date).subtract(1, "day");

		if (date.isSame(moment(new Date()), "day")) {
			return "Heute, " + date.format("DD.MM.YYYY");
		} else if (date.isSame(tomorrow, "day")) {
			return "Morgen, " + date.format("DD.MM.YYYY");
		} else if (date.isSame(yesterday, "day")) {
			return "Gestern, " + date.format("DD.MM.YYYY");
		}
		return date.format("dd[, ]DD.MM.YYYY");
	},

	increment : function() {
		var tomorrow = moment(date).add("day", 1);
		setToday(tomorrow);
	},

	decrement : function() {
		var yesterday = moment(date).subtract("day", 1);
		setToday(yesterday);
	},
	
	getCurrentDateSlug: function() {
		return date.format("YYYY-MM-DD");
	}
};
