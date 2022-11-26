import * as React from "react";

import './index.scss'

export const NotFound = () => {
    return (
        <div className={"notfound"}>
            <div id={"notfound-content"}>
                <div className="container text-center">
                    <h1 className="text-center">Oops...</h1><br />
                    <h4>We couldn't find what you were looking for</h4>
                </div>
            </div>
        </div>
    )
}