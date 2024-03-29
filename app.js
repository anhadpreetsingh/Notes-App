const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')


//create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder:{
    title:{
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body:{
      describe: 'this is the body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.addNote(argv.title, argv.body)
  }
})

//create remove command

yargs.command({
  command: 'remove',
  describe: 'removes a note',
  builder:{
    title:{
      describe: 'note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.removeNote(argv.title)
  }
})

//create list command

yargs.command({
  command:'list',
  describe: 'lists out all notes',
  handler(){
    notes.listNotes();
  }
})

//create read command

yargs.command({
  command: 'read',
  describe: 'read notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readNote(argv.title)
  }
})

yargs.parse();

//console.log(yargs.argv)