/* 
 * Application : NeedIt
 * ClassName   : sys_script_include
 * Created On  : 2017-03-09 00:58:22
 * Created By  : admin
 * Updated On  : 2017-03-09 00:58:22
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=6e9c2dcf9f113200bde5f79ff57fcfd2
 */
var GetEmailAddress = Class.create();
// Extend the global.AbstractAjaxProcessor class
GetEmailAddress.prototype = Object.extendsObject(global.AbstractAjaxProcessor,{
    // Define the getEmail function.  
    // Create a GlideRecord for the User table.
    // Use the sysparm_userID passed from the client side to retrieve a record from the User table.
    // Return the email address for the requested record
    getEmail: function() {
        var userRecord = new GlideRecord("sys_user");
        userRecord.get(this.getParameter('sysparm_userID'));
        return userRecord.email + '';
    },
    type: 'GetEmailAddress'
});
