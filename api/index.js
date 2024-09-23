import express from 'express'
import morgan from 'morgan';
const app = express();

// Middleware para parsear JSON
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.get('/', (req, res) => {
  res.json({ message: 'Hola desde tu API en Vercel!' });
});

app.get('/saludo', (req, res) => {
  res.json({ message: '¡Hola! Bienvenido a tu miniproyecto!' });
});

app.get('/despedida', (req, res) => {
    res.json({ message: '¡Adios! Gracias por usar el miniproyecto!' });
});

app.get('/pregunta', (req, res) => {
    res.json({ message: 'Hola ¿como estas? ¿que tal esta tu dia?' });
});

/*
// Iniciar servidor solo si no está en entorno Vercel (usado para pruebas locales)
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
  });
}*/

export default app;
