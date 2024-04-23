const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001; // Puedes usar cualquier puerto que desees

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurar nodemailer
const transporter = nodemailer.createTransport({
  service: 'hotmail', // Configura el servicio de correo que deseas utilizar
  auth: {
    user: 'tu_correo@gmail.com', // Tu dirección de correo electrónico
    pass: 'tu_contraseña' // Tu contraseña de correo electrónico
  }
});

// Ruta para manejar el envío del formulario
app.post('/enviar-correo', (req, res) => {
  const { name, lastName, company, email } = req.body;

  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'paulaarias301@hotmail.com', // El correo electrónico al que deseas enviar el formulario
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${name}\nApellido: ${lastName}\nEmpresa: ${company}\nEmail: ${email}`
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Hubo un error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado: ' + info.response);
      res.status(200).send('Correo electrónico enviado correctamente');
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
