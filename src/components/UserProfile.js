import React, {useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom'

import {FormContainer, Button, Card, Label} from '../style/style'
import axiosWithAuth from '../utils/axiosWithAuth';


export default function UserProfile(props){
    const {userInfo} = props
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
                console.log(userInfo)
            })
            .catch(err => console.log(err))
        },[])
 
    return(
        <FormContainer>
            <div className='profile-div'>
            <h1 className='profile'>Welcome {userInfo.username}</h1>
            <p>{userInfo.primaryemail}</p>
            </div>
            <Button onClick={()=>{history.push('/createlisting')}}>+ ADD LISTING</Button>
            
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