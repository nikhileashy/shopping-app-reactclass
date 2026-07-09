import React from 'react'
import NavBar from './NavBar'

const AddProduct = () => {
  return (
    <div>
        <NavBar/>
      <div classNameName="container" style={{padding:10,margin:50}}>
        <h1 style={{marginBottom:50}}>Add Product</h1>
        <div className="row g-3 ">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Product Code</label>
                        <input type="text" className="form-control"></input>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Product Name</label>
                        <input type="text" className="form-control"></input>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Brand</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Category</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Price</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Discount (%)</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Stock Quantity</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Description</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Product Image URL</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label for="" className="form-label">Rating</label>
                        <input type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <label for="" className="form-label"></label>
                        <button className="btn btn-primary">Submit</button>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddProduct