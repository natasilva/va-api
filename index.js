const app = require("./config/app")

const port = process.env.PORT;

app.listen(port, () => {
  console.log("API rodando na porta: " + port);
});
