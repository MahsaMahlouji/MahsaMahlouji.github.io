function addKeyValuePair() {
    var name = prompt("Enter name:");
    var phone = prompt("Enter phone:");
  
    var obj = {};
    obj[name] = phone;
  
    var outputDiv = document.getElementById("output");
    var newElement = document.createElement("p");
    newElement.innerHTML = name + ": " + phone;
    outputDiv.appendChild(newElement);
  }
  