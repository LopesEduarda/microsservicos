import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3002;

// Middlewares
app.use(cors());
app.use(express.json());

// Dados simulados (banco fake)
const orders = [];

// Função para verificar se o usuário existe
async function checkUserExists(userId) {
    try {
        const response = await axios.get(`http://users-service:3000/users`);
        const users = response.data;
        console.log('Usuários:', users);
        const user = users.find(user => user.id === userId);
        return user;
    } catch (error) {
        console.error('Erro ao verificar usuário:', error);
        return false;
    }
}

// Rotas
app.get('/orders', (req, res) => {
    res.json(orders);
});

app.post('/create-order', async (req, res) => {
    const { userId, product } = req.body;

    const user = await checkUserExists(userId);

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado!' });
    }

    const order = {
        id: orders.length + 1,
        userId,
        product,
        status: 'created'
    };

    orders.push(order);

    res.json({ message: 'Pedido criado com sucesso!', order });
});


// Inicializa servidor
app.listen(PORT, () => {
    console.log(`Orders Service rodando na porta ${PORT}`);
});
