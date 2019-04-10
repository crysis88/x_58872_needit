/* 
 * Application : NeedIt
 * ClassName   : sys_script_client
 * Created On  : 2017-02-08 16:54:04
 * Created By  : admin
 * Updated On  : 2017-02-09 21:17:16
 * Updated By  : admin
 * URL         : /sys_script_client.do?sys_id=0e18a3fd0f743200cd674f8ce1050e43
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below
   alert("You have changed the Short description from " + oldValue + " to " + newValue + ".");
}



