import Bar from '../components/Bar';
import { styled } from '@mui/material/styles';
import {
    Grid,
    Paper,
    Typography
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import '../style/style.css';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.primary,
//     fontSize: 24
// }));


const Home = () => {
    return (
        <div className='home-page'>
            <Bar />
            <Typography variant="h3" className='page-header'>View, Search, Add recipes and More!</Typography>
            <Grid container spacing={2} id='card-container'>
                <Grid item xs={6}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                                Recipe of the Day
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.primary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                            <img src='https://i.postimg.cc/NfqxGwBh/clark-douglas-H4-Tg-NQ7-QGFM-unsplash.jpg' className='main-img' />
                            <Typography sx={{ fontSize: 20 }} color="text.primary" textAlign={'center'}>Helping you find your next simple healthy recipe</Typography>
                            <Typography textAlign={'center'}><Button>Search more</Button></Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};

export default Home;