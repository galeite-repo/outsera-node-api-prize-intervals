import app from './app';
import { sequelize } from './config/db';
import { importCSV } from './loader/import';

const PORT = 3000;

sequelize.sync({ force: true }).then(async () => {
  await importCSV();
  app.listen(PORT, () => {
    console.log(`API rodando na porta: ${PORT}`);
  });
});