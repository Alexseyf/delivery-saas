# SaaS Stripe Project

Este projeto é uma aplicação SaaS com integração Stripe, utilizando Next.js, Prisma e PostgreSQL.

## Estrutura do Projeto
- **Next.js** para frontend e backend
- **Prisma** para ORM e migrações
- **PostgreSQL** como banco de dados
- **Stripe** para pagamentos

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o banco de dados em `.env`:
   ```env
   DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_db
   ```
3. Execute as migrações:
   ```bash
   npx prisma migrate dev
   ```
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Padrão de Commits

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

### Exemplos:
- `feat: add Stripe integration`
- `fix(cart): fix total calculation`
- `docs: update README`
- `refactor(user): improve email validation`

**Tipos mais comuns:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, sem alteração de código
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Tarefas de manutenção

