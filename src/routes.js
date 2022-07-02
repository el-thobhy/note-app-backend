const {
    addNoteHandler,
    getAllNotesHandler, 
    getNotesByIDHandler, 
    editNoteByIdHandler,
    deleteNoteByIdHandler
} = require("./handler");

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },  
    {
        method:'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method:'GET',
        path: '/notes/{id}',
        handler: getNotesByIDHandler
    },
    {
        method: 'PUT',
        path:'/notes/{id}',
        handler: editNoteByIdHandler
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }
  ];

module.exports = routes;