
# 🏗️ Microsserviços - Users & Orders API

Este projeto é um sistema baseado em **microsserviços**, composto por dois serviços principais:

- ✅ **Users Service** – Gerenciamento de usuários.
- ✅ **Orders Service** – Criação e listagem de pedidos, integrando com o Users Service.

Ambos os serviços são desenvolvidos em **Node.js**, utilizando **Express**, **Sequelize**, **PostgreSQL**, gerenciados por **PM2** e containerizados via **Docker**.

---

## 🔥 Tecnologias e Ferramentas

- 🟩 Node.js
- ⚙️ Express
- 🐘 PostgreSQL
- 🔗 Sequelize (ORM)
- 🐳 Docker & Docker Compose
- 🚦 PM2 (Gerenciador de Processos Node)
- 📦 Axios (Comunicação HTTP entre microsserviços)

---

## 🗺️ Arquitetura

users-service
 ├── Banco PostgreSQL próprio (porta 5433)
 ├── API REST na porta 3000
 └── Gerenciado com PM2

orders-service
 ├── Banco PostgreSQL próprio (porta 5434)
 ├── API REST na porta 3002
 └── Gerenciado com PM2

---

## 🔧 Como rodar o projeto

### ⚙️ Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

### 📥 Clone o repositório

\`\`\`bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
\`\`\`

---

### 🛠️ Configurar variáveis de ambiente

Crie um arquivo \`.env\` na raiz do projeto com o seguinte conteúdo:

\`\`\`env
# Users DB
POSTGRES_USER_USERS=user
POSTGRES_PASSWORD_USERS=password
POSTGRES_DB_USERS=users_service_db
POSTGRES_PORT_USERS=5433

# Orders DB
POSTGRES_USER_ORDERS=user
POSTGRES_PASSWORD_ORDERS=password
POSTGRES_DB_ORDERS=orders_service_db
POSTGRES_PORT_ORDERS=5434

# Users Service
USERS_SERVICE_PORT=3000

# Orders Service
ORDERS_SERVICE_PORT=3002
\`\`\`

---

### 🚀 Subir a aplicação

\`\`\`bash
docker-compose up --build
\`\`\`

---

### 🔍 Verificar os containers

\`\`\`bash
docker ps
\`\`\`

✔️ Você verá os containers:

- \`users-service\`
- \`orders-service\`
- \`users-db\`
- \`orders-db\`

---

## 🗄️ Endpoints disponíveis

### ✅ **Users Service (porta 3000)**

| Método | Endpoint | Descrição               |
| ------ | -------- | ----------------------- |
| GET    | /users   | Listar todos os usuários|
| POST   | /users   | Criar um novo usuário   |

---

### ✅ **Orders Service (porta 3002)**

| Método | Endpoint        | Descrição                                   |
| ------ | ---------------- | -------------------------------------------- |
| GET    | /orders          | Listar todos os pedidos                     |
| POST   | /create-order    | Criar um pedido (valida usuário no Users)   |

---

## 🔗 Comunicação entre microsserviços

- O **Orders Service** faz requisições HTTP para o **Users Service** utilizando **Axios** para verificar se o usuário existe antes de criar um pedido.

---

## 🗃️ Banco de Dados

- Cada serviço possui seu próprio banco PostgreSQL.
- As migrations são gerenciadas com Sequelize.
- Cada container de banco roda em portas diferentes (\`5433\` e \`5434\`).

---

## ♻️ Gerenciamento de Processos com PM2

- O PM2 gerencia os processos Node.js dentro dos containers.
- Processos monitorados, com auto-restart e logs.
- Subida dos serviços diretamente com:

\`\`\`dockerfile
CMD ["pm2-runtime", "index.js"]
\`\`\`

---

## 🚀 Próximos passos (Futuro)

- [ ] Implementar autenticação (JWT)
- [ ] CRUD completo no Users e Orders
- [ ] Implementar API Gateway
- [ ] Implementar testes unitários e de integração
- [ ] Configurar CI/CD
- [ ] Deploy em ambiente cloud

---
