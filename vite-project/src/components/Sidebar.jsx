import React from 'react'
import "./Sidebar.css"

export const Sidebar = ({onAddNote, onDeleteNote, notes, Active, activeNote}) => {
  return (
    <div className='app-sidebar'>
        <div className='app-sidebar-header'>
            <h1>note</h1>
            <button onClick={onAddNote}>add</button>
        </div>
        <div className='app-sidebar-notes'>
        {notes.map((items) => (
                // <div className={`${activeNote? "active" : ""} app-sidebar-note `} key={items.id} onClick={() =>Active(items.id)}>
                <div className={`${activeNote === items.id && "active"} app-sidebar-note `} key={items.id} onClick={() =>Active(items.id)}>
                    <div className='sidebar-note-title'>
                        <strong>{items.title}</strong>
                        <button onClick={()=> onDeleteNote(items.id)}>remove</button>
                    </div>
                    <p>{items.content}</p>
                    <small>{new Date(items.modDate).toLocaleDateString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}</small>
                </div>
         ))}
        </div>
        </div>
  )
}
