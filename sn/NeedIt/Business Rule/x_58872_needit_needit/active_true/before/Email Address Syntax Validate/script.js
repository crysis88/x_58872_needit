/* 
 * Application : NeedIt
 * ClassName   : sys_script
 * Created On  : 2017-03-08 03:44:46
 * Created By  : admin
 * Updated On  : 2017-03-08 03:44:46
 * Updated By  : admin
 * URL         : /sys_script.do?sys_id=01e885f69f513200bde5f79ff57fcf52
 */
(function executeRule(current, previous /*null when async*/) {

    // Pass the Requested for email to the Script Include.  Store the return
    // value from the Script Include in the isEmail variable
    var isEmail = validateEmailAddress(current.u_requested_for_email);
    // If isEmail is false (email address syntax is not valid) do not save
    // the record.  Write an error message to the screen.
    if(isEmail == false){
        gs.addErrorMessage(current.u_requested_for_email + " is not a valid email address.  You must provide a valid email address.");
        current.setAbortAction(true);
    }

})(current, previous);
