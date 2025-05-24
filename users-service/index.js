const express = require('express');
const cors = require('cors');
const { User } = require('./models');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/register', async (req, res) => {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.json({ message: 'Usuário cadastrado com sucesso!', user });
});

app.listen(PORT, () => {
    console.log(`Users Service rodando na porta ${PORT}`);
});
