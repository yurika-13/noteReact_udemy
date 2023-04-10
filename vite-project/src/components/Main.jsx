import React from 'react'
import "./Main.css"

export const Main = ({pickUp, counter, handleSubmit, titleChange, textChange, title, text, edittitle, edittext, editTitleChange, editTextChange, editSubmit}) => {
  return (
    <div className='app-main'>
      <div className='app-main-note-edit' onSubmit={handleSubmit}>
        <h2>new</h2>
        <input type="text" placeholder="title" onChange={titleChange}  value={title}/>
        <textarea id={counter} placeholder="input here" onChange={textChange} value={text}></textarea>
      </div>
      <div className='app-main-note-edit' onSubmit={handleSubmit}>
      <h2>edit</h2>
      <button onClick={editSubmit}>edit</button>
        <input type="text" placeholder="title" onChange={editTitleChange}  value={edittitle}/>
        <textarea id={counter} placeholder="input here" onChange={editTextChange} value={edittext}></textarea>
      </div>
      <h2>preview</h2>
      <div className='app-main-note-preview'>
        {/* <h1 className='preview-title'>title: {pickUp.title}</h1>
        <div className='markdown-preview'>text: {pickUp.content}</div> */}
        <h1 className='preview-title'>title: {edittitle}</h1>
        <div className='markdown-preview'>text: {edittext}</div>
      </div>
    </div>
  )
}
