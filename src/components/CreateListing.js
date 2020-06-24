import React from 'react'
import {Form, Button, Label, Error} from '../style/style'
import '../style/Form.css'


export default function CreateListing(props) {
    const userId = localStorage.getItem('user id')
    const {onSubmit, values, onChange, errors, disabled} = props
  
    return(
        <Form onSubmit={onSubmit}>
            <div>
            <h2>Create Listing:</h2>
            </div>
            
            <Label>Listing Name:&nbsp;
                <input
                    type='text'
                    name='listingname'
                    onChange={onChange}
                    value={values.listingname}
                />
            </Label>
            {/* <Error>{errors.listingname}</Error> */}

            <Label>Room type:&nbsp;
                <select
                    name='roomtype'
                    value={values.roomtype}
                    onChange={onChange}
                >
                    <option value=''>-- None --</option>
                    <option value='shared room'>Shared</option>
                    <option value=''>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
            </Label>

            <Label>Zip Code:&nbsp;
                <input
                    type='text'
                    name='zipcode'
                    value={values.zipcode}
                    onChange={onChange}
                />
            </Label>

            <Label>City:&nbsp;
                <input
                    type='text'
                    name='city'
                    value={values.city}
                    onChange={onChange}
                />
            </Label>

            <Label>Neighborhood:&nbsp;
                <input
                    type='text'
                    name='neighborhood'
                    value={values.neighborhood}
                    onChange={onChange}
                />
            </Label>
            {/* <Error>{errors.location}</Error> */}

            <Label>Maximum Guests:&nbsp;
                <select
                    name='maxnumguests'
                    value={values.maxnumguests}
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
                    value={values.minnumnights}
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
                    value={values.numbeds}
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

            {/* <h4>Pets Allowed:</h4>
            <Label>Yes
                    <input 
                        checked={values.petsallowed === true}
                        value='true'
                        onChange={onCheckboxChange}
                        name='petsallowed'
                        type='radio'
                    />
                </Label>
                <Label>No
                <input 
                    checked={values.petsallowed === false}
                    value='false'
                    onChange={onCheckboxChange}
                    name='petsallowed'
                    type='radio'
                />
                </Label> */}
                <Label>Pets Allowed:&nbsp;
                    <select
                        name='petsallowed'
                        onChange={onChange}
                        value={values.petsallowed}
                    >
                        <option value=''>-- Select One --</option>
                        <option value='yes'>yes</option>
                        <option value='no'>no</option>
                    </select>
                </Label>

            <Button id='submitBtn' disabled={disabled}>Add Listing</Button>
        </Form>
    )
}
