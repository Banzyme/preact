import React from "react";

const NewProductForm = ({children}) => {
    return(
        <div className="form-container">
        <form className="newProductForm">
          <div className="row">
            <div className="col-lg-12">
              <input type="text" className="form-control" placeholder="Your name"/>
            </div>
          </div>
          
        <div className="row">
            <div className="col-lg-12">
              <input type="text" className="form-control" placeholder="What are you selling"/>
            </div>
          </div>
          
        <div className="row">
            <div className="col-lg-12">
              <input type="text" className="form-control" placeholder="Price"/>
            </div>
          </div>
          
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
        </form>
        </div>
        )
}

export default NewProductForm;