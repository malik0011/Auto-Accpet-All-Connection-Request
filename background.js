// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('LinkedIn Auto Accept extension installed');
});

// Listen for messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle any future background tasks here
  if (message.type === 'log') {
    console.log('Extension log:', message.data);
  }
  
  // Always return true if you plan to send an async response
  return true;
}); 