import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    mainCard: {
        // marginTop: theme.spacing(3),
        '& .card--content':{
            padding: theme.spacing(5),
        }
    }
}));
