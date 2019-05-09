// This script is loaded everytme to the active page!
//
// alert("Inside content.js")

// // Version 0.1
// // Anytime a message getting sent, and request would be the message sent
// chrome.runtime.onMessage.addListener(function (request) {
// 
//     alert("First appoarch")        
//     // Create a new regular expression to check for all the instance of
//     // markdown, case insensitive 'i'
//     const re = new RegExp('markdown','gi')
// 
//     // Getting the matches, document.documentElement is the entire
//     // document.
//     const matches = document.documentElement.innerHTML.match(re)
// 
// })

// Version 1.1
// Another way to communicate between the sender and receiver (i.e., send a
// response back to sender) is the alternate addListener function, by
// adding the sender and the function to call
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 
//     // Interesting... If alert was triggered, then the below script would NOT be run
//     // alert("Second appoarch");
// 
//     // Create a new regular expression to check for all the instance of
//     // markdown, case insensitive 'i'
//     const re = new RegExp('markdown','gi');
// 
//     // Getting the matches, document.documentElement is the entire
//     // document.
//     const matches = document.documentElement.innerHTML.match(re);
// 
//     sendResponse({count: matches.length});
// 
// });

// Version 2.1
// Instead of waiting for a message being sent by the popup, we will just count the
//









//    //var bkg = chrome.extension.getBackgroundPage();
//if (window.location.href.includes(".md")){
////    rome.tabs.onActivated.addListener(function(activeInfo) {
////          // how to fetch tab url using activeInfo.tabid
////        //   chrome.tabs.get(activeInfo.tabId, function(tab){
////        //        console.log(tab.url);
////        //          });
////        //          }); 
////        //   })
////    })
//    console.log("DEBUG: I am on a README page!");
//    html2canvas(document.querySelector("#readme")).then(canvas => {
//        document.body.appendChild(canvas)
//        // var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
//        // image.setAttribute('crossOrigin', 'anonymous');
//        // img.src = url;
//        // window.location.href=image;
//    });
//                
//
//}
//else{
//    console.log("DEBUG: I am NOT on a README page ...");
////    chrome.tabs.onActivated.addListener(function(activeInfo) {
////          // how to fetch tab url using activeInfo.tabid
////        chrome.tabs.get(activeInfo.tabId, function(tab){
////            chrome.tabs.executeScript(
////                          tab.id,
////                          {code: 'console.log("Not on a readme page")'}
////            );
////          }); 
////    })
//}




