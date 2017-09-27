var dropContainer = document.querySelector('.drop-container');
var dragElements = document.querySelectorAll('.drag-container img');
var element;

function handleDragStart(e){
	element = e.target;
	console.log(e);
}
function handleDragEnter(e) {
    this.classList.add('over');
}
function handleDragLeave(e){
	this.classList.remove('over');
}

function handleDrop(e){
	e.preventDefault();
	dropContainer.appendChild(element);
}
function handleDragEnd(){
	dropContainer.classList.remove('over');
}
function handleDragOver(e){
	e.preventDefault();
}

dropContainer.addEventListener('dragenter', handleDragEnter, false);
dropContainer.addEventListener('dragleave', handleDragLeave, false);
dropContainer.addEventListener('drop', handleDrop, false);
dropContainer.addEventListener('dragover', handleDragOver, false);

var length = dragElements.length;
for(var i = 0; i < length; i++){
	dragElements[i].addEventListener('dragstart', handleDragStart, false);
	dragElements[i].addEventListener('dragend', handleDragEnd, false);
}

