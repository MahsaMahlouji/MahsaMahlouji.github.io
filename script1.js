function addNewElement(Id) {
    var section = document.getElementById(Id);
  
    var newElement = document.createElement("p");
    newElement.innerHTML ="مشتری جدید اضافه شد" + Id;
  
    section.appendChild(newElement);
  }