import express from "express";
import employesRoutes from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use(indexRoutes);
app.use(employesRoutes);

app.listen(PORT, () => {
  console.log(`servidor escuchando en el puerto ${PORT}`);
});
