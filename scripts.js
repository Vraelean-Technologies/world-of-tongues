const conlangDictionary = {
  // Add your conlang words and translations here
  "hello": "konlang_word_for_hello",
  "world": "konlang_word_for_world"
  // Add more words and translations
};

function translate() {
  const inputText = document.getElementById('inputText').value;
  const words = inputText.split(' ');
  let translatedText = words.map(word => conlangDictionary[word.toLowerCase()] || word).join(' ');
  document.getElementById('outputText').value = translatedText;
}
