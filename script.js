//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,
    newParagraph = document.createElement('p'),
    newParagraphBCE = document.createElement('p'),
    newParagraphRecency = document.createElement('p');


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.

//Angie - When the user clicks the “Donate” button, display a prompt that asks this question: How much would you like to donate?
  var newDonation = window.prompt('How much would you like to donate?');

 //Angie - create new <h3> element
  var newDonationHeaderElement = document.createElement('h3');

  //Angie - add text to element if <100 or >= 100 and set text to red
  if (newDonation < 100) {
    var newDonationHeaderText = document.createTextNode('Thank you for your donation of $' + newDonation + '.');
  }else if (newDonation >= 100) {
    newDonationHeaderText = document.createTextNode('Thank you for your very generous donation!');
    //set to red
    newDonationHeaderElement.style.color = "red";
  };

  //Angie - append the text node to <h3> element
  newDonationHeaderElement.appendChild(newDonationHeaderText);

  //Angie - find existing element to attach new element  
  var sideNav = document.getElementById("SideNav");
    //Angie - append new element to existing element
    sideNav.appendChild(newDonationHeaderElement);


  //Angie - Get all article elements and set variable
  var articleElements = document.getElementsByTagName("article");

  //Angie - FOR loop to go through articles and set color to red with CSS class generous-donation
  for(i = 0; i < articleElements.length; i++) {
    if(newDonation >= 100) {
      articleElements[i].className = ("generous-donation");
    }
};
});


document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.


  //Angie - add text to the element
  var newParagraphText = document.createTextNode('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.');
    //Angie - append the text node to <p> element
    newParagraph.appendChild(newParagraphText);



  //Angie - set BCE Text variable and create text node in place of console statements
  if(speechesArray[0].yearIsBCE === true){
    var newParagraphBCEText = document.createTextNode('This speech took place before the common era.');
  }else{
    newParagraphBCEText = document.createTextNode('This speech took place during the common era.');
  }

  //Angie - append text node to <p> element
  newParagraphBCE.appendChild(newParagraphBCEText);



  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  //Angie - set Recency Text variable and create text node in place of console statements
  if(speechesArray[0].year === oldest){
    var newParagraphRecencyText = document.createTextNode("This is the oldest speech on the page.");
  }else if(speechesArray[0].year === newest){
    newParagraphRecencyText = document.createTextNode('This is the most recent speech on the page.');
  }else{
    newParagraphRecencyText = document.createTextNode('This is the neither the oldest nor the most recent speech.')
  }

  //Angie - append text node to <p> element
  newParagraphRecency.appendChild(newParagraphRecencyText);

//Angie - find existing element to attach new element  
  var consoleDisplay = document.getElementById("ConsoleDisplay");

//Angie - append new element to existing element
    consoleDisplay.appendChild(newParagraph);
    consoleDisplay.appendChild(newParagraphBCE);
    consoleDisplay.appendChild(newParagraphRecency);

});


document.getElementById('BtnGhandi').addEventListener('click', function(){
    //Code in here executes when the user clicks the "Ghandi" button.

  //Angie - add text to the element
  var newParagraphText = document.createTextNode('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.');
    //Angie - append the text node to <p> element
    newParagraph.appendChild(newParagraphText);



  //Angie - set BCE Text variable and create text node in place of console statements
  if(speechesArray[1].yearIsBCE === true){
    var newParagraphBCEText = document.createTextNode('This speech took place before the common era.');
  }else{
    newParagraphBCEText = document.createTextNode('This speech took place during the common era.');
  }

  //Angie - append text node to <p> element
  newParagraphBCE.appendChild(newParagraphBCEText);


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }


  //Angie - set Recency Text variable and create text node in place of console statements
  if(speechesArray[1].year === oldest){
    var newParagraphRecencyText = document.createTextNode('This is the oldest speech on the page.');
  }else if(speechesArray[1].year === newest){
    newParagraphRecencyText = document.createTextNode('This is the most recent speech on the page.');
  }else{
    newParagraphRecencyText = document.createTextNode('This is the neither the oldest nor the most recent speech.')
  }

  //Angie - append text node to <p> element
  newParagraphRecency.appendChild(newParagraphRecencyText);


//Angie - find existing element to attach new element  
  var consoleDisplay = document.getElementById("ConsoleDisplay");

//Angie - append new element to existing element
    consoleDisplay.appendChild(newParagraph),
    consoleDisplay.appendChild(newParagraphBCE),
    consoleDisplay.appendChild(newParagraphRecency);

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

  //Angie - add text to the element
  var newParagraphText = document.createTextNode('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.');
    //Angie - append the text node to <p> element
    newParagraph.appendChild(newParagraphText);

  //Angie - set BCE Text variable and create text node in place of console statements
  if(speechesArray[2].yearIsBCE === true){
    var newParagraphBCEText = document.createTextNode('This speech took place before the common era.');
  }else{
    newParagraphBCEText = document.createTextNode('This speech took place during the common era.');
  }

  //Angie - append text node to <p> element
  newParagraphBCE.appendChild(newParagraphBCEText);


  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  //Angie - set Recency Text variable and create text node in place of console statements
  if(speechesArray[2].year === oldest){
    var newParagraphRecencyText = document.createTextNode('This is the oldest speech on the page.');
  }else if(speechesArray[0].year === newest){
    newParagraphRecencyText = document.createTextNode('This is the most recent speech on the page.');
  }else{
    newParagraphRecencyText = document.createTextNode('This is the neither the oldest nor the most recent speech.')
  }

  //Angie - append text node to <p> element
  newParagraphRecency.appendChild(newParagraphRecencyText);


//Angie - find existing element to attach new element  
  var consoleDisplay = document.getElementById("ConsoleDisplay");

//Angie - append new element to existing element
    consoleDisplay.appendChild(newParagraph),
    consoleDisplay.appendChild(newParagraphBCE),
    consoleDisplay.appendChild(newParagraphRecency);

});
