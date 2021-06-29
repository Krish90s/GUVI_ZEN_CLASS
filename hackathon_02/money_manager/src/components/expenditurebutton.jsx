import React from "react";

const ExpenditureButton = () => {
  return (
    <React.Fragment>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#expendituremodal"
      >
        Add Expenditure
      </button>
      <div
        className="modal fade"
        id="expendituremodal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="expendituremodallabel"
        aria-hidden="true"
      >
        <div className="modal-dialog-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal=title" id="expendituremodallabel">
                Add Expenditure
              </h5>
            </div>
            <div className="modal-boday">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="income" className="form-label">
                    Income
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="income"
                  ></input>
                </div>
                <div className="col-md-6">
                  <label htmlFor="expenditure" className="form-label">
                    Expenditure
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expenditure"
                  ></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExpenditureButton;
