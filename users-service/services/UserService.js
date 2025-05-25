const { User } = require('../models');

const UserService = {
    async createUser(data) {
        return User.create(data);
    },

    async getAllUsers() {
        return User.findAll();
    },

    async getUserById(id) {
        return User.findByPk(id);
    },

    async updateUser(id, data) {
        const user = await User.findByPk(id);
        if (!user) return null;
        await user.update(data);
        return user;
    },

    async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) return false;
        await user.destroy();
        return true;
    }
};

module.exports = UserService;
