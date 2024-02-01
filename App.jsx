
import "bootstrap/dist/css/bootstrap.min.css";
import './App.module.css'
import Navbar from "./components/navbar";
import Home from "./components/home"; 
import Container  from "./components/container";

function App() {
  return (
    <>
      <Container >
        <Navbar></Navbar> 
        <Home></Home>
      </Container>
    </>
  );
}

export default App;
