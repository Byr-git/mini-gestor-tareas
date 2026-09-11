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
    const btn_eliminar = document.createElement('button')

    tarea.textContent = texto
    lista_tareas.appendChild(tarea)

    btn_eliminar.textContent = 'Eliminar'
    tarea.appendChild(btn_eliminar)

    input_tarea.value = ''
    input_tarea.focus()
})

lista_tareas.addEventListener('click', (evento) => {
    if (evento.target.tagName === 'BUTTON') {
        const tarea = evento.target.parentElement
        tarea.remove()
        return
    }

    if (evento.target.tagName === 'LI') {
        evento.target.classList.toggle('completada')
    } 
})


