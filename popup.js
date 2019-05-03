// Checking if the page has loaded
document.addEventListener('DOMContentLoaded', function() {
        
        // Selecting a button and add an event listener (click listener)
        document.querySelector('button').addEventListener('click',
                onclick, false);

        function onclick() {
            alert("Inside popup.js");

            // Query the current active open tabs. When the query finishes,
            // it will return us all the tabs that is open and active
            chrome.tabs.query({currentWindow: true, active: true},

                    function (tabs) {

                    // Version 0.1
                    // Sending a message to the first tab after the parent
                    // function returns. Based on id, and a string.
                    // chrome.tabs.sendMessage(tabs[0].id, 'hi')

                    // Next version 1.1
                    chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount);
                })
        }

        function setCount (response) {

            const div = document.createElement('div');
            div.textContent = `${response.count} markdown`;
            document.body.appendChild(div);
        }
    }, false);
