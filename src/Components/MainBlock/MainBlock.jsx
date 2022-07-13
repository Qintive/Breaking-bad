import React from 'react'
import { Paper } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },
    paper: {
        position: 'relative',
        marginBottom: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
}))


const MainBlock = () => {

    const classes = useStyles();

    return(
        <main>
            <Paper style={{ backgroundImage: `url(https://www.bdfcommunication.it/wp-content/uploads/2015/04/backgroud-bdf-sito.jpg)` }}
            className={classes.paper}>

            </Paper>           
        </main>
    )
}

export default MainBlock;