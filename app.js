import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/database.js';

// Importação das rotas
import clienteRoutes from './routes/clientes.js';
import produtoRoutes from './routes/produtos.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);

// Sincronização com o banco de dados e inicialização do servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Não foi possível conectar ao banco de dados:', err);
});
