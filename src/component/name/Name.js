import React from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Name(props) {

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
            // TODO: name field is important
            name="name"
            // TODO: inputRef instead of ref important
            inputRef={register()}
            error={errors.name}
            label={errors.name?.message ?? "Name"}
            className={classes.textField}
            variant="outlined"
            margin="dense"
        />
    )
}
