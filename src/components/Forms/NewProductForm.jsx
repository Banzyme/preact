import React, {Component} from "react";

class NewProductForm extends Component{

  state = {
    id: 0,
    owner: '',
    title: '',
    price: '',
    hidden: false,
    location: 'Jhb, SA',
    impressions: 0,
    likes:0,
    imgPath: '../../assets/img/iphone.jpg'
  }

  saveNewProduct = (e) =>{
    e.preventDefault();
    // Send data back to parent to update app-wide state
    const formData = this.state;
    formData.id = Math.floor((Math.random() * 100000) + 1);
    this.props.onAddProduct(this.state);

    // reset form
    this.resetForm();
  }

  resetForm(){
    this.setState({
      owner: '',
      title: '',
      price: ''
    })
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    const form  = this.state;

    return(
      <div className="form-container">
      <form className="newProductForm" onSubmit={this.saveNewProduct}>
        <div className="row">
          <div className="col-lg-12">
            <input className="form-control" onChange={this.handleInputChange} name="owner" value={form.owner} placeholder="Your name"/>
          </div>
        </div>
        
      <div className="row">
          <div className="col-lg-12">
            <input className="form-control" onChange={this.handleInputChange} name="title" value={form.title} placeholder="What are you selling"/>
          </div>
        </div>
        
      <div className="row">
          <div className="col-lg-12">
            <input type="number" onChange={this.handleInputChange} className="form-control" name="price" value={form.price} placeholder="Price"/>
          </div>
        </div>
        
        <button className="btn btn-outline-secondary">Submit</button>
      </form>
      </div>
      )
  }
}

export default NewProductForm;