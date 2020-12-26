import React from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Email(props) {

    const {
        reactHookForm
    } = props

    const {
        register,
        errors
    } = reactHookForm

    const classes = useStyles()

    return (
        <TextField
            name="email"
            inputRef={register()}
            error={errors.email}
            label={errors.email?.message ?? "Email Address"}
            className={classes.textField}
            variant="outlined"
            margin="dense"
        />
    )
}
