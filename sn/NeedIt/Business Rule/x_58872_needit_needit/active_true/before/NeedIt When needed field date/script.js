/* 
 * Application : NeedIt
 * ClassName   : sys_script
 * Created On  : 2017-03-03 00:44:14
 * Created By  : admin
 * Updated On  : 2017-03-09 21:55:35
 * Updated By  : admin
 * URL         : /sys_script.do?sys_id=9373668d4fd93200cb281b818110c7f9
 */
(function executeRule(current, previous /*null when async*/) {
	
	// Instantiate the NeedItUtils class.  Call the isDatePast method and pass
	// the u_when_needed value.
	var niutils = new NeedItUtils();
	var isPast = niutils.isDatePast(current.u_when_needed);
	
	// If the isDatePast method returns true, the date is in the past.
	if(isPast == true){
		gs.addErrorMessage("When needed date cannot be in the past.  Your request has not been saved to the database.");
		current.setAbortAction(true);
	}
	
	
	// pass the When needed field value to the isDateToday method in NeedItUtils
	var isToday = niutils.isDateToday(current.u_when_needed);
	
	// if the isDateToday method returns true the When needed date is today 
	if(isToday == true){
		gs.addErrorMessage("You cannot submit NeedIt requests for today.");
		current.setAbortAction(true);
	}
	
})(current, previous);
