import express from 'express';
var router = express.Router();

const indexRouter = router.get('/', function(req: any, res: any, next: any) {
  res.send('default address');
});

export default { indexRouter };