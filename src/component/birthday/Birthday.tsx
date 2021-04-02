import React, {useEffect, useState} from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {useStyles} from "./styles";
import {BirthdayProps} from "./types";

const TODAY = (new Date()).toDateString()

export default function Birthday(props: BirthdayProps) {

    const {
        label,
        register,
        errors,
        setValue,
        resetManual
    } = props

    const classes = useStyles()
    const [selectedDate, setSelectedDate] = useState<String>(TODAY);

    const handleOnChange = (date: string) => {
        setSelectedDate(date);
        setValue("birthday", date, {shouldValidate: true});
    }

    useEffect(() => {
        register("birthday");
        setValue("birthday", selectedDate, {shouldValidate: false});
    }, [register, selectedDate, setValue]);

    useEffect(() => {
        setSelectedDate((new Date().toDateString()))
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
                label={label}
                value={selectedDate}
                onChange={date => date && handleOnChange(date?.toDateString())}
                helperText={errors.birthday?.message}
                error={!!errors.birthday}
                InputAdornmentProps={{position: "start"}}
                {...(errors.birthday && {InputProps: {className: classes.error}})}
            />
        </MuiPickersUtilsProvider>
    );
}
