import express from 'express';
var indexRoutes = express.Router();

indexRoutes.get('/', function(req: any, res: any, next: any) {
  res.send('default address');
});

export default  indexRoutes;