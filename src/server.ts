import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
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
