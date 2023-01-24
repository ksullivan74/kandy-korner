import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductsList = () => {
    const [products,setProducts] = useState([])
    const [priceyProducts, setPriceyProducts] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const navigate = useNavigate()    

    useEffect(
        () => {
            fetch("http://localhost:8088/products/?_expand=productType")
            .then(response => response.json())
            .then((productsArray) => {
                setProducts(productsArray)
            })
        },[]
    )

    useEffect(
        () => {
            const filteredProducts = products.filter(product => parseInt(product.productPrice) > 2)
            setPriceyProducts(filteredProducts)
        },[products]
    )

    return <>{
                kandyUserObject.isEmployee
                ?
                <>
                    <button onClick={() => {setProducts(priceyProducts)}} >Top Priced</button>
                    <button onClick={() => navigate("/products/employeeProductView")}>Products</button>
                    <button onClick={() => navigate("/products/addCandyForm")}>Add a Candy</button>
                </>
                :<>
                </>
    } 
        <h2>Candies!</h2>
        <ul>{
            products.map(
                (product) => {
                    return<>
                        <h3>{product.productName}</h3>
                        <li>${product.productPrice}</li>
                        <li>{product.productType.type}</li>
                    </>
                    
                }
            )
        }
        </ul>

    </>

}