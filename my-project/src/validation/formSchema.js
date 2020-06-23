import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    firstName: Yup
    .string()
    .min(2, "First Name must be at least 2 characters long.")
    .required('Required'),
    lastName: Yup
      .string()
      .min(2, "Last Name must be at least 2 characters long.")
      .required('Required'),
    username: Yup
      .string()
      .min(4, "Username must be at least 4 characters long.")
      .required('Required'),

    email: Yup
      .string()
      .email('Invalid Email')
      .required('Required'),

    password: Yup
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Required'),
  });

  export default formSchema