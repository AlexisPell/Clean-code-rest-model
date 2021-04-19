import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import 'colors';

// dynamic imports
import { sequelize } from './db';
import { router } from './routes/index';
import { commonErrorHandler } from './utils/commonErrorHandler';
import { notFound } from './utils/notFound';

dotenv.config({ path: path.join(__dirname, '../config.env') });

const main = async () => {
  const app = express();

  // DB
  await sequelize.authenticate(); // make connection to db
  // await sequelize.sync({ force: true }); // syncronize db state ee

  // 3-rd side packages
  app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
  app.use(express.json());
  app.use(fileUpload());
  app.use(helmet());
  app.use(express.static(path.join(__dirname, './public')));
  // routes
  app.use('/api', router);

  // documentation
  app.get('/api/documentation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'documentation.html'));
  });

  // handlers
  app.use(notFound);
  app.use(commonErrorHandler);

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(
      `Server is running in ${process.env.NODE_ENV} on ${process.env.BACKEND_URL}/`.blue.bold
    );
  });
};

main().catch((e) =>
  console.log(
    `
    --- --- --- Some root func server problems: --- --- ---
    `.red.bold,
    e
  )
);
