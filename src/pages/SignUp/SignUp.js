import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import img from "../../images/imageInUse/galleryImage/imageG19.jpg"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'





export default function SignInSide() {


  const [accountType, setAccountType] = useState(20);

  const handleChange = (event) => {

    console.log(event.target.value)
    setAccountType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(accountType)
    const data = new FormData(event.currentTarget);

    if(accountType===20){

      console.log({
        email: data.get("email"),
        password: data.get("password"),
        FirstName: data.get("FirstName"),
        SecondName: data.get("SecondName"),
        Tel: data.get("Tel")        
      })

    }
    else{
      console.log({
        email: data.get("email"),
        password: data.get("password"),
        FirstName: data.get("FirstName"),
        SecondName: data.get("SecondName"),
        CompanyName: data.get("CompanyName"),
        Tel: data.get("Tel")  
      })

    }
   
  };


  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 2,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >

              <Typography component="h1" variant="h5" sx={{
                my: 2,
              }}>
                Sign Up
              </Typography>
              <Box sx={{ minWidth: 120 }}>

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={accountType}
                    label="Account Type"
                    onChange={handleChange}
                  >
                    <MenuItem value={20}>Personal Account </MenuItem>
                    <MenuItem value={10}>Company Account </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {
                accountType===20?
                <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="FirstName"
                  name="FirstName"
                  label="First Name"
                  autoFocus
                />

                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="SecondName"
                  name="SecondName"
                  label="Second Name "
                  autoFocus
                />

              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Tel"
                  label="Contact Number"
                  name="Tel"
                  autoFocus
                />


                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                
                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                 
                  <Grid item>
                    <Link href="/Sign-In" variant="body2">
                      {"have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
                :

                <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >

               
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="CompanyName"
                  name="CompanyName"
                  label="Company's Name"
                  autoFocus
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="FirstName"
                  name="FirstName"
                  label="First Name"
                  autoFocus
                />

                 <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="SecondName"
                  name="SecondName"
                  label="Second Name"
                  autoFocus
                />


              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Tel"
                  label="Contact Number"
                  name="Tel"
                  autoFocus
                />


                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />


            
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                 
                  <Grid item>
                    <Link href="/Sign-In" variant="body2">
                      {"have an account? Sign In"}
                    </Link>
                  </Grid>
                </Grid>

              </Box>
              }
            

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}