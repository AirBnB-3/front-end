import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import {useHistory, useParams} from 'react-router-dom';
import {Form, FormContainer, Button, Label, Card} from '../style/style'

const ListingCard = () => {

    const [editing, setEditing] = useState(false);
    
    const { listingid } = useParams();
    const history = useHistory()
    
    
    const [listingData, setListingData]= useState([])
    // console.log(props)

    useEffect(()=>{
        axiosWithAuth()
            .get(`/listings/listing/${listingid}`)
            .then(res => {
                console.log('this is the user data', res)
                setListingData(res.data)
                console.log('this is listing data', listingData)
            })
            .catch(err => console.log(err))
        },[])
    
    // const listing = {
    //     listingid: listingData.listingid,
    //     roomtype: listingData.roomtype,
    //     neighbourhood: listingData.neighbourhood,
    //     accomodates:listingData.accomodates,
    //     minnumnights:listingData.minnumnights,
    //     optimalPrice: listingData.optimalPrice
    // }

        
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
    }, [])

    const getData = () =>{
        axiosWithAuth()
            .get(`/listings/listing/${listingid}`)
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
        .delete(`/listings/listing/${listingid}`)
        .then(res=>{
            console.log(res)
            
        })
        .catch(err=>{
            console.log(err)
        }).finally(history.push('/userprofile'));

}
const saveEntry = e =>{
    e.preventDefault()
    console.log('save entry listing data', listingData)
    axiosWithAuth()
        .patch(`/listings/listing/${listingid}`, listingData)
        .then(res=>{
            console.log('save entry', res)
            setEditing(!editing)
            
        })
        .catch(err=>{
            console.log('save entry', err)
        }).finally (history.push('/userprofile'));

}
const editEntry = () =>{
    setEditing(!editing)
}

    return(
       <FormContainer>
            <Card>
                <h2>Optimal price for this listing: {listingData.optimalPrice}</h2>
                 <Label>Neighbourhood: {listingData.neighbourhood}</Label>
                <Label>Maximum guests: {listingData.accomodates}</Label>
                <Label>Minimum nights: {listingData.minnumnights}</Label> 
                <Label>Room type: {listingData.roomtype}</Label> 
                
                <Button onClick={editEntry}>Edit</Button>
                <Button onClick={()=>{deleteEntry(listingData.listingid)}}>Delete</Button>
            </Card>
           
            {editing ? (<Form onSubmit={saveEntry}>
                

            <Label>Neighbourhood:&nbsp;
                <input
                    type='text'
                    name='neighbourhood'
                    defaultValue={listingData.neighbourhood}
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
                </Form>): <Label>Thank you for using OptimalPrice!</Label>}
      
        
               
        </FormContainer> 
    )
}
export default ListingCard