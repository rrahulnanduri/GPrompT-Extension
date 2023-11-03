// content.js

// This is a content script that runs on web pages
// Replace this code with logic to communicate with a real ChatGPT API
function sendPromptToChatGPT(prompt) {
  // Mock response for demonstration purposes
  const chatGPTResponse = "This is a mock response from ChatGPT.";

  return chatGPTResponse;
}

// Listen for messages from the extension popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "sendPrompt") {
      const prompt = request.prompt;
      const chatGPTResponse = sendPromptToChatGPT(prompt);
      sendResponse({ response: chatGPTResponse });
  }
});
