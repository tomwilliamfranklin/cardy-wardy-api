import express from 'express';
import { tokenVerify } from '../middleware/auth';
var indexRoutes = express.Router();

indexRoutes.get('/', function(req: any, res: any, next: any) {
  res.send('default address');
});

indexRoutes.get('/testAuth', tokenVerify, function(req: any, res: any, next: any) {
  res.send('Data you should only get when logged in.');
});

export default  indexRoutes;