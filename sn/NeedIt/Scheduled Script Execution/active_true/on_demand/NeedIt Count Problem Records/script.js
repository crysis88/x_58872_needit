/* 
 * Application : NeedIt
 * ClassName   : sysauto_script
 * Created On  : 2017-03-16 21:29:13
 * Created By  : admin
 * Updated On  : 2017-03-16 21:29:13
 * Updated By  : admin
 * URL         : /sysauto_script.do?sys_id=af098a619f653200bde5f79ff57fcf53
 */
// Create a GlideRecord object for the Problem table
var gr = new GlideRecord('problem');
// Query the problem table and return all records in the GlideRecord object
gr.query();
// Log the number of records in the Problem table
gs.info("Total records in Problem table = " + gr.getRowCount());
