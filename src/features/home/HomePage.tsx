import { Chip, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
// @ts-ignore
import Cubi12Logo from "../../app/static/images/cubi12.svg";
import GenerateTabTitle from "../../app/utils/TitleGenerator";
import BlueButton from "../../app/components/BlueButton";
import { Link } from "react-router-dom";
import Colors from "../../app/static/colors";

const imgStyle = { maxWidth: "15%", height: "auto" };
const imgPhoneStyle = { maxWidth: "40%", height: "auto" };

const HomePage = () => {
  document.title = GenerateTabTitle("Inicio");

  const isSmallScreen = useMediaQuery("(max-width:430px)");

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100%", marginTop: "4rem", textAlign: "center" }}
    >
      <Typography variant="h3" component="h1" style={{ marginBottom: "2rem" }}>
        ¡Bienvenido a Cubi12!
      </Typography>
      <img
        alt="Cubi12Logo"
        src={Cubi12Logo}
        style={isSmallScreen ? imgPhoneStyle : imgStyle}
      />
      <Chip
        label="¡Prueba la nueva malla interactiva!"
        variant="filled"
        sx={{
          marginTop: "2rem",
          marginBottom: "1rem",
          backgroundColor: Colors.primaryOrange,
          color: Colors.secondaryWhite,
        }}
      />
      <Link to={"/interactive-mesh"}>
        <BlueButton variant="contained" size="large">
          Malla Interactiva
        </BlueButton>
      </Link>

      <Typography variant="h6" component="h3" marginTop="3rem">
        Aquí encontrarás una malla currícular como ninguna otra y tu propio
        progreso en la carrera
      </Typography>
    </Grid>
  );
};

export default HomePage;
