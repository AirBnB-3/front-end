import React, {useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom'

import {FormContainer, Button, Card, Label} from '../style/style'
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
        },[])
 
    return(
        <FormContainer>
            <h1 className='profile'>Welcome {userListings.username}</h1>
            <Button onClick={()=>{history.push('/createlisting')}}>+ ADD ENTRY</Button>
            
                {userListings && userListings.map(listing=>{
                    return (
                        <Card key={listing.listingid}>
                            <Link to ={`/listingcard/${listing.listingid}`}>Edit this entry</Link>
                            <Label>Optimal Price: {listing.optimalPrice}</Label>
                            <Label>Neighborhood: {listing.neighbourhood}</Label>
                            <Label>Room type: {listing.roomtype}</Label> 
                            <Label>Maximum guests: {listing.accomodates}</Label>
                            <Label>Minimum nights: {listing.minnumnights}</Label> 
                         </Card>   

                    )
                })}
            
           
         
        </FormContainer>
    )
}