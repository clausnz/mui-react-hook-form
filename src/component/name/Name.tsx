import React from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "./styles";
import {NameProps} from "./types";

export default function Name(props: NameProps) {

    const {
        label,
        register,
        errors
    } = props

    const classes = useStyles()

    return (
        <TextField
            name="name"
            inputRef={register()}
            error={!!errors.name}
            label={errors.name?.message ?? label}
            className={classes.textField}
            variant="outlined"
            margin="dense"
        />
    )
}
