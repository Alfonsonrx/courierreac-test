import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import "../styles/OrdenesTransportes.scss";

const columns = [
  { field: "col1", headerName: "IdDoc", flex: 1 },
  { field: "col2", headerName: "Documento", flex: 1 },
  { field: "col3", headerName: "Tipo_Doc", flex: 1 },
  { field: "col4", headerName: "Numero", flex: 1 },
  { field: "col5", headerName: "Monto", flex: 1 },
];

const TransportOrder = () => {
  return (
    <div>
      <div className="m-4">
        <h3>Orden de transporte</h3>
      </div>
      <div className="ot-section main-details mb-1">
        <div className="row mb-3">
          <div className="col-1">
            <label for="basic-url" className="form-label">
              N° Flete
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Fecha
            </label>
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Estado
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-1">
            <label for="basic-url" className="form-label">
              Factura
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Proforma
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
              <span className="input-group-text" id="basic-addon3">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
          <div className="col-4">
            <label for="basic-url" className="form-label">
              Observaciones
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-1">
            <label for="basic-url" className="form-label">
              Cta Clie
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-3">
            <label for="basic-url" className="form-label">
              Cliente
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
              <span className="input-group-text" id="basic-addon3">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Agencia
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Origen
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Comuna Destino
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Suc. Destino
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Remitente
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-3">
            <label for="basic-url" className="form-label">
              Nombre destinatario
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-2">
            <label for="basic-url" className="form-label">
              Rut destinatario
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              />
            </div>
          </div>
          <div className="col-5 row tipo-entrega">
            <label for="basic-url" className="form-label">
              Tipo de entrega
            </label>
            <div className="col-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoEntregaRadio"
                  id="tipoEntregaRadio1"
                />
                <label className="form-check-label" htmlFor="tipoEntregaRadio1">
                  Oficina
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoEntregaRadio"
                  id="tipoEntregaRadio2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="tipoEntregaRadio2">
                  Domicilio
                </label>
              </div>
            </div>
            <div className="col input-group">
              <div className="input-group-text">
                <label for="basic-url" className="mt-1 me-1 form-label">
                  Fono
                </label>
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  defaultValue
                  aria-label="Checkbox for following text input"
                />
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with checkbox"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ot-section mb-1">
        <div className="row mb-2">
          <div className="col-4 row forma-pago">
            <label for="basic-url" className="form-label">
              Tipo de entrega
            </label>
            <div className="col-4">
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formaPagoRadio"
                  id="formaPagoRadio1"
                />
                <label className="form-check-label" htmlFor="formaPagoRadio1">
                  Contado
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formaPagoRadio"
                  id="formaPagoRadio2"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="formaPagoRadio2">
                  A pagar
                </label>
              </div>
            </div>
            <div className="col-4">
              <label className="form-label">Tipo Doc.</label>
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value={1}>Cta. Cte.</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <label className="form-label">Numero</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>
          </div>
          <div className="col-3 mx-2">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="mx-2 form-label"
            >
              Direccion Destinatario
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="col-5 row otros">
            <label for="basic-url" className="form-label">
              Otros
            </label>
            <div className="col-4">
              <label className="form-label">Seguro</label>
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value={1}>Cta. Cte.</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <label className="form-label">Tipo Transporte</label>
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value={1}>Cta. Cte.</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <label className="form-label">Tipo Servicio</label>
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value={1}>Cta. Cte.</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ot-section tab-tables">
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Otras Garantias
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Detalle Orden
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex={0}
          >
            <div className="row mx-2 mt-2">
              <div className="row mb-2">
                <div className="col-2">
                  <label for="basic-url" className="form-label">
                    Documento
                  </label>
                  <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value={1}>Cta. Cte.</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-2">
                  <label for="basic-url" className="form-label">
                    Tipo
                  </label>
                  <div className="input-group mb-3">
                    <select className="form-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value={1}>Cta. Cte.</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
                <div className="col-2">
                  <label for="basic-url" className="form-label">
                    Numero
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <label for="basic-url" className="form-label">
                    Monto
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div style={{ minHeight: 10 + "em" }}>
                <DataGrid columns={columns} rows={[]} />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex={0}
          >
            <div className="row">
              <div className="col-9">
                <div className="row my-2">
                  <div className="col">
                    <label for="basic-url" className="form-label">
                      Bultos
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label for="basic-url" className="form-label">
                      Kg
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label for="basic-url" className="form-label">
                      Alto
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label for="basic-url" className="form-label">
                      Ancho
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label for="basic-url" className="form-label">
                      Largo
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col-1 sel-especie">
                    <label for="basic-url" className="form-label">
                      Especie
                    </label>
                    <div className="input-group mb-3">
                      <select className="form-select" id="inputGroupSelect02">
                        <option selected>Choose...</option>
                        <option value={1}>Caja</option>
                        <option value={2}>Carta</option>
                        <option value={3}>Sobre</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <label for="basic-url" className="form-label">
                      Dice Contener
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <label for="basic-url" className="form-label">
                      M<sup>2</sup>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <label for="basic-url" className="form-label">
                      K cobro
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <label for="basic-url" className="form-label">
                      Total $
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4"
                      />
                    </div>
                  </div>
                  <div className="col-1">
                    <button type="button" class="btn btn-primary p-3">
                      <i
                        class="bi bi-download"
                        style={{ fontSize: 1.3 + "em" }}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div style={{ minHeight: 11 + "em" }}>
                    <DataGrid columns={columns} rows={[]} />
                  </div>
                </div>
              </div>
              <div className="col m-3">
                <div className="mb-1 row">
                  <label htmlFor="inputPassword" className="col">
                    Sub Total
                  </label>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label htmlFor="inputPassword" className="col">
                    % Descuento
                  </label>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label htmlFor="inputPassword" className="col">
                    Otras Comunas
                  </label>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-1 row">
                  <label htmlFor="inputPassword" className="col">
                    Otros Cargos
                  </label>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-1">
                  <label htmlFor="otrosCargosTextArea" className="form-label">
                    Glosa Otros Cargos
                  </label>
                  <textarea
                    className="form-control"
                    id="otrosCargosTextArea"
                    rows={2}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
      <div className="ot-section opciones-btn">
        <div className="d-grid gap-2 d-flex justify-content-center mx-auto">
          <button className="btn btn-primary" type="button">
            Anular
          </button>
          <button className="btn btn-primary" type="button">
            Imprimir
          </button>
          <button className="btn btn-primary" type="button">
            Aceptar
          </button>
          <button className="btn btn-primary" type="button">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransportOrder;
