import React, {useEffect} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {useStyles} from "./styles";

export default function Gender(props) {

    const {
        register,
        errors,
        setValue,
        resetManual
    } = props

    const classes = useStyles();
    const [radioValue, setRadioValue] = React.useState("");

    const handleRadioChange = e => {
        setRadioValue(e.target.value)
        setValue("gender", e.target.value, {shouldValidate: true})
    }

    const RadioWithValidation = props => (
        <Radio
            classes={{root: errors.gender?.message ? classes.error : ""}}
            {...props}
        />
    )

    const FormControlLabelWithValidation = props => (
        <FormControlLabel
            classes={{root: errors.gender?.message ? classes.error : ""}}
            control={<RadioWithValidation/>}
            {...props}
        />
    )

    useEffect(() => register('gender'), [register]);
    useEffect(() => setRadioValue(""), [resetManual])

    return (
        <FormControl component="fieldset">
            {/* TODO: key important here */}
            <RadioGroup key={Date.now()} row name="gender" value={radioValue} onChange={handleRadioChange}>
                <FormControlLabelWithValidation value="Female" label="Female"/>
                <FormControlLabelWithValidation value="Male" label="Male"/>
                <p className={classes.error}>{errors.gender?.message}</p>
            </RadioGroup>
        </FormControl>
    )
}

