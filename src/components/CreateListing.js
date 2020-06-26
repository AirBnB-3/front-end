import React from 'react'
import {Form, Button, Label} from '../style/style'
import '../style/Form.css'


export default function CreateListing(props) {
    
    const {onSubmit, values, disabled, setListingValues, listingValues} = props

    const onChange = evt => {
        const {name, value} = evt.target
        setListingValues({
            ...listingValues,
            [name]: value
          })
        }
  
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
                    name='minnumnights'
                    onChange={onChange}
                    value={values.minnumnights}
                >
                    <option value='0'>-- None --</option>
                    <option value= '1'>One Night</option>
                    <option value='2'>Two Nights</option>
                    <option value='3'>Three Night</option>
                    <option value='4'>Four Nights</option>
                    <option value='5'>Five Nights</option>
                    <option value='6'>Six Nights</option>
                </select>
            </Label>
            {/* <Error>{errors.minnumnights}</Error> */}


        
            <Button id='submitBtn' disabled={disabled}>Add Listing</Button>
        </Form>
    )
}
