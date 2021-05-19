const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    '¡Bienvenido a API REST FIBONACCI! <br/> <br/> Para consultar: <br/> "/fibonacci/{termino}" : Para consultar el término del fibonacci'
  );
});

app.get("/fibonacci/:termino", (req, res) => {
  // Obteniendo el término de fibonacci
  var termino = req.params.termino;
  // Parsear a entero
  termino = parseInt(termino);

  // función fibonacci dinámica
  function fnFibonacci(index, memory = [0, 1, 1]) {
    return index < 3
      ? memory[index]
      : fnFibonacci(index - 1, memory) + fnFibonacci(index - 2, memory);
  }

  try {
    if (termino === NaN) {
      return res.status(400).json({
        ok: false,
        error: `Ocurrio un error al traer el término.`,
      });
    }
    return res.status(200).json({
      ok: true,
      data: fnFibonacci(termino),
    });
  } catch (exception) {
    return res.status(500).json({
      ok: false,
      error: `${exception}`,
    });
  }
});

app.listen(port, () => {
  console.log(`API REST FIBONACCI está corriendo en http://localhost:${port}`);
});
