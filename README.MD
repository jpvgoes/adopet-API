# Adopet API – TypeScript & Node.js

Uma API RESTful para gerenciar dados de adoção de pets, construída com TypeScript, Node.js, Express e TypeORM. O projeto segue uma arquitetura modular, com entidades, controllers, repositórios e rotas para pets e adotantes.

---

## 🚀 Features

- Arquitetura modular com controllers, repositórios, entidades e rotas
- TypeScript para segurança de tipos
- Enum e tipos para modelagem de domínio
- Endpoints para gerenciamento de pets e adotantes
- Integração com banco SQLite via TypeORM
- Pronto para extensão e produção

---

## 🛠 Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **TypeORM**
- **SQLite**

---

## 📦 Estrutura do Projeto

```
API-TypeScript/
├── src/
│   ├── app.ts                # Ponto de entrada da aplicação
│   ├── config/
│   │   └── dataSource.ts     # Configuração do TypeORM
│   ├── controller/
│   │   ├── PetController.ts      # Handlers de pets
│   │   └── AdotanteController.ts # Handlers de adotantes
│   ├── entities/
│   │   ├── PetEntity.ts          # Entidade Pet
│   │   └── AdotanteEntity.ts     # Entidade Adotante
│   ├── repositories/
│   │   ├── PetRepository.ts      # Repositório Pet
│   │   └── AdotanteRepository.ts # Repositório Adotante
│   ├── interfaces/
│   │   ├── InterfacePetRepository.ts      # Interface Pet
│   │   └── InterfaceAdotanteRepository.ts # Interface Adotante
│   ├── routes/
│   │   ├── index.ts          # Router principal
│   │   ├── petRouter.ts      # Rotas de pets
│   │   └── adotanteRouter.ts # Rotas de adotantes
│   └── types/
│       ├── EnumEspecie.ts    # Enum de espécies
│       ├── TipoPet.ts        # Tipo Pet
│       └── TipoAdotante.ts   # Tipo Adotante
├── server.ts                 # Inicialização do servidor
├── package.json              # Dependências e scripts
├── tsconfig.json             # Configuração TypeScript
└── README.md                 # Documentação
```

---

## 🏁 Como rodar o projeto

1. Clone o repositório:

```bash
git clone <repository-url>
cd API-TypeScript
```

2. Instale as dependências:

```bash
npm install
```

3. O banco SQLite será criado automaticamente em `src/config/database.sqlite` ao rodar a aplicação.

4. Inicie o servidor de desenvolvimento:

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.

---

## 📚 Endpoints principais

### Pets

- `GET /pets` — Lista todos os pets
- `POST /pets` — Cria um novo pet
- `PUT /pets/:id` — Atualiza um pet
- `DELETE /pets/:id` — Remove um pet

### Adotantes

- `POST /adotantes` — Cria um novo adotante

> Veja exemplos de uso no arquivo `Adopet.postman_collection.json`.

---

## 📄 License

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para detalhes.
