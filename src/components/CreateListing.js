import React from 'react'
import {Form, Button, Label, Error} from '../style/style'


export default function CreateListing(props) {

    const {onSubmit, values, onChange, errors, disabled} = props
    console.log(values)

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

            <Label>Location:&nbsp;
                <input
                    type='text'
                    name='location'
                    value={values.location}
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

            <h4>Pets Allowed:</h4>
            <Label>Yes
                    <input 
                        checked={values.petsallowed === true}
                        value='true'
                        onChange={onChange}
                        name='petsallowed'
                        type='radio'
                    />
                </Label>
                <Label>No
                <input 
                    checked={values.petsallowed === false}
                    value='false'
                    onChange={onChange}
                    name='petsallowed'
                    type='radio'
                />
                </Label>

            <Button id='submitBtn' disabled={disabled}>Add Listing</Button>
        </Form>
    )
}