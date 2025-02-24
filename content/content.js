// Helper function to wait for elements to load
const waitForElement = (selector, timeout = 5000) => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const checkElement = () => {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        resolve(elements);
      } else if (Date.now() - startTime >= timeout) {
        reject(new Error(`Timeout waiting for ${selector}`));
      } else {
        setTimeout(checkElement, 100);
      }
    };
    
    checkElement();
  });
};

// Function to simulate a more natural click
const safeClick = (element) => {
  return new Promise((resolve) => {
    try {
      // Create and dispatch click event
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      element.dispatchEvent(clickEvent);
      setTimeout(resolve, 500);
    } catch (error) {
      console.error('Click error:', error);
      resolve();
    }
  });
};

// Function to get the first valid accept button
const findAcceptButton = () => {
  const selector = 'button[type="button"][aria-label*="Accept"]';
  const buttons = document.querySelectorAll(selector);
  
  for (const button of buttons) {
    const ariaLabel = button.getAttribute('aria-label') || '';
    if (ariaLabel.toLowerCase().includes('accept')) {
      return button;
    }
  }
  return null;
};

// Function to continuously accept connections
async function acceptConnections() {
  let totalAccepted = 0;
  let keepGoing = true;

  try {
    while (keepGoing) {
      // Find the next accept button
      const button = findAcceptButton();
      
      if (!button) {
        console.log('No more accept buttons found');
        keepGoing = false;
        break;
      }

      try {
        // Wait before clicking
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Click the button
        await safeClick(button);
        totalAccepted++;
        
        console.log(`Accepted connection #${totalAccepted}`);
        
        // Send progress update
        chrome.runtime.sendMessage({
          type: 'progress',
          count: totalAccepted
        });
        
        // Wait a bit before looking for the next button
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (err) {
        console.error('Error processing button:', err);
        keepGoing = false;
      }
    }
    
    const message = totalAccepted > 0
      ? `Successfully accepted ${totalAccepted} connection${totalAccepted !== 1 ? 's' : ''}`
      : 'No connection requests found';
      
    return {
      success: true,
      message,
      count: totalAccepted
    };
    
  } catch (error) {
    console.error('Error in acceptConnections:', error);
    return {
      success: false,
      message: 'An error occurred while processing requests',
      count: totalAccepted
    };
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'acceptConnections') {
    console.log('Starting connection acceptance process');
    acceptConnections()
      .then(response => {
        console.log('Process completed:', response);
        sendResponse(response);
      })
      .catch(error => {
        console.error('Process error:', error);
        sendResponse({
          success: false,
          message: 'An error occurred while processing the requests',
          count: 0
        });
      });
    return true; // Keep message channel open for async response
  }
});

// Debug helper
console.log('LinkedIn Auto Accept content script loaded'); 