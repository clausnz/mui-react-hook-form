import React, {useEffect, useState} from "react";
import {FormControl, InputLabel, Select} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Hobby(props) {

    const {
        register,
        errors,
        resetManual
    } = props

    const classes = useStyles();
    const [hobby, setHobby] = useState();

    const hobbies = [
        "Music",
        "Food",
        "Reading/Writing",
        "Travel",
        "Pets"
    ]

    const handleChange = e => setHobby(e.target.value);
    useEffect(() => setHobby(""), [resetManual])

    return (
        <FormControl size="small" margin="dense" variant="outlined" className={classes.root}>
            <InputLabel
                className={errors.hobby && classes.label}
                htmlFor="hobby-select">
                {errors.hobby?.message ?? "Favorite Hobby"}
            </InputLabel>
            <Select
                variant="outlined"
                native
                error={errors.hobby}
                value={hobby}
                inputRef={register()}
                onChange={handleChange}
                label="Favorite Hobby"
                inputProps={{name: 'hobby', id: 'hobby-select'}}>
                <option value=""/>
                {hobbies.map(item => <option value={item.toLowerCase()}>{item}</option>)}
            </Select>
        </FormControl>
    )
}
