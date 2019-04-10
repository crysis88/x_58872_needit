/* 
 * Application : NeedIt
 * ClassName   : sys_script_include
 * Created On  : 2017-03-08 03:42:48
 * Created By  : admin
 * Updated On  : 2017-03-08 03:42:48
 * Updated By  : admin
 * URL         : /sys_script_include.do?sys_id=8ba845f69f513200bde5f79ff57fcf47
 */
function validateEmailAddress(emailStr){
    // Use JavaScript coercion to guarantee emailStr is a string
    emailStr = emailStr + '';
    // Compare emailStr against the allowed syntax as specified in the regular expression
    // If emailStr has allowed syntax, return true, else return false
    if(emailStr.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        return true;
    }
    else return false;
}
