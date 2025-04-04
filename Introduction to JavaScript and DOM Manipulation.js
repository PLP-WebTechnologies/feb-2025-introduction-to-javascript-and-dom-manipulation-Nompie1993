 // Changes the text content dynamically
 function changeText() {
    const message = document.getElementById('MotivationMessage');
    message.textContent = 'Hello, Developers! Imagine been called the best and your work been recognized!'
}

// Modifies CSS styles via JavaScript
function modifyStyles() {
    const message = document.getElementById('MotivationMessage');
    message.style.color = 'blue';
    message.style.fontSize = '25px';
    message.style.fontWeight = 'bold';
}

// Adds an element when the button is clicked
 // Create a new paragraph element
 function addElement() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    
    // Set content for the new element
    newParagraph.textContent = 'Hello, Developers! You are the best!';
    
    // Add the new element to the container
    const container = document.getElementById('container');
    container.appendChild(newParagraph);
 }
        

 // Removes the dynamically added element when the button is clicked
 function removeElement() {
    const element = document.getElementById('motivationMessage');
    if (element)
 {
        document.body.removeChild(element);
    } 
    else {
            alert('No element to remove!');
        }
    }