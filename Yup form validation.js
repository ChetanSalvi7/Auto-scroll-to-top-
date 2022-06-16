import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import moment from "moment"; 
// install npm moment , yup , yupresolver
 const formOptions = { resolver: yupResolver(passwordvalidation) };
const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
const passwordvalidation =Yup.object().shape({
        firstname: Yup.string().required('Please enter your name.'),
        lastname: Yup.string().required('Please enter your name.'),
        street: Yup.string().required('Please enter your street and number.'),
        city: Yup.string().required('Please enter your city.'),
        zipcode : Yup.string().required('Please enter your postcode'),
        country: Yup.string().required('Please enter your country.'),
        nationality: Yup.string().required('Please enter your nationality.'),
        birthday: Yup.string().required('Please enter your date of birth.').test(
            "DOB",
            "You must be at least 18 years old.",
            (date) => moment().diff(moment(date), "years") >= 18
          ),
        email: Yup.string().required('Enter your e-mail')
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,'Enter a valid e-mail address'),
        mobilephone: Yup.string().required('Please enter a valid mobile phone number that begins with a "+".')
        .matches(/^[+]+[0-9]+$/, 'Please enter a valid mobile phone number that begins with a "+".'),
        cellphone:  Yup.string()
        .required('Please enter your mobile phone number.')
        .oneOf([Yup.ref('mobilephone')], 'Mobile number must match')
    });

<div className="mb-3 col-md-6">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" name="firstname" placeholder="Your first name" {...register('firstname')} />
                                <small className="text-danger">
                                    {errors?.firstname && errors.firstname.message}
                                </small>
                            </div>
