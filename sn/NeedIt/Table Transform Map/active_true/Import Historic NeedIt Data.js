/* 
 * Application : NeedIt
 * ClassName   : sys_transform_map
 * Created On  : 2017-03-29 20:18:26
 * Created By  : admin
 * Updated On  : 2017-03-29 20:47:46
 * Updated By  : admin
 * URL         : /sys_transform_map.do?sys_id=13d5bc714fb13200cb281b818110c71e
 */
(function transformRow(source, target, map, log, isUpdate) {
// If the source data does not have a u_requested_for_email field, 
// create the target email address from the Requested for value.  Email addresses 
// have the format firstname.lastname@example.com.  Convert the u_requested_for 
// value to lowercase.  Replace the space with a . and concatenate with 
// @example.com
if(!("u_requested_for_email" in source)){
    var name = source.u_requested_for.toLowerCase();
    target.u_requested_for_email = name.replace(" ", ".") + "@example.com";
}
})(source, target, map, log, action==="update");
