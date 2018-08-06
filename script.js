var ip = 'check'
var access_key = 'f5ba7b457ae7b68d069be7ac12b492ab';

$.ajax({
    url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
    dataType: 'jsonp',
    success: function(json) {
        var myPublicIP = json.ip;
        if(myPublicIP == "223.130.19.2") {
            window.location.href = "portal.html";
        } else {
            window.location.href = "error.html";
        }                   
    }
});