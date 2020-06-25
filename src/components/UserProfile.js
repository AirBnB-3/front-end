import React, {Link} from 'react'
import CreateListing from './CreateListing'
import {FormContainer} from '../style/style'


export default function UserProfile(props){
    const {onChange, values, userInfo} = props




    return(
        <FormContainer>
            <h1 className='profile'>Welcome {userInfo.first_name}</h1>
            <CreateListing onChange={onChange} values={values}/>
            {console.log(userInfo)}
        </FormContainer>
    )
}