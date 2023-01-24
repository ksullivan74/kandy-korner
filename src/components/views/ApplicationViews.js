import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../../locations/locations"
import { ProductsList } from "../../products/products"
import { EmployeeProductView } from "../../products/employeeProductView"
import { AddCandyForm } from "../../products/addCandyForm"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="locations" element={ <LocationsList /> } />
			<Route path="products" element={<ProductsList />} />
			<Route path="/products/employeeProductView" element={<EmployeeProductView />} />
			<Route path="/products/addCandyForm" element={<AddCandyForm/>} />
		</Routes>
	)

}
