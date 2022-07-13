import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getName from '../../api/api'
import { NavLink } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const Name = () => {

    const data = useSelector(state => state.namePage.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getName())
    }, [])

    const [value, setValue] = useState('')

    const filterName = data.filter(d => {
        return d.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='inherit'>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            marginLeft='50%'
                        >
                            Characters
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(event) => setValue(event.target.value)}

                            />
                        </Search>
                    </Toolbar>
                </AppBar>
                <p />
            </Box>
            <Container className='gridCard' maxWidth='md'>
                <Grid container spacing={4}>
                    {filterName.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={card.img}
                                    />
                                    <CardContent>
                                        <NavLink to={'/name/' + card.char_id}>
                                            <Typography gutterBottom variant="h5" component="div"   >
                                                {card.name}
                                            </Typography>
                                        </NavLink>
                                        <hr />
                                        <Typography variant="body2" color="text.secondary">
                                            Date of Birth: {card.birthday}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Nickname: {card.nickname}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Status: {card.status}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Portrayed: {card.portrayed}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Id Caracter: {card.char_id}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>

    )
}

export default Name;