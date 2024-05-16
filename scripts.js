let conlangDictionary = {};

// Function to load the dictionary for the selected language
async function loadDictionary() {
  const selectedLanguage = document.getElementById('languageSelect').value;
  try {
    const response = await fetch(`dictionaries/${selectedLanguage}/dictionary.json`);
    if (!response.ok) {
      throw new Error(`Failed to load dictionary for ${selectedLanguage}`);
    }
    conlangDictionary = await response.json();
    console.log(`Dictionary for ${selectedLanguage} loaded successfully`);
  } catch (error) {
    console.error('Error loading dictionary:', error);
    conlangDictionary = {}; // Reset the dictionary if there's an error
  }
}

// Function to translate the input text using the loaded dictionary
function translate() {
  const inputText = document.getElementById('inputText').value;
  const words = inputText.split(' ');
  const translatedText = words.map(word => conlangDictionary[word.toLowerCase()] || word).join(' ');
  document.getElementById('outputText').value = translatedText;
}

// Load the default language dictionary on page load
window.onload = loadDictionary;
