import './App.css';
import * as React from 'react';
import {Button, Container, CssBaseline} from "@mui/material";
import Drink from "./layouts/Drink";
import Navi from "./layouts/Navi";
function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" sx={{ bgcolor: '#F2EDE5', height: '100vh' }}>
                <Navi></Navi>
                <Drink></Drink>
            </Container>
        </React.Fragment>
    );
}

export default App;
