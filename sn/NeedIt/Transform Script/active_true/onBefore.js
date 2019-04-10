/* 
 * Application : NeedIt
 * ClassName   : sys_transform_script
 * Created On  : 2017-03-29 20:54:03
 * Created By  : admin
 * Updated On  : 2017-03-29 21:02:18
 * Updated By  : admin
 * URL         : /sys_transform_script.do?sys_id=022efcb54fb13200cb281b818110c70c
 */
(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {
// If the coalesce field(s) determine there is no match between the  
// source data row and the target table, do not create a new record in 
// the target table. 

if (action == 'insert') 
    ignore = true;

})(source, map, log, target);
