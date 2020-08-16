import React from 'react'
import Styles from "../styles.css"
import {API} from "../backend"
import Base from './Base';

function Home() {
    console.log("API IS", API);
    return (
        <Base title="Home page" description="Welcomw to the T-shirt store">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">Test</button>
                </div>
            </div>
        </Base>
    )
}

export default Home
