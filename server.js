const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Ruta principal que responde con lógica personalizada
app.post("/", (req, res) => {
  const { prompt } = req.body;

  // Simulación de respuesta (aquí se conecta la lógica real en el futuro)
  const respuesta = generarRespuesta(prompt);

  res.json({ response: respuesta });
});

// Puerto para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor VALLE escuchando en el puerto ${PORT}`);
});

function generarRespuesta(prompt) {
  // Aquí puedes usar lógica simple mientras se conecta la IA real
  const p = prompt.toLowerCase();

  if (p.includes("debil")) {
    return "LEVÁNTATE. LOS HOMBRES FUERTES NACEN EN LA OSCURIDAD.";
  } else if (p.includes("mujeres")) {
    return "DOMINA TU MENTE, Y LAS MUJERES TE SEGUIRÁN.";
  } else if (p.includes("poder")) {
    return "EL PODER NO SE PIDE. SE TOMA.";
  } else {
    return "PIENSA COMO UN DIOS. EJECUTA COMO UN GENERAL.";
  }
}
