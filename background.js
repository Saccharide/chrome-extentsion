//// Script running in the background
//window.onload = function() {
//    //var bkg = chrome.extension.getBackgroundPage();
//    if (window.location.href.includes(".md")){
//        chrome.tabs.onActivated.addListener(function(activeInfo) {
//              // how to fetch tab url using activeInfo.tabid
//            //   chrome.tabs.get(activeInfo.tabId, function(tab){
//            //        console.log(tab.url);
//            //          });
//            //          }); 
//            //   })
//        })
//        html2canvas(document.querySelector("#readme")).then(canvas => {
//            document.body.appendChild(canvas)
//            // var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
//            // image.setAttribute('crossOrigin', 'anonymous');
//            // img.src = url;
//            // window.location.href=image;
//        });
//    }
//    else{
//        chrome.tabs.onActivated.addListener(function(activeInfo) {
//              // how to fetch tab url using activeInfo.tabid
//            chrome.tabs.get(activeInfo.tabId, function(tab){
//                chrome.tabs.executeScript(
//                              tab.id,
//                              {code: 'console.log("Not on a readme page")'}
//                );
//              }); 
//        })
////        chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
////            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
////                chrome.tabs.executeScript(
////                              tabs[0].id,
////                              {code: 'console.log("Not on a readme page")'}
////                );
////                    
////            });
//                //code in here will run every time a user goes onto a new tab, so you can insert your scripts into every new tab
//            //}); 
//        //console.log("Not on a readme page");
////        chrome.tabs.executeScript({
////                code: 'console.log("Not on a readme page")'
////            
////        });
//        }
//}
//
