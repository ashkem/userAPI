const yup = require("yup");

const schema = yup.object().shape({
  nombre: yup.string().required("Nombre requerido"),
  apellido: yup.string().required("Apellido requerido"),
  edad: yup.number().min(14, "Edad minima 14 años").required("Edad requerido"),
  email: yup.string().email("Email incorrecto").required("Email requerido"),
  telefono: yup.string().required("Telefono requerido"),
});

const validateData = (data) => schema.validate(data);

module.exports = {
  schema,
  validateData,
};
