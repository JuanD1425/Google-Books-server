const router = require('express').Router();
const booksController = require('../../controller/controller');

// Matches with "/api/books"
router.route('/addbook').post(booksController.create);

// Matches with "/api/books/:id"
router
    .route('/remove:id')
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;