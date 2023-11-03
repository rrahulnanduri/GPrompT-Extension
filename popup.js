document.getElementById('generate').addEventListener('click', function () {
    const prompt = document.getElementById('prompt').value;

    // Simulate generating a response within the extension
    const chatGPTResponse = generateChatGPTResponse(prompt);

    // Display the response in the 'response' div
    document.getElementById('response').textContent = chatGPTResponse;
});

// Function to simulate generating a response
function generateChatGPTResponse(prompt) {
    // Define a list of predefined prompts and responses
    const predefinedResponses = {
        "How's the weather today?": "The weather is sunny and warm.",
        "Tell me a joke.": "Why don't scientists trust atoms? Because they make up everything!",
        "What's the capital of France?": "The capital of France is Paris.",
        "Who won the World Series in 2022?": "I'm not sure, I don't have up-to-date sports information.",
    };

    // Check if the prompt is in the predefined responses
    if (prompt in predefinedResponses) {
        return predefinedResponses[prompt];
    } else {
        // If the prompt is not in the predefined responses, provide a default response
        return "I'm not sure how to respond to that.";
    }
}
