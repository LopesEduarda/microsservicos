# 🏗️ Microsserviços - Users & Orders API

Este projeto é um sistema baseado em **microsserviços**, composto por dois serviços principais:

- ✅ **Users Service** - Gerenciamento de usuários.
- ✅ **Orders Service** - Criação e listagem de pedidos, integrando com o Users Service.

Ambos os serviços são desenvolvidos em **Node.js**, utilizando **Express**, **Sequelize**, **PostgreSQL** e gerenciados por **PM2** dentro de containers Docker.

---

## 🔥 Tecnologias e Ferramentas

- 🟩 Node.js
- ⚙️ Express
- 🐘 PostgreSQL
- 🔗 Sequelize (ORM)
- 🐳 Docker e Docker Compose
- 🚦 PM2 (Gerenciador de Processos Node)
- 📦 Axios (Comunicação HTTP entre microsserviços)

---

## 🗺️ Arquitetura

- 📦 users-service
  - CRUD de usuários
  - Banco de dados PostgreSQL separado
  - Exposto na porta **3000**
  
- 📦 orders-service
  - Criação e listagem de pedidos
  - Faz requisição para o Users Service para validar usuários
  - Banco de dados PostgreSQL separado
  - Exposto na porta **3002**

---

## 🔧 Como rodar o projeto

### ⚙️ Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

### 📥 Clone o repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
