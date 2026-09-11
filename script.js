const formulario = document.querySelector('#form-tarea')
const input_tarea = document.querySelector('#input-tarea')
const lista_tareas = document.querySelector('#lista-tareas')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const texto = input_tarea.value.trim()

    if (texto === '') {
        return
    }

    const tarea = document.createElement('li')
    tarea.textContent = texto
    lista_tareas.appendChild(tarea)
    input_tarea.value = ''
})

lista_tareas.addEventListener('click', (evento) => {
    if (evento.target.tagName === 'LI') {
        evento.target.classList.toggle('completada')
    }
})
