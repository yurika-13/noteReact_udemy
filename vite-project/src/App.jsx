import './App.css'
import { Sidebar } from './components/Sidebar'
import { Main } from './components/Main'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes" || [])));
  const [activeNote, setActiveNote] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("")
  const [title, setTitle] = useState("");
  const [edittext, setEdittext] = useState("")
  const [edittitle, setEdittitle] = useState("")

  useEffect(() => {
    //ローカルストレージにノートを保存 localStorage.setIten("キー（なんでもOK）", 入れたい変数),[入れたいタイミング]
    localStorage.setItem("notes", JSON.stringify(notes));
    // JSON.stringify(notes)ローカルサーバーに入れる場合、JSON形式でないとNG。これでJSON形式に変えられる
  }, [notes]
  );

  function onAddNote(){
    const newNote = {
      id:uuid(),
      title: title,
      content: text,
      modDate: Date.now(),
    }
    setNotes([...notes, newNote]);
    setCounter((counter) => counter + 1);
    console.log(notes);
    console.log(counter);
    setText("");
    setTitle("");
  }

  function onDeleteNote(id){
    const newList = [...notes]
    const newDeleteNotes = newList.filter((items) => items.id !== id)
    console.log(newDeleteNotes)
    setNotes(newDeleteNotes)
  }

  function Active(id){
    setActiveNote(id);
    const newList = [...notes]
    const newPickUp = newList.find((items) => items.id === id)
    setPickUp(newPickUp)
    console.log(pickUp);
    setEdittext(newPickUp.content);
    setEdittitle(newPickUp.title)
  }

  function textChange(e){
    setText(e.target.value)
  }

  function titleChange(e){
    setTitle(e.target.value)
  }

  function editTextChange(e){
    setEdittext(e.target.value)
  }

  function editTitleChange(e){
    setEdittitle(e.target.value)
  }

  function editSubmit(){
    // setTitle(edittitle)
    // setText(edittext)
    // onAddNote({title: edittitle, text: edittext});
    const newNote = {
      id:uuid(),
      title: edittitle,
      content: edittext,
      modDate: Date.now(),
    }
    setNotes([...notes, newNote]);
    setCounter((counter) => counter + 1);
    console.log(notes);
    console.log(counter);
    setEdittext("");
    setEdittitle("");
  }

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} Active={Active} activeNote={activeNote}/>
      <Main pickUp={pickUp} handleSubmit={onAddNote} titleChange={titleChange} 
       textChange={textChange} title={title} text={text} 
       edittext={edittext} edittitle={edittitle}
       editTextChange={editTextChange} editTitleChange={editTitleChange}
       editSubmit={editSubmit} />
    </div>
  )
}

export default App
