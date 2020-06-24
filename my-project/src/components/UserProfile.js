import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory, Link} from 'react-router-dom';


export default function UserProfile(props){
    const history = useHistory()
    const [listings, setListings] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        axiosWithAuth()
            .get('https://seanmx96-airbnb-optimal-price.herokuapp.com//listings/')
            .then(res=>{
                console.log(res)
                setListings(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    }

    return(
        <div>
            <h1>Listings</h1>
            <button onClick={()=>{history.push('./createlisting')}}>Add new listing</button>
            {listings.map(item=>{
                return(
                    <div key = {item.id}>
                        <Link to={`/listingcard/${item.id}`}>Edit</Link>
                        <h2>Optimal price for this listing: {item.optimalPrice}</h2>
                        <h4>Listing name: {item.listingname}</h4>
                        <h4>Location: {item.location}</h4>
                        <h4>Maximum guests: {item.maxnumguests}</h4>
                        <h4>Minimum nights: {item.minnumnights}</h4> 
                        <h4>Beds: {item.numbeds}</h4> 
                        <h4>Pets allowed: {item.petsallowed}</h4>  
                    </div>
                )
            })}

        </div>
    )
}