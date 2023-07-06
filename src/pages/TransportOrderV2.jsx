import React from "react";

import "../styles/OrdenesTransportes.scss";

const TransportOrder = () => {
  return (
    <div>
      <div className="m-4">
        <h2>Orden de transporte</h2>
      </div>
      <div className="ot-section main-details mb-2">
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
                type="text"
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
                <input className="form-check-input" type="radio" name="tipoEntregaRadio" id="tipoEntregaRadio1" />
                <label className="form-check-label" htmlFor="tipoEntregaRadio1">
                  Oficina
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="tipoEntregaRadio" id="tipoEntregaRadio2" defaultChecked />
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
      <div className="ot-section mb-2">
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
            <div className="col-3">
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
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Detalle Entrega
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Traking y Estados
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
            <div></div>
            <div></div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex={0}
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex={0}
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="nav-disabled"
            role="tabpanel"
            aria-labelledby="nav-disabled-tab"
            tabIndex={0}
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportOrder;
