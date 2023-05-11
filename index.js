const draggables = document.querySelectorAll('.draggable');
let activeDraggable = null;
let dragX, dragY, newX, newY, offsetX = 0, offsetY = 0;

draggables.forEach((draggable) => {
  draggable.addEventListener('mousedown', dragStart);
  draggable.addEventListener('mouseup', dragEnd);
  draggable.addEventListener('mousemove', drag);
});

function dragStart(e) {
  activeDraggable = this;
  dragX = e.clientX;
  dragY = e.clientY;
}

function dragEnd() {
  dragX = newX;
  dragY = newY;
  activeDraggable = null;
}

function drag(e) {
  if (activeDraggable) {
    e.preventDefault();
    newX = e.clientX - dragX;
    newY = e.clientY - dragY;
    dragX = e.clientX;
    dragY = e.clientY;
    offsetX += newX;
    offsetY += newY;
    activeDraggable.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
}
