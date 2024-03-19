const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require("../controllers/transactions-ctrl");

// explicação do código
// O arquivo transactions.js é um módulo de roteamento que lida com as rotas relacionadas a transações.
// O módulo express é importado e um objeto de roteador é criado.
// As funções getTransactions, addTransactions e deleteTransactions do transactions-ctrl.js são importadas.
// A rota GET / é associada à função getTransactions.
// A rota POST / é associada à função addTransactions.
// A rota DELETE /:id é associada à função deleteTransactions.
// O objeto de roteador é exportado.

router.route("/").get(getTransactions).post(addTransactions);

router.route("/:id").delete(deleteTransactions);
module.exports = router;
