import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(3),
        width: "100%"
    },
    gridLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    }
}));
