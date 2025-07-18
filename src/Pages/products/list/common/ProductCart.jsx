import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'

const ProductCart = () => {

    const [product, setProduct] = useState([]);

    const url = "https://dummyjson.com/products";

    useEffect(() => {

        axios.get(url).then((response) => {
            console.log(response);

            setProduct(response.data.products);

        }).catch((error) => {
            console.log(error);
        })

    })

    return (
        <div className="container my-4">
            <div className="row justify-content-center">

                {
                    product.map((item, index) => (

                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={item.thumbnail}
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text text-muted">{item.description}</p>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item"><strong>Category:</strong> {item.category}</li>
                                        {item.brand && (<li className="list-group-item"><strong>Brand:</strong> {item.brand}</li>)}
                                        <li className="list-group-item"><strong>Price:</strong> ${item.price}</li>
                                        <li className="list-group-item"><strong>Stock:</strong> {item.stock}</li>
                                        <li className="list-group-item"><strong>Rating:</strong> {item.rating}</li>
                                    </ul>
                                    <a href="#" className="btn btn-primary mt-auto">Buy Now</a>
                                </div>
                            </div>
                        </div>

                    ))

                }

            </div>
        </div>
    );
}

export default ProductCart
