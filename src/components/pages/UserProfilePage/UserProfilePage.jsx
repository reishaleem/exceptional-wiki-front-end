import React, {useState, useEffect} from "react";
import axios from 'axios'
import ProfilePage from '../../organisms/ProfilePage/ProfilePage'


export default () => {

    const [userData, setUserData] = useState()

    // need to call this just once when we load the page...?
    async function getUserProfilePage(userId) {
        console.log("ID", userId)
        let data = {}
        // axios.get("/profile")
        // .then(response => {
        //     console.log(response.data)

        //     console.log("Here")
        //     data = response.data
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        const resp = await axios.get("/profile")
        console.log(resp)
        setUserData(resp.data)
        
        return resp.data
    }

    //setUserData(getUserProfilePage(1))

    //const usData = getUserProfilePage(1)
    console.log(userData)
    return (
        <>
            <ProfilePage userData={userData} />
        </>
    );
};
