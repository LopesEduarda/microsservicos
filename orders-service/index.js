const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { Order } = require('./models');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

async function checkUserExists(userId) {
    try {
        const response = await axios.get(`http://users-service:3000/users`);
        const users = response.data;
        console.log('Users:::', users);
        const user = users.find(u => u.id === userId);
        return user;
    } catch (error) {
        console.error('Erro ao consultar Users Service:', error.message);
        return null;
    }
}

app.post('/create-order', async (req, res) => {
    const { userId, product } = req.body;

    const user = await checkUserExists(userId);
    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const order = await Order.create({
        userId,
        product,
        status: 'created'
    });

    res.json({ message: 'Pedido criado com sucesso!', order });
});

app.get('/orders', async (req, res) => {
    const orders = await Order.findAll();
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Orders Service rodando na porta ${PORT}`);
});
