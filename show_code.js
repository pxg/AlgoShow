// let scriptEle = document.createElement("script");
// scriptEle.setAttribute("src", "move_zeroes.js");
// // TODO: load it into the pre tag
// console.log(scriptEle);

// Replace 'path/to/your/file.js' with the path to the JavaScript file you want to read
// Will this work with an online path?
const filePath = './show_code.js';

// Get a reference to the <code> element in the DOM
const codeContainer = document.getElementById('codeContainer');

// Use the Fetch API to make an HTTP request to the file
fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Read the response as text
  })
  .then(data => {
    // Create a <code> element to hold the JavaScript code
    const codeElement = document.createElement('code');
    codeElement.textContent = data; // Set the content to the file's content

    // Append the <code> element to the codeContainer
    codeContainer.appendChild(codeElement);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });