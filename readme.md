# NodeAuth Shield

NodeAuth Shield é um projeto de autenticação em Node.js que utiliza Fastify e JWT e BCRYPT para fornecer funcionalidades de registro, login e autenticação de usuários.

## Funcionalidades

- Registro de novos usuários com criptografia de senha utilizando bcrypt.
- Login de usuários com geração de tokens JWT.
- Proteção de rotas utilizando autenticação baseada em tokens JWT.

## Tecnologias Utilizadas

- Node.js com Fastify
- Banco de dados (MongoDB)
- Ferramentas para testes (Jest)
- Ferramentas de documentação (Thunder Client.)

## Como Usar

1. **Instalação:**
   - Clone este repositório: `git clone https://github.com/FThzin1/NodeAuthShield.git`
   - Instale as dependências: `yarn`

2. **Configuração do Banco de Dados:**
   - Configure seu banco de dados e insira as credenciais no arquivo `.env`.

3. **Execução:**
   - Inicie o servidor: `yarn dev`

4. **Endpoints:**
   - **POST `/login`**: Fazer login enviado email e senha.
   - **POST `/signup`**: Cadastrar um novo usuario com email e senha.

5. **Documentação da API:**
   - Documente os endpoints, payloads e respostas utilizando ferramentas como Thunder Client ou Postman.

## Contribuição

Sinta-se à vontade para contribuir com melhorias neste projeto! Se encontrou algum problema ou tem sugestões, abra uma issue ou envie um pull request.