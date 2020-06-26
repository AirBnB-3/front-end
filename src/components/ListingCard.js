import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom';
import {Form, Button, Label} from '../style/style'

const ListingCard = () => {

    const [editing, setEditing] = useState(false);
    
    const { listingid } = useParams();
    const history = useHistory()
    const [listingData, setListingData] = useState([])

    
    const listing = {
        listingid: listingData.listingid,
        roomtype: listingData.roomtype,
        neighbourhood: listingData.neighbourhood,
        accomodates:listingData.accomodates,
        minnumnights:listingData.minnumnights,
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
            .get(`https://seanmx96-airbnb-optimal-price.herokuapp.com//listings/listing/${listingid}`)
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
        .delete(`https://seanmx96-airbnb-optimal-price.herokuapp.com//listings/listing/${listingid}`)
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
        .put(`https://seanmx96-airbnb-optimal-price.herokuapp.com//listings/listing/${listingid}`, listing)
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
                <h4>Minimum nights: {listingData.minnumnights}</h4> 
                <h4>Room type: {listingData.roomtype}</h4> 
                
                <button onClick={editEntry}>Edit</button>
                <button onClick={()=>{deleteEntry(listingData.listingid)}}>Delete</button>
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

            <Label>Neighbourhood:&nbsp;
                <input
                    type='text'
                    name='location'
                    value={listingData.neighbourhood}
                    onChange={onChange}
                />
            </Label>
            {/* <Error>{errors.location}</Error> */}

             <Label>Room type:&nbsp;
                <select
                    name='roomtype'
                    value={listingData.roomtype}
                    onChange={onChange}
                >
                    <option value=''>-- None --</option>
                    <option value='Private room'>Private room</option>
                    <option value='Entire home/apt'>Entire home/apt</option>
                    <option value='Shared room'>Shared room</option>

                </select>
            </Label>

            <Label>Maximum Guests:&nbsp;
                <select
                    name='maxnumguests'
                    value={listingData.accomodates}
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
                    <option value='1'>One Night</option>
                    <option value='2'>Two Nights</option>
                    <option value='3'>Three Night</option>
                    <option value='4'>Four Nights</option>
                    <option value='5'>Five Nights</option>
                    <option value='6'>Six Nights</option>
                </select>
            </Label>
            {/* <Error>{errors.minnumnights}</Error> */}

           
                <Button type='submit'>Save Edit</Button>
                </Form>): <h4>Thank you for using OptimalPrice!</h4>}
      
        
               
        </div> 
    )
}
export default ListingCard