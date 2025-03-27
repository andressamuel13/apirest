import { pool } from "../db.js";

export const getEmployes = (req, res) => {
  res.send("obteniendo empleados");
};

export const createEmploye = async (req, res) => {
  const { name, salary } = req.body;

  if (typeof name != "string" || name.trim() === "") {
    return res.status(400).send({
      message: "el nombre debe de ser una cadena y no puede estar vacio",
    });
  }
  if (typeof salary != "number" || salary < 0) {
    return res.status(400).send({
      message: "el salario debe de ser un numero y no puede ser negativo",
    });
  }

  try {
    const result = await pool.query(
      "insert into employee (name,salary) values(?,?)",
      [name, salary]
    );
    res.send({
      id: result.insertId,
      name,
      salary,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "error al crear empleado",
    });
  }
};
