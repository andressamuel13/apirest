import { pool } from "../db.js";

export const getEmployes = async (req, res) => {
  const obtener = await pool.query("select * from employee");
  res.json(obtener[0]);
};

export const getEmployeId = async (req, res) => {
  const [id] = await pool.query("select * from employee where id = ?", [
    req.params.id,
  ]);

  if (id.length <= 0)
    return res.status(404).send({ message: "el empleado no existe" });

  res.json(id[0]);
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

export const deleteEmploye = async (req, res) => {
  const [eliminar] = await pool.query("delete from employee where id = ?", [
    req.params.id,
  ]);

  if (eliminar.affectedRows <= 0) {
    return res.status(404).json({
      message: "el empleado no existe",
    });
  }

  res.sendStatus(204);
};

export const actualizarEmpleado = async (req, res) => {
  const { id, name, salary } = req.body;

  const [result] = await pool.query(
    "update employee set name = ?, salary = ? where id = ?",
    [name, salary, id]
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: "el empleado no existe",
    });
  }

  res.json("recibido");
};
