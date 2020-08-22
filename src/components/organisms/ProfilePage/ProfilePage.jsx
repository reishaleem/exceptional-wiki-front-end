import React, { useState } from "react";
import axios from 'axios'
import { Button } from "react-bootstrap";


export default ({ userData }) => {
    
    console.log(userData)

    return (
        <>
            <h1>User profile</h1>
            <ul>
                <li>userData.id</li>
            </ul>
        </>
    );
};
