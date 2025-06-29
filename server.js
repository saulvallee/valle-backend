require('dotenv').config();
const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    res.json({ response: completion.data.choices[0].message.content });
  } catch (error) {
    console.error('Error en el servidor:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
