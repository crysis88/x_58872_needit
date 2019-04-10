/* 
 * Application : NeedIt
 * ClassName   : sys_script_include
 * Created On  : 2017-03-09 21:52:03
 * Created By  : admin
 * Updated On  : 2017-03-09 21:52:03
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=6e6bc21b9f913200bde5f79ff57fcfb6
 */
var NeedItUtils = Class.create();
NeedItUtils.prototype = {
    initialize: function() {
    },
	isDatePast: function(strDate){
		// Create GlideDateTime objects for the current date and the passed in date
		var rightnow = new GlideDateTime();
		var testdate = new GlideDateTime(strDate);
		
		// If the testdate is before rightnow, return true, else return false
		if (testdate.before(rightnow)) {
			return true;
		}
		else {
			return false;
		}
	},
	
		isDateToday: function(strDate){
		
		// Create GlideDateTime objects for the current date and the passed in date
		var rightnow = new GlideDateTime();
		var testdate = new GlideDateTime(strDate);
		// Get the date portion of rightnow and testdate (no timestamp)
		var today = rightnow.getLocalDate();
		var istoday = testdate.getLocalDate();
	
		// Compare today and istoday to see if they are the same day
		if(today.compareTo(istoday) == 0){
			return true;
		}
		else {
			return false;
		}
	},
	
    type: 'NeedItUtils'
};
