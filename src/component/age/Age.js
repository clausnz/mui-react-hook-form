import React from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Age(props) {

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
            name="age"
            type="number"
            // TODO: inputRef instead of ref important
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
