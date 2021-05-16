const writerController = require('../controllers/writerController');


module.exports = (app) => {
    app.get('/api/findauthors', writerController.findAuthors);
    app.post('/api/authors', writerController.createAuthor);
    app.put('/api/author/:id', writerController.updateAuthor);
    app.delete('/api/author/:id', writerController.deleteAuthor);
    app.get('/api/author/:id', writerController.findAuthor);

}
