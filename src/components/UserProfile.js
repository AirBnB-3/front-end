import React, {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom'

import {FormContainer, Button} from '../style/style'
// import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';


export default function UserProfile(props){
    
    const { userInfo, setUserInfo} = props
    // console.log(props)
    const history = useHistory()

    // useEffect(()=>{
        // axios
        //     .get('https://seanmx96-airbnb-optimal-price.herokuapp.com/users/getuserinfo')
        //     .then(res => {
        //         console.log('this is the user data', res)
        //         setUserInfo(res.data)
        //     })
        //     .catch(err => console.log(err))
        // }, [])

    return(
        <FormContainer>
            <h1 className='profile'>Welcome {userInfo.username}</h1>
            <Button onClick={()=>{history.push('/createlisting')}}>+ ADD ENTRY</Button>
            <div>
                {userInfo.listings.map(listing=>{
                    return (
                        <div key={listing.listingid}>
                            <Link to ={`/listingcard/${listing.listingid}`}>Edit this entry</Link>
                            <h2>Optimal Price: {listing.optimalPrice}</h2>
                            <h4>Neighborhood: {listing.neighborhood}</h4>
                            <h4>Room type: {listing.roomtype}</h4> 
                            <h4>Maximum guests: {listing.accomodates}</h4>
                            <h4>Minimum nights: {listing.minnumnights}</h4> 
                         </div>   

                    )
                })}
            </div>
           
         
        </FormContainer>
    )
}