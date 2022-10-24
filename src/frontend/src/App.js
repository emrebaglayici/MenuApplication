import './App.css';
import * as React from 'react';
import {Container, CssBaseline} from "@mui/material";
import Navi from "./layouts/Navi";
import Hot from "./layouts/Drink/Hot";
import Cold from "./layouts/Drink/Cold";
import Beverage from "./layouts/Drink/Beverage";
import Fresh from "./layouts/Drink/Fresh";
import Detox from "./layouts/Drink/Detox";
import IceTea from "./layouts/Drink/IceTea";
import Breakfast from "./layouts/Food/Breakfast";
import Bowl from "./layouts/Food/Bowl";
import Toast from "./layouts/Food/Toast";
import Starter from "./layouts/Food/Starter";
import Quesadilla from "./layouts/Food/Quesadilla";
import HealthyBowlSalad from "./layouts/Food/HealthyBowlSalad";
import Salad from "./layouts/Food/Salad";
import Pizzetta from "./layouts/Food/Pizzetta";
import Burger from "./layouts/Food/Burger";
import Penne from "./layouts/Food/Penne";
import Noodle from "./layouts/Food/Noodle";
import MainCourse from "./layouts/Food/MainCourse";
import Dessert from "./layouts/Food/Dessert";
import LogoDrink from "./layouts/LogoDrink";
import LogoFood from "./layouts/LogoFood";
import Footer from "./Footer";
import Login from "./layouts/Admin/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./layouts/Admin/Dashboard";

function App() {
    return (
        <React.Fragment>
            <CssBaseline />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                        <Container maxWidth="lg" sx={{bgcolor: '#F2EDE5', height: 'auto'}}>
                            <Navi/>
                            <LogoDrink/>
                            <Hot/>
                            <Cold/>
                            <Beverage/>
                            <Fresh/>
                            <Detox/>
                            <IceTea/>
                            <Footer/>
                        </Container>
                        <Container maxWidth="lg" sx={{ bgcolor: '#18425C', height: 'auto' ,color:'white' }}>
                        <LogoFood/>
                        <Breakfast/>
                        <Bowl/>
                        <Toast/>
                        <Starter/>
                        <Quesadilla/>
                        <HealthyBowlSalad/>
                        <Salad/>
                        <Pizzetta/>
                        <Burger/>
                        <Penne/>
                        <Noodle/>
                        <MainCourse/>
                        <Dessert/>
                        </Container>
                        </>
                    }/>
                    <Route path="/admin" element={
                        <Login/>
                    }/>
                    <Route path="/dashboard" element={
                        <Dashboard/>
                    }/>
                    <Route path="*" element={
                        <div>Not Found</div>
                    }/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
