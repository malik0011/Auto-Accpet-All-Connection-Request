document.addEventListener('DOMContentLoaded', () => {
  const acceptBtn = document.getElementById('acceptBtn');
  const status = document.getElementById('status');
  const spinner = document.getElementById('spinner');

  acceptBtn.addEventListener('click', async () => {
    try {
      // Disable button and show spinner
      acceptBtn.disabled = true;
      spinner.classList.remove('hidden');
      status.textContent = 'Processing...';

      // Get current active tab
      const [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true 
      });

      // Check if we're on the correct LinkedIn page
      if (!tab.url.includes('linkedin.com/mynetwork')) {
        throw new Error('Please navigate to LinkedIn My Network page first');
      }

      // Send message to content script
      const response = await chrome.tabs.sendMessage(tab.id, {
        action: 'acceptConnections'
      });

      // Update status based on response
      status.textContent = response.message;
      status.style.color = response.success ? '#28a745' : '#dc3545';

    } catch (error) {
      status.textContent = error.message || 'An error occurred';
      status.style.color = '#dc3545';
    } finally {
      // Re-enable button and hide spinner
      acceptBtn.disabled = false;
      spinner.classList.add('hidden');
    }
  });
}); 