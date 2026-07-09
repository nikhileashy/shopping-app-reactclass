import React from 'react'
import NavBar from './NavBar'

const DeleteProduct = () => {
  return (
    <div>
        <NavBar/>
      <div classNameName="container" style={{padding:10,margin:50}}>
        <h1 style={{marginBottom:50}}>Delete Product</h1>
        <div className="row g-3 ">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <label for="" className="form-label">Product Code</label>
                        <input type="text" className="form-control"></input>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <label for="" className="form-label"></label>
                        <button className="btn btn-danger">Delete</button>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default DeleteProduct