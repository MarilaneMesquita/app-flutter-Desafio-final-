import Cliente from '../models/cliente.js';

// Listar todos os clientes
export const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obter um cliente específico
export const obterCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Adicionar um novo cliente
export const adicionarCliente = async (req, res) => {
  try {
    const novoCliente = await Cliente.create(req.body);
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Atualizar um cliente existente
export const atualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.update(req.body);
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remover um cliente
export const removerCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.destroy();
      res.json({ message: 'Cliente removido com sucesso' });
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
