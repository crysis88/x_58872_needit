/* 
 * Application : NeedIt
 * ClassName   : sys_script_client
 * Created On  : 2017-02-16 01:06:51
 * Created By  : admin
 * Updated On  : 2017-05-02 20:36:48
 * Updated By  : admin
 * URL         : /sys_script_client.do?sys_id=fff4ad589f013200bde5f79ff57fcf84
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue == '') {
        return;
    }
    var whatneeded = g_form.getValue('u_what_needed');
    // Clear all of the choices from the What needed field choice list
    g_form.clearOptions('u_what_needed');
    // If the the value of the Request type field is hr, add
    // two hr choices and other to the What needed field choice list
    if (newValue == 'hr') {
        g_form.addOption('u_what_needed', 'hr1', 'Human Resources 1');
        g_form.addOption('u_what_needed', 'hr2', 'Human Resources 2');
        g_form.addOption('u_what_needed', 'other', 'Other');
    }
    // If the the value of the Request type field is facilities, add
    // two facilities choices and other to the What needed field
    // choice list
    if (newValue == 'facilities') {
        g_form.addOption('u_what_needed', 'facilities1', 'Facilities 1');
        g_form.addOption('u_what_needed', 'facilities2', 'Facilities 2');
        g_form.addOption('u_what_needed', 'other', 'Other');
    }
    // If the the value of the Request type field is legal, add
    // two legal choices and other to the What needed field
    // choice list
    if (newValue == 'legal') {
        g_form.addOption('u_what_needed', 'legal1', 'Legal 1');
        g_form.addOption('u_what_needed', 'legal2', 'Legal 2');
        g_form.addOption('u_what_needed', 'other', 'Other');
    }
    // If the form is loading and it is not a new record, set the u_what_needed value to the
    // value from the record before it was loaded
    if (isLoading && !g_form.isNewRecord()) {
        g_form.setValue('u_what_needed', whatneeded);
    }
}
