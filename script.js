var dropContainer = document.querySelector('.drop-container');

function handleDragEnter(e) {
    this.classList.add('over');
}

function handleDragLeave(e){
	this.classList.remove('over');
}

function handleDrop(e){
	console.log(new Date())
	e.preventDefault();
}

dropContainer.addEventListener('dragenter', handleDragEnter, false);
dropContainer.addEventListener('dragleave', handleDragLeave, false);
dropContainer.addEventListener('drop', handleDrop, false);
document.querySelector('.drag-container img').addEventListener('drop', handleDrop, false);