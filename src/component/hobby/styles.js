import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    selectInput: {
        padding: '10px 26px 10px 12px',
    },
    label: {
        color: theme.palette.error.main
    }
}));
