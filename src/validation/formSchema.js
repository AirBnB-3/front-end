import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    firstName: Yup
    .string()
    .min(2, "First Name must be at least 2 characters long."),
    lastName: Yup
      .string()
      .min(2, "Last Name must be at least 2 characters long."),
    username: Yup
      .string()
      .min(4, "Username must be at least 4 characters long."),

    email: Yup
      .string()
      .email('Invalid Email'),

    password: Yup
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Required'),

    listingname: Yup
      .string(),
    
    location: Yup
      .string(),

    maxnumguests: Yup
      .string(),

    minnumnights: Yup
      .string(),
      
    numbeds: Yup
      .string(),

    petsallowed: Yup
      .string(),
  });

  export default formSchema