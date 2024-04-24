// Importando o framework Express
import express from 'express';

// Importando o mongoose para interagir com o MongoDB
import mongoose from 'mongoose';

// Importando as rotas definidas no arquivo rotas.js
import routes from './routes/rotas';

// Criando uma instância do Express
const app = express();

// Definindo a porta em que o servidor irá escutar
const PORT = 3000;

// Middleware para fazer o parse do corpo das requisições para JSON
app.use(express.json());

// Usando as rotas definidas no arquivo rotas.js
app.use(routes);

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/', {
    // useNewUrlParser: true, // Remova esta linha
    // useUnifiedTopology: true,
}).then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso');
}).catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});

//npx ts-node ./src/server.ts <- pra iniciar o server
