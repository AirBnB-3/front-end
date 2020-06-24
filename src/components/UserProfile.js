import React, {Link} from 'react'
import CreateListing from './CreateListing'
import {FormContainer} from '../style/style'


export default function UserProfile(props){
    const {onChange, values} = props


    return(
        <FormContainer>
            <h1 className='profile'>Profile</h1>
            <CreateListing onChange={onChange} values={values}/>
        </FormContainer>
    )
}