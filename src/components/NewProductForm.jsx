import React from "react";

const state = {
  owner: '',
  productName: '',
  price: ''
}

// const handleInputChange = (event) => {
//   this.setState({
//     event.target.name: event.target.value
//   });
// }

const NewProductForm = ({children}) => {
    return(
        <div className="form-container">
        <form className="newProductForm">
          <div className="row">
            <div className="col-lg-12">
              <input type="text" className="form-control" name="owner" value={state.owner} placeholder="Your name"/>
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