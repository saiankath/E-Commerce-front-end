import {API} from "../../backend"


// Category calls
export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}

// Get all Categories
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}    

// Product calls    
export const createProduct = (userId, token, Product) => {
    return fetch(`${API}/Product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: Product
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}    

// get all products
export const getProducts = () => {
    return fetch(`${API}/products`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}   

//delete a product
export const deleteProduct = (userId, token, productId) => {
    return fetch(`${API}/Product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}  


//get a product
export const getProduct = (productId) => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
} 

//update a product
export const updateProduct = (productId, userId, token, Product) => {
    return fetch(`${API}/Product/${productId}/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: Product
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}    