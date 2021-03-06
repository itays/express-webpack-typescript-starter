import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import * as morgan from 'morgan';
import api from './api';
const app = express();

app.use('/api', api);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || '3000');
const server: any = app.listen(app.get('port'), () => {
    // tslint:disable-next-line:no-console
    console.log(`Express running → PORT ${server.address().port} on mode ${process.env.NODE_ENV}` );
});
