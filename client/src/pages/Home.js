import Bar from '../components/Bar';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
  Button,
  MobileStepper
} from '@mui/material';
import '../style/style.css';

const steps = [
  {
    label: 'View Trending Recipes',
    description: `See what recipes are trending. This is based on how many times a certain recipe was viewed in the last 24 hours!`,
    quote: "Discover your next HealtheeByte!",
    image: "https://i.postimg.cc/HsW2ZgYm/zoshua-colah-WVo-Lfi-Kb-YBQ-unsplash.jpg",
    altText: "placeholder alt text 1",
    link: "recipes"
  },
  {
    label: 'Search for a Recipe',
    description:
      'If you are looking for something particular, try searching for a recipe using our HealtheeByte search tool!',
    quote: "Search for your HealtheeByte recipe",
    image: "https://i.postimg.cc/NfqxGwBh/clark-douglas-H4-Tg-NQ7-QGFM-unsplash.jpg",
    altText: "placeholder alt text 2",
    link: "recipes"
  },
  {
    label: 'Create a Recipe',
    description: `Maybe you would like to share your recipe with the word? Simply create your own!`,
    quote: "Login/Create an account to add your own recipes!",
    image: "https://i.postimg.cc/X7DwsB1K/max-saeling-Ax-XT3k-Fd-Gg-unsplash.jpg",
    altText: "placeholder alt text 3",
    link: "login"
  },
];

const Home = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div className='home-page'>
      <Bar />
      <Typography variant="h2" className='page-header'>View, Search, Add recipes and More!</Typography>
      <Grid container spacing={2} id='card-container' xs={8}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                {steps[activeStep].label}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.primary">
                {steps[activeStep].description}
              </Typography>
              <img src={steps[activeStep].image} className='main-img' alt={steps[activeStep].altText} />
              <Typography sx={{ fontSize: 20 }} color="text.primary" textAlign={'center'}>{steps[activeStep].quote}</Typography>
              <Typography textAlign={'center'}><Link underline='none' href={steps[activeStep].link}>Take me there!</Link></Typography>
              <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

export default Home;