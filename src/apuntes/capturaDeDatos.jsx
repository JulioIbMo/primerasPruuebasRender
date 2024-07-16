import { useState } from 'react'
import Note from './components/Note'


const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
//2a. Agregamos nuevo estado para almacenar el input
  const [newNote , setNewNote] = useState(
    '...a new note'
  )
// 5. FILTRADO DE ELEMENTOS MOSTRADOS
// 5a. iniciamos nuevo estado
  const [showAll,setShowAll] = useState(true)

//3a. Para poder editar el input se establece este controlador 
//de eventos que sincroniza los cambios realizados en el input 
//con el estado
const handleNoteChange = (event) => {
  console.log(event.target.value)
  setNewNote(event.target.value)
}
//5b. Almacenar una lista de notas que se mostraran en
//notesToShow
const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)

// 1.b Funcion del formulario que controla evento 
// que se llama cuando se envia el formulario when clickeas submit
  const addNote = (event) => {
    event.preventDefault()

    // 4. Se completa la funcion que crea notas
    console.log('button clicked', event.target)
    // 4a. Primeramente se crea un nuevo objecto que contendra 
    //new Note es decir lo que se introduzca en el input
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    // 4b La nueva nota se agrega a la lista ya existente
    setNotes(notes.concat(noteObject))

    // 4c. El input se reestablece poniendo el input como string vacio
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      {/* 5c. A continuación, agreguemos una funcionalidad que permita a los usuarios 
      alternar el estado showAll de la aplicación desde la interfaz de usuario. */}
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => //notes +ToShow
          <Note key={note.id} note={note} />
        )}
      </ul>
  {/* 1.a Atributo onSubmit con funcion que se llamara cuando se envie */}
        <form onSubmit={addNote}>
  {/* 2b. Para enlazar input con el estado newNote.. se lo asigna a value 
  , el componente ahora CONTROLA el comportamiento del input*/}
          <input 
          value={newNote}
  // 3b. Controlador de eventos onChange para el input que se llama cada
  // vez que ocurre un cambio
          onChange={handleNoteChange}/>
          <button type="submit">save</button>
        </form>

    </div>
  )
}

export default App 