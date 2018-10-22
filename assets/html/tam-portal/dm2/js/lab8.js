function drag(target, e){
	e.dataTransfer.setData("Text", target.id);//sets the data to type Text, data to the element's id
}

function drop(target, e){
	var food;
	food=e.dataTransfer.getData("Text"); //returns the id for type Text
	target.appendChild(document.getElementById(food));//appends the image element to the DOM as a child of the div 
	e.preventDefault();//prevents default action during drop
}