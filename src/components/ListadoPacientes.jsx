/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
      <p className="text-lg mt-4 text-center mb-8">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      {pacientes.map((paciente) => (
        <Paciente key={paciente.id} paciente={paciente} />
      ))}
    </div>
  );
}

export default ListadoPacientes;
