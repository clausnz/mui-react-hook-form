import React from "react";
import {TextField} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Comment(props) {

    const {
        register,
        errors
    } = props

    const classes = useStyles()

    return (
        <TextField
            inputRef={register()}
            error={errors.comment}
            className={classes.root}
            name="comment"
            label={errors.comment?.message ?? "Comment"}
            multiline
            rows={4}
            variant="outlined"
        />
    )
}
