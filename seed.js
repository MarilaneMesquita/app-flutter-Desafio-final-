import sequelize from './config/database.js';
import Cliente from './models/cliente.js';
import Produto from './models/produto.js';

const clientesData = [
  {
    nome: 'Ana',
    sobrenome: 'Souza',
    email: 'ana.souza@example.com',
    idade: 28,
    foto: 'https://media.istockphoto.com/id/1386863107/pt/foto/smiling-happy-caucasian-young-woman-in-denim-shirt-looking-at-camera-with-arms-crossed.webp?s=1024x1024&w=is&k=20&c=JFdjnu9bhap4y7uhKSl8P008_6bucCkzufQdIbsQIxg=',
  },
  {
    nome: 'Carlos',
    sobrenome: 'Pereira',
    email: 'carlos.pereira@example.com',
    idade: 35,
    foto: 'https://media.istockphoto.com/id/918865054/pt/foto/you.jpg?s=1024x1024&w=is&k=20&c=DUU2Cn77dEJCOE05K7qKtM7-3vwtYMKXfPC5cgBEWSU=',
  },
  {
    nome: 'Laura',
    sobrenome: 'Almeida',
    email: 'laura.almeida@example.com',
    idade: 22,
    foto: 'https://media.istockphoto.com/id/636811440/pt/foto/portrait-of-beautiful-woman-with-beaming-smile-with-crossed-hands.jpg?s=1024x1024&w=is&k=20&c=bDwmwYT5guRtyTqL9TbG3VqY7y7OBVuw11wyBgKaW4Q=',
  },
  {
    nome: 'João',
    sobrenome: 'Silva',
    email: 'joao.silva@example.com',
    idade: 40,
    foto: 'https://media.istockphoto.com/id/1262964463/pt/foto/i-was-made-to-make-things-happen.jpg?s=1024x1024&w=is&k=20&c=dVfOEcU04lajqiwkWQATJvXxwAsXiXQZvpnftjXRY8c=',
  },
  {
    nome: 'Mariana',
    sobrenome: 'Ferreira',
    email: 'mariana.ferreira@example.com',
    idade: 30,
    foto: 'https://media.istockphoto.com/id/636817288/pt/foto/portrait-of-cute-happy-woman-with-beaming-smile.jpg?s=1024x1024&w=is&k=20&c=BmwK-YGya3MeOb2JQCUIR04SwC0yiKt9reD6l0CorXQ=',
  },
  {
    nome: 'Pedro',
    sobrenome: 'Oliveira',
    email: 'pedro.oliveira@example.com',
    idade: 27,
    foto: 'https://media.istockphoto.com/id/1503232125/pt/foto/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=1024x1024&w=is&k=20&c=hQxn1L1FcMmq0e-N31Z-VRyUHsvgt6-PFXzbFOc08pc=',
  },
  {
    nome: 'Isabela',
    sobrenome: 'Santos',
    email: 'isabela.santos@example.com',
    idade: 24,
    foto: 'https://media.istockphoto.com/id/184868659/pt/foto/rir-mulher-jovem-feliz.jpg?s=1024x1024&w=is&k=20&c=HmiEVDfixkKyCOO9vsn_L1U6aPsQISRIgpFS_oQ75-s=',
  },
  {
    nome: 'Ricardo',
    sobrenome: 'Lima',
    email: 'ricardo.lima@example.com',
    idade: 33,
    foto: 'https://media.istockphoto.com/id/183891070/pt/foto/bonito-homem-sorridente-neg%C3%B3cios.jpg?s=1024x1024&w=is&k=20&c=ggMtgTJ92C5YaR-3eFQezByNGS00PGghSi6EZb5ahxU=',
  },
  {
    nome: 'Fernanda',
    sobrenome: 'Gomes',
    email: 'fernanda.gomes@example.com',
    idade: 29,
    foto: 'https://media.istockphoto.com/id/800472930/pt/foto/pretty-hipster-with-arms-crossed-smiling-at-camera.jpg?s=1024x1024&w=is&k=20&c=7IaOqVFQpX5IEYdrh_YpQuxHnHJxJkQBpjUMyj1qCm0=',
  },
  {
    nome: 'Lucas',
    sobrenome: 'Ribeiro',
    email: 'lucas.ribeiro@example.com',
    idade: 26,
    foto: 'https://media.istockphoto.com/id/1643991653/pt/foto/portrait-of-businessman-pride-and-smile-in-modern-office-with-confidence-opportunity-and.jpg?s=1024x1024&w=is&k=20&c=D9WKAQT6x5Hh9ClFlQgMjXxHIepKSehfxvHdqzlBVGw=',
  },

];

const produtosData = [
  {
    nome: 'Caneta',
    descricao: 'Caneta esferográfica azul',
    preco: 2.50,
    data_atualizado: new Date(),
  },
  {
    nome: 'Caderno',
    descricao: 'Caderno universitário 100 folhas',
    preco: 15.00,
    data_atualizado: new Date(),
  },
  {
    nome: 'Lápis',
    descricao: 'Lápis de grafite HB',
    preco: 1.20,
    data_atualizado: new Date(),
  },
  {
    nome: 'Borracha',
    descricao: 'Borracha branca macia',
    preco: 0.80,
    data_atualizado: new Date(),
  },
  {
    nome: 'Apontador',
    descricao: 'Apontador com depósito',
    preco: 3.00,
    data_atualizado: new Date(),
  },
  {
    nome: 'Mochila',
    descricao: 'Mochila escolar resistente',
    preco: 75.00,
    data_atualizado: new Date(),
  },
  {
    nome: 'Estojo',
    descricao: 'Estojo escolar com 3 divisões',
    preco: 12.00,
    data_atualizado: new Date(),
  },
  {
    nome: 'Agenda',
    descricao: 'Agenda diária 2024',
    preco: 25.00,
    data_atualizado: new Date(),
  },
  {
    nome: 'Marcador',
    descricao: 'Marcador de texto amarelo',
    preco: 4.50,
    data_atualizado: new Date(),
  },
  {
    nome: 'Régua',
    descricao: 'Régua de 30 cm transparente',
    preco: 2.00,
    data_atualizado: new Date(),
  },
];

const seedDatabase = async () => {
  try {
    // Conecta ao banco de dados
    await sequelize.sync({ force: true }); // Isso recriará as tabelas

    // Inserir dados de clientes
    await Cliente.bulkCreate(clientesData);
    console.log('Clientes inseridos com sucesso.');

    // Inserir dados de produtos
    await Produto.bulkCreate(produtosData);
    console.log('Produtos inseridos com sucesso.');

    // Fechar a conexão com o banco de dados
    await sequelize.close();
    console.log('Conexão com o banco de dados encerrada.');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  }
};

seedDatabase();