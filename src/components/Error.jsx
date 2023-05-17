/* eslint-disable react/prop-types */
const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="text-red-800 text-center p-3 uppercase font-bold mb-2">
        {mensaje}
      </p>
    </div>
  );
};

export default Error;
