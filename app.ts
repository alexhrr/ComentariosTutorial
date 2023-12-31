import * as dotenv from 'dotenv';
import express from 'express';
import * as bodyParser from 'body-parser';
//import { orderRouter } from './routes/orderRouter';
import { db } from './db';

const app = express();
dotenv.config();

app.use(bodyParser.json());
//app.use('/orders', orderRouter);

db.connect((err) => {
	if(err){
		console.log('Database connection error');
	} else {
		console.log('Database Connected');
	}
});

app.listen(process.env.PORT, () => {
	console.log('Node server started running');
	console.log(`Go to http://${process.env.HOST}:${process.env.PORT}`);
});