import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddCandyForm = () => {

    const [candy,update] = useState(
        {
            userID: null,
            productName: "",
            productPrice: null,
            prodcutTypeId: null
        }
    )

    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const ticketToSendToApi = {
            userID: kandyUserObject.id,
            productName: candy.productName,
            productPrice: candy.productPrice,
            prodcutTypeId: candy.prodcutTypeId
        }

    return fetch("http://localhost:8088/products",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketToSendToApi)
    })
    .then(resp => resp.json())
    .then(
        () => {
            navigate("/products")
        }
    )

    }

    return(
        <form className="candyform">
            <h2>New Candy Form</h2>
            <fieldset>
                <div>
                    <label>Product Name    </label>
                    <input
                        type="text"
                        value={candy.productName}
                        onChange={
                            (event) => {
                                const copy = {...candy}
                                copy.productName = event.target.value
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Product Price   </label>
                    <input
                        type="number"
                        value={candy.productPrice}
                        onChange={
                            (event) => {
                                const copy = {...candy}
                                copy.productPrice = event.target.value
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Product Type (Number)   </label>
                    <input
                        type="number"
                        value={candy.prodcutTypeId}
                        onChange={
                            (event) => {
                                const copy = {...candy}
                                copy.prodcutTypeId = event.target.value
                                update(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <button 
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} />
            Submit
        </form>

    )

}