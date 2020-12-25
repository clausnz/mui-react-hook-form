import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(3)
    },
    gridContainer: {},
    paper: {
        padding: theme.spacing(3),
        width: "100%"
    },
    gridLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    gridRight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    submitButton: {
        float: "left",
        marginRight: theme.spacing(0)
    },
    resetButton: {
        marginLeft: theme.spacing(1)
    }
}));
