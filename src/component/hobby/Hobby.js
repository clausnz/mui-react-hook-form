import React, {useEffect, useState} from "react";
import {FormControl, InputLabel, Select} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Hobby(props) {

    const {
        reactHookForm
    } = props

    const {
        register,
        errors,
        setValue
    } = reactHookForm

    const classes = useStyles();
    const [hobby, setHobby] = useState();

    const hobbies = [
        "Music",
        "Food",
        "Reading/Writing",
        "Travel",
        "Pets"
    ]

    const handleChange = e => {
        setHobby(e.target.value);
        setValue("hobby", e.target.value, {shouldValidate: true});
    }

    useEffect(() => register('hobby'), [register]);

    return (
        <FormControl margin="dense" variant="outlined" className={classes.root}>
            <InputLabel
                className={errors.hobby && classes.label}
                htmlFor="hobby-select">
                {errors.hobby?.message ?? "Favorite Hobby"}
            </InputLabel>
            <Select
                variant="outlined"
                classes={{select: classes.selectInput}}
                native
                error={errors.hobby}
                value={hobby}
                onChange={handleChange}
                label="Favorite Hobby"
                inputProps={{name: 'hobby', id: 'hobby-select'}}>
                <option value=""/>
                {hobbies.map(item => <option value={item.toLowerCase()}>{item}</option>)}
            </Select>
        </FormControl>
    )
}
