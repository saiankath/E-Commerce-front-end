import React, { useState, useEffect} from 'react';
import { isAuthenticated } from '../auth/helper';
import { cartEmpty, loadCart } from "./helper/cartHelper"
import { Link } from "react-router-dom"
import StripeCheckoutButton from "react-stripe-checkout"
import { API } from "../backend"
import { createOrder } from "./helper/orderHelper"

const StripeCheckout = ({
    products, setReload = f => f, reload = undefined
}) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""
    })

    const token = isAuthenticated() && isAuthenticated().token
    const userId = isAuthenticated() && isAuthenticated().user.id

    const getFinalAmount = () => {
        let amount = 0;
        products.map(p => {
            amount = amount + p.price;
        });
       return amount;
    }
    const makePayment = token => {
        const body = {
            token,
            products
        };
        const headers = {
            "Content-Type": "application/json"
        };
        return fetch(`${API}/stripepayment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(response);
            const { status } = response;
            console.log("STATUS", status);
        }).catch(error => console.log(error))
    };

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <StripeCheckoutButton
            stripeKey="pk_test_51HIRL1FcOzVmULt8Jps5F59krpuvdiMLAfcbsZOTX8HuG2XzHiqcMOUuZqOA58xyw4KD1vHHVg09i8Qa6xzqVRSh00ltNYyRlx"
            token={makePayment}
            amount={getFinalAmount() * 100}
            name="Buy T shirts"
            shippingAddress
            billingAddress>
            <button className="btn btn-success">Pay with Stripe</button>
            </StripeCheckoutButton>
        ) : (
            <Link to="/signin">
                <button className="btn btn-warning">signin</button>
            </Link>
        )
    }

    return (
        <div>
            <h3 className="text-white">Stripe checkout {getFinalAmount()}</h3>
            {showStripeButton()}
        </div>
    )
}

export default StripeCheckout;
