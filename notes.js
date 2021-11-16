const { notStrictEqual } = require('assert')
const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body)=>{
  const notes = loadNotes()
  let flag = 0
  for(let i = 0; i < notes.length; i++){
    if(notes[i].title === title){
      flag = 1
      break 
    }
  }

  if(flag == 0){
    const note = {
      title: title,
      body: body
    }
    
    console.log(chalk.green.inverse('new note added'))
    notes.push(note)
    saveNotes(notes)
  }
  else{
    console.log(chalk.red.inverse('title already taken'))
  }

}

const removeNote = (title)=>{
  const notes = loadNotes()
  let flag = 0
  for(let i = 0; i < notes.length; i++){
    if(notes[i].title === title){
      notes.splice(i, 1)
      flag = 1
      break;
    }
  }
  
  if(flag === 1){
    saveNotes(notes)
    console.log(chalk.green.inverse('note deleted'))
  }
  else{
    console.log(chalk.red.inverse('note not found'))
  }

  
}

const loadNotes = ()=>{
  try{
    const notesString = fs.readFileSync('notes.json').toString()
    const notesJSON = JSON.parse(notesString)
    return notesJSON
  }catch(e){
    return []
  }
}

const saveNotes = (notes)=>{
  notesString = JSON.stringify(notes)
  fs.writeFileSync('notes.json', notesString)
}

const listNotes = ()=>{
  console.log(chalk.blue.inverse('Your notes'))
  const notes = loadNotes()
  notes.forEach((note)=>console.log(note.title))
}

const readNote = (title)=>{
  let flag = 0
  const notes = loadNotes();
  for(let i = 0; i < notes.length; i++){
    if(notes[i].title === title){
      console.log(chalk.green.inverse(`Here's the note`))
      console.log(notes[i].body)
      flag = 1
      break
    }
  }

    if(flag === 0)
      console.log(chalk.red.inverse('No note found'))
    
    
      
  }



module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}