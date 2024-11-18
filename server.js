const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Lista de agendamentos (armazenada na memória)
let agendamentos = [];

// Rota de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à oficina!');
});

// Rota para agendar um serviço (POST)
app.post('/agendar', (req, res) => {
  const { cliente, data, servico } = req.body;

  // Validar os dados recebidos
  if (!cliente || !data || !servico) {
    return res.status(400).json({ message: 'Faltam informações no agendamento' });
  }

  const novoAgendamento = { cliente, data, servico };
  agendamentos.push(novoAgendamento);

  console.log('Novo agendamento:', novoAgendamento); // Log de depuração

  res.status(201).json(novoAgendamento);
});

// Rota para listar todos os agendamentos (GET)
app.get('/agendamentos', (req, res) => {
  res.json(agendamentos); // Retorna todos os agendamentos
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
const cors = require('cors');
app.use(cors());
