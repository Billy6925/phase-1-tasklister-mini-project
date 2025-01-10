document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        handleTasks(e.target['new-task'].value);
        form.reset()
    })
});
function handleTasks(task) {
    const li = document.createElement('li');
    li.textContent = `${task} `;
    document.getElementById('tasks').appendChild(li);
const btn = document.createElement('button');
btn.textContent = 'x';
li.appendChild(btn);
btn.addEventListener('click', handleDelete);
}
function handleDelete(e) {
    e.target.parentNode.remove()
}
