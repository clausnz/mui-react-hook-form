import React from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Name(props) {

    const {
        register,
        errors
    } = props

    const classes = useStyles()

    return (
        <TextField
            name="name"
            inputRef={register()}
            error={errors.name}
            label={errors.name?.message ?? "Name"}
            className={classes.textField}
            variant="outlined"
            margin="dense"
        />
    )
}
