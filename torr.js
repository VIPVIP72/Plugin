// One-time call
// Checking app installation
var request = webOS.service.request('luna://com.webos.applicationManager', {
  method: 'getAppLoadStatus',
  parameters: { appId: 'torrserv.matrix.app' },
  onSuccess: function (inResponse) {
    if (inResponse.exist) {
	} else {
     	 var request = webOS.service.request('luna://com.webos.applicationManager', {
  		method: 'launch',
  		parameters: { id: 'torrserv.matrix.app' },
  		onSuccess: function (inResponse) {
    		console.log('The app is launched');
  		  // To-Do something
		  },
 		 onFailure: function (inError) {
 			 console.log('Failed to launch the app');
   			 console.log('[' + inError.errorCode + ']: ' + inError.errorText);
    		// To-Do something
   		 return;
		  },
	});
      // To-Do something
    }
  },
  onFailure: function (inError) {
    console.log('Failed to check app installation');
    console.log('[' + inError.errorCode + ']: ' + inError.errorText);
    // To-Do something
    return;
  },
});
