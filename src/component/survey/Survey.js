import React, {useEffect, useState} from "react";
import Paper from '@material-ui/core/Paper';
import {useStyles} from "./styles";
import {Button, Grid, Typography} from "@material-ui/core";
import Name from "../name/Name";
import {useForm} from "react-hook-form";
import Age from "../age/Age";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Gender from "../gender/Gender";


export default function Survey() {

    const classes = useStyles();

    // Name?
    // Age?
    // Gender?
    // Email?
    // Subject?
    // Comment?

    let schema = yup.object().shape({
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
            .email("Please enter a valid email address"),
    });

    const reactHookForm = useForm({
        resolver: yupResolver(schema)
    });
    const {handleSubmit, reset, formState} = reactHookForm;
    const {isSubmitSuccessful} = formState;
    const [resetManual, setResetManual] = useState(false)

    const resetForm = () => {
        reset();
        setResetManual(prevState => !prevState)
    }

    useEffect(() => {
        if (isSubmitSuccessful) reset();
    }, [isSubmitSuccessful, reset])

    const onSubmit = data => console.log("*** form data", data);

    return (
        <form
            className={classes.root}
            onSubmit={handleSubmit(onSubmit)}>

            <Paper className={classes.paper} elevation={3}>

                <Grid container className={classes.gridContainer} spacing={1}>

                    {/* Heading */}
                    <Grid item xs={12}>
                        <Typography variant="h5" noWrap>
                            Survey Form
                        </Typography>
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                        <Name reactHookForm={reactHookForm}/>
                    </Grid>

                    {/* Age */}
                    <Grid item xs={12}>
                        <Age reactHookForm={reactHookForm}/>
                    </Grid>

                    {/* Gender */}
                    <Grid item xs={12} className={classes.gridLeft}>
                        <Gender
                            reactHookForm={reactHookForm}
                            resetManual={resetManual}
                        />
                    </Grid>

                    <Grid item>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary">
                            Submit
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button
                            onClick={() => resetForm()}
                            variant="contained"
                            color="secondary">
                            Reset
                        </Button>
                    </Grid>

                </Grid>

            </Paper>
        </form>
    )
}
