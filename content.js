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
console.log("--> Not on readme page");






