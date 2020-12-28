import React, {useEffect, useState} from "react";
import Paper from '@material-ui/core/Paper';
import {useStyles} from "./styles";
import {Button, Grid, Typography} from "@material-ui/core";
import Name from "../name/Name";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import Gender from "../gender/Gender";
import {schema} from "./yupSchema";
import Email from "../email/Email";
import Hobby from "../hobby/Hobby";
import Comment from "../comment/Comment";
import Birthday from "../birthday/Birthday";


export default function Survey() {

    const classes = useStyles();

    const {
        handleSubmit,
        reset,
        formState: {isSubmitSuccessful},
        register,
        errors,
        setValue
    } = useForm({resolver: yupResolver(schema)});

    const [resetManual, setResetManual] = useState(false)

    const resetForm = () => {
        reset();
        setResetManual(prevState => !prevState)
    }

    useEffect(() => {
        isSubmitSuccessful && resetForm()
    }, [isSubmitSuccessful])

    const onSubmit = data => console.log("*** form data", data);

    return (
        <form
            className={classes.root}
            onSubmit={handleSubmit(onSubmit)}>

            <Paper className={classes.paper} elevation={3}>

                <Grid container spacing={1}>

                    {/* Heading */}
                    <Grid item xs={12}>
                        <Typography variant="h5" noWrap>
                            Survey Form
                        </Typography>
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                        <Name
                            register={register}
                            errors={errors}
                        />
                    </Grid>

                    {/* Birthday */}
                    <Grid item xs={12}>
                        <Birthday
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            resetManual={resetManual}
                        />
                    </Grid>

                    {/* Gender */}
                    <Grid item xs={12} className={classes.gridLeft}>
                        <Gender
                            register={register}
                            errors={errors}
                            setValue={setValue}
                            resetManual={resetManual}
                        />
                    </Grid>

                    {/* Email */}
                    <Grid item xs={12}>
                        <Email
                            register={register}
                            errors={errors}
                        />
                    </Grid>

                    {/* Hobby */}
                    <Grid item xs={12}>
                        <Hobby
                            register={register}
                            errors={errors}
                            resetManual={resetManual}
                        />
                    </Grid>

                    {/* Comment */}
                    <Grid item xs={12}>
                        <Comment
                            register={register}
                            errors={errors}
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
