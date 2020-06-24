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

    // listingname: Yup
    //   .string()
    //   .required('Required'),
    
    // location: Yup
    //   .string()
    //   .required('Required'),

    // maxnumguests: Yup
    //   .string()
    //   .oneOf(['1', '2', '3', '4', '5', '6'], "Please select an option"),

    // minnumnights: Yup
    //   .string()
    //   .oneOf(['One Night', 'Two Nights', 'Three Nights', 'Four Nights', 'Five Nights', 'Six Nights'], "Please select an option"), 
      
    // numbeds: Yup
    //   .string()
    //   .oneOf(['1', '2', '3', '4', '5', '6'], "Please select an option"),

    // petsallowed: Yup
    //   .string()
    //   .oneOf([true, false], 'Please select an option')
  });

  export default formSchema