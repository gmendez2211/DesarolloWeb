import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Button";

//nterface para datos de ingrerso al formulario}
interface ICamposEntrada {
  sNombre: string;
  sApellido: string;
  nEdad: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICamposEntrada>();

  const onSubmit: SubmitHandler<ICamposEntrada> = (data) => console.log(data);

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Registro de Datos</h1>
      </div>
      <div className="mb-3 form-group col-sm-4">
        <label htmlFor="txtsNombre" className="form-label">
          Nombre:
        </label>
        <input
          //id="txtsNombre"
          type="text"
          className="form-control"
          {...register("sNombre", {
            required: true,
            minLength: 2,
            maxLength: 20,
          })} //Para llevar el control del campo con la propiedad resgister
        />
        {errors.sNombre?.type === "required" && (
          <span className="badge text-bg-info">
            {" "}
            Debe ingresar su nombre. Ej. Juan
          </span>
        )}
        {errors.sNombre?.type === "minLength" && (
          <span className="badge text-bg-info">
            {" "}
            El nombre de ser mayor a dos caracteres.
          </span>
        )}
      </div>

      <div className="mb-3 form-group col-sm-4">
        <label htmlFor="txtsApellido" className="form-label">
          Apellido:
        </label>
        <input
          //id="txtsApellido"
          type="text"
          className="form-control"
          {...register("sApellido", {
            required: {
              value: true,
              message: "El campo de apellido es requerido",
            },
            minLength: {
              value: 2,
              message: "El valor mínimo para apellido son dos carácteres",
            },
            maxLength: {
              value: 20,
              message: "El valor máximo para apellido son veinte carácteres",
            },
          })} //Para llevar el control del campo con la propiedad resgister
        />
        {errors.sApellido && (
          <span className="badge text-bg-info">
            {" "}
            Debe ingresar su apellido. Ej. García
          </span>
        )}
      </div>

      <div className="mb-3 form-group col-sm-4">
        <label htmlFor="txtnEdadx" className="form-label">
          Edad:
        </label>
        <input
          //id="txtnEdad"
          type="text"
          className="form-control"
          {...register("nEdad")} //Para llevar el control del campo con la propiedad resgister
        />
        {errors.nEdad && (
          <span className="badge text-bg-info">
            {" "}
            Debe ingresar su eddad. Ej. 20
          </span>
        )}
      </div>
      <Button texto="Guardar" />
    </form>
  );
}
