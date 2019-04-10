/* 
 * Application : NeedIt
 * ClassName   : sys_script_client
 * Created On  : 2017-02-16 01:17:29
 * Created By  : admin
 * Updated On  : 2017-02-16 01:17:29
 * Updated By  : admin
 * URL         : /sys_script_client.do?sys_id=9797ed589f013200bde5f79ff57fcff6
 */
function onLoad() {
  //Check to see if the form is for a new record.  If it is a new record, 
  //set the Requested for value to the currently logged in user.

    if(g_form.isNewRecord()){
        g_form.setValue('u_requested_for',g_user.userID);
    }
}
