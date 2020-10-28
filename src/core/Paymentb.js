import React, { useState, useEffect }  from 'react'
import { loadCart, cartEmpty } from "./helper/cartHelper"
import DropIn from "braintree-web-drop-in-react"
import { isAuthenticated } from '../auth/helper';
import { getmeToken } from './helper/paymentbhelper';

const Paymentb = ({products, setReload = f => f, reload = undefined}) => {

    const [info, setInfo] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: "",
        instance: {}
    });

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {
        getmeToken(userId, token)
        .then(info => {
            console.log("info", info);
            if(info.error) {
                setInfo({...info, error: info.error})
            } else {
                const clientToken = info.clientToken;
                setInfo({clientToken})
            }
        });
    };

    useEffect(() => {
        getToken(userId, token)
    }, [])

    return (
        <div>
          <h3>test Bt</h3>
        </div>
    )
}

export default Paymentb;
