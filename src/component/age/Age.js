import React from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Age(props) {

    const {
        register,
        errors
    } = props

    const classes = useStyles()

    return (
        <TextField
            name="age"
            type="number"
            inputRef={register()}
            error={errors.age}
            label={errors.age?.message ?? "Age"}
            className={classes.textField}
            defaultValue=""
            variant="outlined"
            margin="dense"
        />
    )
}
