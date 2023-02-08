/**
 * @brief writes the text with for typewritter effect  
 * @param {String} text text to be written 
 * @param {Number} speed interval between letters being typed 
 */
function write(text, speed) {
  var element = document.getElementById("text"); 
  var i = 0;
  var timer = setInterval(function(){
    if (i < text.length) {
      element.append(text.charAt(i))
      i++;
    }
  }, speed)
}

/**
 * @brief deletes the text for typewritter effect  
 * @param {String} text text that needs to be deleten 
 * @param {Number} speed interval between letters being deleted 
 */
function deleteText(text, speed) {
  var element = document.getElementById("text");
  var letters = text.split("");
  setInterval(function(){
    if(letters.length > 0) {
      letters.pop();
      element.innerHTML = letters.join("");
    }
  }, speed); 
}

/**
 * @brief used to create ms pause between write / delete   
 * @description async function that creates promise with intent to timeout after certain time in ms. Used to create 
 * @param {Number} ms interval in ms that function wait delay
 */
async function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * @brief "orchestrator" of the typewriter effect code
 * @param {Array<string>} content list of words to be written 
 * @param {Number} speed delay between characters being deleted/written
 * @param {Number} interval interval in ms between write and delete functions  
 */
async function typewriterEffect(content, speed, interval) {  
  var i = 0;
  while (true) {
    write(content[i], speed);
    await waitForMs(interval);
    deleteText(content[i], speed); 
    await waitForMs(interval);
    i = (i + 1) % content.length;
  }   
}