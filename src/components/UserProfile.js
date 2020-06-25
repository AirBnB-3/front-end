import React, {Link} from 'react'
import CreateListing from './CreateListing'
import {FormContainer} from '../style/style'


export default function UserProfile(props){
    const {onChange, values, userInfo} = props




    return(
        <FormContainer>
            <div className='user-welcome'>
            <h1 className='profile'>Welcome {userInfo.firstname}</h1>
            <p>{userInfo.primaryemail}</p>
            </div>
            <CreateListing onChange={onChange} values={values}/>
            {console.log(userInfo)}
        </FormContainer>
    )
}