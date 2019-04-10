/* 
 * Application : NeedIt
 * ClassName   : sys_ui_policy
 * Created On  : 2017-02-16 19:38:52
 * Created By  : admin
 * Updated On  : 2017-02-17 02:18:15
 * Updated By  : admin
 * URL         : /sys_ui_policy.do?sys_id=60c365289f413200bde5f79ff57fcfa9
 */
function onCondition() {
	// Clear the field message written by the Execute if true script for the Other field
	g_form.hideFieldMsg('u_other',true);
	
}
