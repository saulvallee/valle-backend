const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba GET
app.get('/', (req, res) => {
  res.send('Servidor VALLE activo y escuchando');
});

// Ruta POST que responde a preguntas
app.post('/', (req, res) => {
  const { prompt } = req.body;

  // Respuesta dummy (puedes cambiar esto luego por IA real)
  const respuesta = `VALLE responde: "${prompt.toUpperCase()}"`;

  res.json({ response: respuesta });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor VALLE escuchando en el puerto ${PORT}`);
});
