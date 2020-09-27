const Express = require('express');
const Router = Express.Router();

Router.get('/', (req, res) => {
  res.status(200).json({id: 1, name: 'Billy Bobson'});
});

Router.get('/:id', (req, res) => {
  res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
});

Router.post('/', (req, res) => {
  res.status(200).json({id: 1, name: 'Billy Bobson'});
});

Router.put('/:id', (req, res) => {
  res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
});

Router.delete('/:id', (req, res) => {
  res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
});

module.exports = Router;