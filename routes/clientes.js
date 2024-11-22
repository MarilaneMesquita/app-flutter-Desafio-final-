import express from 'express';

const router = express.Router();
import {
  listarClientes,
  obterCliente,
  adicionarCliente,
  atualizarCliente,
  removerCliente,
} from '../controllers/clienteController.js';

router.get('/', listarClientes);
router.get('/:id', obterCliente);
router.post('/', adicionarCliente);
router.put('/:id', atualizarCliente);
router.delete('/:id', removerCliente);

export default router;
