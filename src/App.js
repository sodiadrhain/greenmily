import React, {Component} from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import TopSection from "./components/sections/TopSection";
import HowItWorks from "./components/sections/HowItWorks";
import ForFarmers from "./components/sections/ForFarmers";
import Subscribe from "./components/sections/Subscribe";

class App extends Component {

render(){
  return(
    <div>
      <Header />
      <TopSection />
      <HowItWorks />
      <ForFarmers />
      <Subscribe />
      <Footer />
    </div>
  );
}

}

export default App;