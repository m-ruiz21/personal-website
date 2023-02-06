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


async function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


async function typewriterEffect(content, speed, interval) {  
  var i = 0;
  while (true) {
    write(content[i], speed);
    await waitForMs(interval);
    deleteText(content[i], speed); 
    await waitForMs(interval);
    i++;
    if (i >= content.length) {i=0;}
  }   
}