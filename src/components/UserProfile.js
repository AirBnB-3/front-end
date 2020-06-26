import React, {useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom'

import {FormContainer, Button} from '../style/style'
import axiosWithAuth from '../utils/axiosWithAuth';


export default function UserProfile(props){
    
    const [userListings, setUserListings]= useState([])
    // console.log(props)
    const history = useHistory()

    useEffect(()=>{
        axiosWithAuth()
            .get('/users/getuserinfo')
            .then(res => {
                console.log('this is the user data', res)
                setUserListings(res.data.listings)
                console.log('this is user info', userListings)
            })
            .catch(err => console.log(err))
        }, [])
 
    return(
        <FormContainer>
            <h1 className='profile'>Welcome {userListings.username}</h1>
            <Button onClick={()=>{history.push('/createlisting')}}>+ ADD ENTRY</Button>
            <div>
                {userListings && userListings.map(listing=>{
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