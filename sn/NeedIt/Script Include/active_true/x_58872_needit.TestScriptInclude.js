/* 
 * Application : NeedIt
 * ClassName   : sys_script_include
 * Created On  : 2019-03-11 10:33:35
 * Created By  : admin
 * Updated On  : 2019-03-12 09:06:55
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=d0bb5db6db803300a53cfbef29961944
 */
var TestScriptInclude = Class.create();
TestScriptInclude.prototype = {
    initialize: function() {
    },
    isDatePast: function(strDate){
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
    type: 'TestScriptInclude'
};
