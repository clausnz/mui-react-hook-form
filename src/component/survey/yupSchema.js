import * as yup from 'yup';


export const schema = yup.object().shape({
    name: yup.string()
        .required("Please enter your name")
        .matches(/^[a-zA-Z\s]+$/, "Please enter a valid name"),
    age: yup.number()
        .typeError("Please enter your age")
        .positive("Please enter a valid age")
        .integer("Please enter a whole number"),
    gender: yup.string()
        .required("Please select your gender"),
    email: yup.string()
        .required("Please enter your email address")
        .email("Please enter a valid email address"),
});
