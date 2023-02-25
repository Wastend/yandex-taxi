import { Box } from "@mui/material";
import Header from "./common/Header";
import Marketing from "./components/Marketing";
import Privileges from "./components/Privileges";
import SelectCar from "./components/SelectCar";
import StartWork from "./components/StartWork";
import Mobile from "./components/Mobile";
import RequestContact from "./components/RequestContact";
import FormApplication from "./components/FormApplication";
import Footer from "./common/Footer";

function App() {
  return (
    <Box>
      <Header />
      <Marketing />
      <SelectCar />
      <StartWork />
      <Privileges />
      <Mobile />
      <RequestContact />
      <FormApplication/>
      <Footer/>
    </Box>


  );
}

export default App;
