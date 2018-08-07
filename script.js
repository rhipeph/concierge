function getIP(json) {
   var myPublicIP = json.query;
        if(myPublicIP == "223.130.19.2") {
           $("#errorbox").hide( "fast" );
        } else {
            $("#powerapps").hide( "fast" );
        }   
   }
