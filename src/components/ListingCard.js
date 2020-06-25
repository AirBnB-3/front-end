import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom';
import {Form, Button, Label} from '../style/style'

const ListingCard = () => {

    const [editing, setEditing] = useState(false);
    
    const { id } = useParams();
    const history = useHistory()
    const [listingData, setListingData] = useState([])

    
    const listing = {
        listingId: listingData.listingId,
        roomtype: listingData.roomtype,
        neighbourhood: listingData.neighbourhood,
        accomodates:listingData.accomodates,
        minnum_nights:listingData.minnum_nights,
        optimalPrice: listingData.optimalPrice
    }

        
    const onChange = e =>{
        e.preventDefault()
        setListingData({
          ...listingData,
            [e.target.name]: e.target.value
    
        })
        }

    //Use effect fires when component mounts, then sending out axios call
    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        axiosWithAuth()
            .get(`https://seanmx96-airbnb-optimal-price.herokuapp.com//listings/listing/${id}`)
            .then(res=>{
                console.log(res)
                setListingData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    }

const deleteEntry = () =>{
    axiosWithAuth()
        .delete(`https://seanmx96-airbnb-optimal-price.herokuapp.com//listings/listing/${id}`)
        .then(res=>{
            console.log(res)
            history.push('/userprofile');
        })
        .catch(err=>{
            console.log(err)
        })

}
const saveEntry = e =>{
    e.preventDefault()
    axiosWithAuth()
        .put(`https://seanmx96-airbnb-optimal-price.herokuapp.com//listings/listing/${id}`, listing)
        .then(res=>{
            console.log(res)
            setEditing(!editing)
            history.push('/userprofile');
        })
        .catch(err=>{
            console.log(err)
        })

}
const editEntry = () =>{
    setEditing(!editing)
}

    return(
       <div>
            <div>
                <h2>Optimal price for this listing: {listingData.optimalPrice}</h2>
                 <h4>Neighbourhood: {listingData.neighbourhood}</h4>
                <h4>Maximum guests: {listingData.accomodates}</h4>
                <h4>Minimum nights: {listingData.minnum_nights}</h4> 
                <h4>Room type: {listingData.roomtype}</h4> 
                
                <button onClick={editEntry}>Edit</button>
                <button onClick={()=>{deleteEntry(id)}}>Delete</button>
            </div>
           
            {editing ? (<Form onSubmit={saveEntry}>
                <Label>Listing Name:&nbsp;
                <input
                    type='text'
                    name='listingname'
                    onChange={onChange}
                    value={listingData.listingname}
                />
            </Label>
            {/* <Error>{errors.listingname}</Error> */}

            <Label>Location:&nbsp;
                <input
                    type='text'
                    name='location'
                    value={listingData.location}
                    onChange={onChange}
                />
            </Label>
            {/* <Error>{errors.location}</Error> */}

            <Label>Maximum Guests:&nbsp;
                <select
                    name='maxnumguests'
                    value={listingData.maxnumguests}
                    onChange={onChange}
                >
                    <option value=''>-- None --</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
            </Label>
            {/* <Error>{errors.maxnumguests}</Error> */}

            <Label>Minimum Stay:&nbsp;
                <select
                    name='minnumnights'
                    onChange={onChange}
                    value={listingData.minnumnights}
                >
                    <option value=''>-- None --</option>
                    <option value='One Night'>One Night</option>
                    <option value='Two Nights'>Two Nights</option>
                    <option value='Three Nights'>Three Night</option>
                    <option value='Four Nights'>Four Nights</option>
                    <option value='Five Nights'>Five Nights</option>
                    <option value='Six Nights'>Six Nights</option>
                </select>
            </Label>
            {/* <Error>{errors.minnumnights}</Error> */}

            <Label>Beds:&nbsp;
                <select
                    name='numbeds'
                    onChange={onChange}
                    value={listingData.numbeds}
                >
                    <option value=''>-- Select One --</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
            </Label>
            {/* <Error>{errors.password}</Error> */}

            <h4>Pets Allowed:</h4>
            <Label>Yes
                    <input 
                        checked={listingData.petsallowed === true}
                        value='true'
                        onChange={onChange}
                        name='petsallowed'
                        type='radio'
                    />
                </Label>
                <Label>No
                <input 
                    checked={listingData.petsallowed === false}
                    value='false'
                    onChange={onChange}
                    name='petsallowed'
                    type='radio'
                />
                </Label> 
                <Button type='submit'>Save Edit</Button>
                </Form>): <h4>Thank you for using OptimalPrice!</h4>}
      
        
               
        </div> 
    )
}
export default ListingCard