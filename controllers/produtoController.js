import Produto from '../models/produto.js';

// Listar todos os produtos
export const listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um produto específico
export const obterProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Adicionar um novo produto
export const adicionarProduto = async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar um produto existente
export const atualizarProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.update(req.body);
      res.json(produto);
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remover um produto
export const removerProduto = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id);
    if (produto) {
      await produto.destroy();
      res.json({ message: 'Produto removido com sucesso' });
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
