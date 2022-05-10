import cors from 'cors';
import express from "express"
import { routes } from './routes'

const app = express();

app.use(cors());
app.use(express.json());
app.use('api/v1', routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server ready at port: ${PORT}`);
});
