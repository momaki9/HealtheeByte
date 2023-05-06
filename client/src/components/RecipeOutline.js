import Bar from "./Bar";
import {
    Grid,
    styled,
    Box,
    Paper
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const RecipeOutline = () => {
    return (
        <>
            <Bar />
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>this could be the form</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>this could be the preview</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default RecipeOutline;