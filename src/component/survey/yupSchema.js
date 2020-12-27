import * as yup from 'yup';


export const schema = yup.object().shape({
    name: yup.string()
        .required("Please enter your name")
        .matches(/^[a-zA-Z\s]+$/, "Please enter a valid name"),
    birthday: yup.date()
        .typeError("Please use date format dd/mm/yyyy")
        .max(new Date((new Date()).setDate((new Date()).getDate() - 1)), "Please select a date in the past"),
    gender: yup.string()
        .required("Please select your gender"),
    email: yup.string()
        .required("Please enter your email address")
        .email("Please enter a valid email address"),
    hobby: yup.string()
        .required("Please select your favorite hobby"),
    comment: yup.string()
        .required("Please enter a comment"),
});
