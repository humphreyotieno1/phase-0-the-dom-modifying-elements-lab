const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.append(newHeader);

const mainElement = document.getElementById('main');
mainElement.remove('main');
