const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/ask', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4", // puedes cambiar a "gpt-3.5-turbo" si no tienes acceso a GPT-4
      messages: [
        {
          role: "system",
          content: "Actúa como un mentor masculino poderoso, sabio y directo llamado VALLE. Responde con autoridad y sin rodeos. Sé motivador y contundente, como si fueras un dios que forja hombres reales.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    const reply = completion.data.choices[0].message.content;
    res.json({ response: reply });

  } catch (error) {
    console.error('Error en la API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error al generar la respuesta' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor VALLE escuchando en el puerto ${PORT}`);
});
