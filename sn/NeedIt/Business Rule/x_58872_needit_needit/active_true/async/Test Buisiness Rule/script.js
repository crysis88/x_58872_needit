/* 
 * Application : NeedIt
 * ClassName   : sys_script
 * Created On  : 2019-03-12 06:44:42
 * Created By  : admin
 * Updated On  : 2019-03-12 08:48:38
 * Updated By  : admin
 * URL         : /sys_script.do?sys_id=9eefed07db0c3300a53cfbef2996199c
 */
(function executeRule(current, previous /*null when async*/) {
    var getQuote = new sn_ws.RESTMessageV2();
    getQuote.setEndpoint('https://api.iextrading.com/1.0/stock/${symbol}/quote');
    getQuote.setHttpMethod('get');
    getQuote.setQueryParameter('displayPercent','true');
    getQuote.setStringParameterNoEscape('symbol', current.short_description);
    var response = getQuote.execute();
    httpResponseStatus = response.getStatusCode();
    var obj = JSON.parse(response.getBody());
    gs.info("httpResponse: " +JSON.stringify(obj) );

})(current, previous);
