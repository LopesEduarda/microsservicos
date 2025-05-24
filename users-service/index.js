import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Dados simulados (banco de dados)
const users = [
    { id: 1, name: 'Alice', email: '' }
];

// Rotas
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Users service is running on http://localhost:${PORT}`);
});