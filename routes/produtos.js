import express from 'express';

const router = express.Router();
import {
  listarProdutos,
  obterProduto,
  adicionarProduto,
  atualizarProduto,
  removerProduto,
} from '../controllers/produtoController.js';

router.get('/', listarProdutos);
router.get('/:id', obterProduto);
router.post('/', adicionarProduto);
router.put('/:id', atualizarProduto);
router.delete('/:id', removerProduto);

export default router;
