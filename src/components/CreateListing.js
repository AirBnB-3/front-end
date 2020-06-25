import React from 'react'
import {Form, Button, Label, Error} from '../style/style'


export default function CreateListing(props) {
    
    const {onSubmit, values, onChange, errors, disabled} = props
  
    return(
        <Form onSubmit={onSubmit}>
            <div>
            <h2>Create Listing:</h2>
            </div>
            
            <Label>Neighbourhood:&nbsp;
                <input
                    type='text'
                    name='neighbourhood'
                    value={values.neighbuorhood}
                    onChange={onChange}
                />
            </Label>
            {/* <Error>{errors.location}</Error> */}
            <Label>Room type:&nbsp;
                <select
                    name='roomtype'
                    value={values.roomtype}
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
                    name='accomodates'
                    value={values.accomodates}
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
                    name='minnum_nights'
                    onChange={onChange}
                    value={values.minnum_nights}
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

        
            <Button id='submitBtn' disabled={disabled}>Add Listing</Button>
        </Form>
    )
}
