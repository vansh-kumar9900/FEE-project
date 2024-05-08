function countWordsAndCharacters() {
    const text = document.getElementById('textInput').value;
    
    // Count words (split by spaces)
    const wordCount = text.split(/\s+/).filter(function(word) {
      return word.length > 0;
    }).length;
    
    // Count characters
    const charCount = text.length;
    
    // Display counts
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
  }