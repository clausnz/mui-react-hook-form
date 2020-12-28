import React, {useEffect, useState} from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {useStyles} from "./styles";

const TODAY = new Date()

export default function Birthday(props) {

    const {
        register,
        errors,
        setValue,
        resetManual
    } = props

    const classes = useStyles()
    const [selectedDate, setSelectedDate] = useState(TODAY);

    const handleOnChange = date => {
        setSelectedDate(date);
        setValue("birthday", date, {shouldValidate: true});
    }

    useEffect(() => {
        register("birthday");
        setValue("birthday", selectedDate, {shouldValidate: false});
    }, [register, selectedDate, setValue]);

    useEffect(() => {
        setSelectedDate(new Date());
        setValue("birthday", TODAY, {shouldValidate: false});
    }, [resetManual, setValue]);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                autoOk
                disableToolbar
                className={classes.root}
                name="birthday"
                size="small"
                inputVariant="outlined"
                variant="inline"
                format="dd/MM/yyyy"
                margin="dense"
                label="Birthday"
                value={selectedDate}
                onChange={handleOnChange}
                helperText={errors.birthday?.message}
                error={errors.birthday}
                InputAdornmentProps={{position: "start"}}
                {...(errors.birthday && {InputProps: {className: classes.error}})}
            />
        </MuiPickersUtilsProvider>
    );
}
