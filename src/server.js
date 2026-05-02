const app = require('./app');

const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📘 Swagger UI at http://localhost:${PORT}/api-docs`);
  });
