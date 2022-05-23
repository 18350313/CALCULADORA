
import React, { useState } from "react";

function App() {
  //Use State que maneja datos de input y variable resultado
  const [inputState, setinputState] = useState({
    operacion: "",
    resultado: "",
  });

  //Se obtiene todos los datos del almacenamiento local referente al item historial
  const inicioEstado = JSON.parse(localStorage.getItem("historial")) || [];
  const [historial, setHistorial] = useState(inicioEstado); // Se inicializa el state con la variable anterior

  const handleInputChange = (event) => {
    setinputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  //Agrega al state el número presionado del botón
  const handleNumeroClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.value,
    });
  };

  //Agrega el valor del operador presionado
  const handleOperadorClick = (event) => {
    setinputState({
      ...inputState,
      operacion: inputState.operacion + event.target.textContent,
    });
  };

  //Procesa la expresión y obtiene el resultado
  const handleResultado = () => {
    var datos = inputState.operacion; //Se almacena la expresión del input en una variable
    var res = eval(datos); //Ejecuta la expresión almacenada en la variable

    //Agrega al almacenmiento local el JSON de la operación realizada
    localStorage.setItem(
      "historial",
      JSON.stringify([
        ...historial,
        {
          operacion: datos,
          resultado: res,
        },
      ])
    );
    //Actualiza el state que obtiene el historial de operaciones
    setHistorial([
      ...historial,
      {
        operacion: datos,
        resultado: res,
      },
    ]);

    //Actualiza el state del input para mostrar el resultado en pantalla
    setinputState({
      ...inputState,
      operacion: res,
      resultado: "",
    });
  };

  //Reinicia los estados del input
  const handleClickLimpiar = () => {
    setinputState({
      ...inputState,
      operacion: "",
      resultado: "",
    });
  };

  return (
    <div className="row" style={{ width: 950 }}>
      <div className="col">
        <div className="row card m-4 p-3 shadow" style={{ width: 400 }}>
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <span className="row">
                <h3>CALC SC3</h3>

                <div className="row">
                  <div className="col">
                    <span className="row">
                      <input
                        style={{ fontSize: "2rem", textAlign: "right" }}
                        id="operacion"
                        name="operacion"
                        type="text"
                        onChange={handleInputChange}
                        value={inputState.operacion}
                      ></input>
                    </span>
                    <br></br>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleClickLimpiar}
                      >
                        Limpiar
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button type="button" className="btn btn-danger">
                            C
                          </button>
                        </span>
                      </div>

                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleOperadorClick}
                          >
                            /
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={7}
                        onClick={handleNumeroClick}
                      >
                        7
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={8}
                        onClick={handleNumeroClick}
                      >
                        8
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={9}
                        onClick={handleNumeroClick}
                      >
                        9
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleOperadorClick}
                      >
                        *
                      </button>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={4}
                        onClick={handleNumeroClick}
                      >
                        4
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={5}
                        onClick={handleNumeroClick}
                      >
                        5
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={6}
                        onClick={handleNumeroClick}
                      >
                        6
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleOperadorClick}
                      >
                        -
                      </button>
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={1}
                        onClick={handleNumeroClick}
                      >
                        1
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={2}
                        onClick={handleNumeroClick}
                      >
                        2
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-primary"
                        value={3}
                        onClick={handleNumeroClick}
                      >
                        3
                      </button>
                    </span>
                  </div>

                  <div className="col">
                    <span className="row mt-3 ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleOperadorClick}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <div className="row">
                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button
                            type="button"
                            className="btn btn-primary"
                            value={0}
                            onClick={handleNumeroClick}
                          >
                            0
                          </button>
                        </span>
                      </div>

                      <div className="col">
                        <span className="row ms-0 me-0">
                          <button
                            type="button"
                            className="btn btn-primary"
                            value={"."}
                            onClick={handleNumeroClick}
                          >
                            .
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <span className="row ms-0 me-0">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleResultado}
                      >
                        =
                      </button>
                    </span>
                  </div>
                </div>
              </span>

              <br></br>
            </div>
          </div>
        </div>
      </div>

      {/*Aqí empieza el div del historial*/}

      <div className="col" style={{ width: 400 }}>
        <span className="row">
          <div
            className="row card m-4 p-3 shadow"
            style={{ width: 400, left: 0 }}
          >
            <h3>Historial de operaciones</h3>

            {historial.length === 0 ? (
              "Vacío"
            ) : (
              <ul>
                {historial.map((item, index) => {
                  return (
                    <li className="fs-5">
                      {item.operacion} = {item.resultado} &nbsp;
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </span>
      </div>
    </div>
  );
}

export default App;
