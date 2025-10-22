// ============================
//  Dependências
// ============================
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usuarioRoutes from "./routes/usuarios.routes.js";

// ============================
//  Configuração do servidor
// ============================
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API da Livraria funcionando!");
});

app.use("/usuarios", usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
