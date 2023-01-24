import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export const EmployeeProductView = () => {
    const [products,setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
            .then(response => response.json())
            .then((productsArray) => {
                setProducts(productsArray)
            })
        },[]
    )

    return <>
        <h2>Products List</h2>
            <ul>{
             products.map(
                (product) => {
                    return<>
                        <h3>{product.productName}</h3>
                        <li>${product.productPrice}</li>
                        <li>product type goes here</li>

                    </>
                }
             )   
            }
            </ul>
    </>

}