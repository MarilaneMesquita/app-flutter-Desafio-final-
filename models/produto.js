import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 25],
    },
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 25],
    },
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  data_atualizado: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Produto;
