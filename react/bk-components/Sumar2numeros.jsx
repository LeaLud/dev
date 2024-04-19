import React, { useState } from 'react';
import '../css/Component.css';
import '../css/Sumar2numeros.css';

const Sumadora = () => {
  // Estado para almacenar los valores de los números
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  // Estado para almacenar el resultado de la suma
  const [resultado, setResultado] = useState(null);

  // Función para manejar cambios en el input del primer número
  const handleNumero1Change = (e) => {
    setNumero1(e.target.value);
  };

  // Función para manejar cambios en el input del segundo número
  const handleNumero2Change = (e) => {
    setNumero2(e.target.value);
  };

  // Función para realizar la suma
  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(resultadoSuma);
  };

  return (
    <div className="sumar2numeros">
        <div>
            {/* Input para el primer número */}
            <input type="number" value={numero1} onChange={handleNumero1Change} />
            {/* Input para el segundo número */}
            <input type="number" value={numero2} onChange={handleNumero2Change} />
        </div>


        {/* Botón para realizar la suma */}
        <button onClick={sumar}>Sumar</button>

        <div>
            {/* Mostrar el resultado */}
            {resultado !== null && <p>Resultado: {resultado}</p>}
        </div>
    </div>
  );
};

export default Sumadora;
