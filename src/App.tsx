import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Partnership from "./pages/Partnership";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Funding from "./pages/Funding";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";
import AfricaMoroccoAI from "./pages/programs/AfricaMoroccoAI";
import SmartGreenCities from "./pages/programs/SmartGreenCities";
import Ai4Education from "./pages/programs/Ai4Education";
import AutismSummit from "./pages/programs/AutismSummit";
import AutismToolkit from "./pages/resources/AutismToolkit";
import TrainingMaterials from "./pages/resources/TrainingMaterials";
import FiscalPolicyBriefs from "./pages/resources/FiscalPolicyBriefs";
import AISocialImpact from "./pages/resources/AISocialImpact";
import AIInnovationHub from "./pages/goals/AIInnovationHub";
import AutismMentalHealth from "./pages/goals/AutismMentalHealth";
import GreenSmartCities from "./pages/goals/GreenSmartCities";
import PanAfricanNetwork from "./pages/goals/PanAfricanNetwork";
import FiscalGovernance from "./pages/goals/FiscalGovernance";
import GlobalPolicyDiplomacy from "./pages/goals/GlobalPolicyDiplomacy";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/africa-morocco-ai" element={<AfricaMoroccoAI />} />
          <Route path="/programs/smart-green-cities" element={<SmartGreenCities />} />
          <Route path="/programs/ai4education" element={<Ai4Education />} />
          <Route path="/programs/autism-summit" element={<AutismSummit />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/autism-toolkit" element={<AutismToolkit />} />
          <Route path="/resources/training-materials" element={<TrainingMaterials />} />
          <Route
            path="/resources/fiscal-policy-briefs"
            element={<FiscalPolicyBriefs />}
          />
          <Route path="/resources/ai-social-impact" element={<AISocialImpact />} />
          <Route path="/goals/ai-innovation-hub" element={<AIInnovationHub />} />
          <Route path="/goals/autism-mental-health" element={<AutismMentalHealth />} />
          <Route path="/goals/green-smart-cities" element={<GreenSmartCities />} />
          <Route path="/goals/pan-african-network" element={<PanAfricanNetwork />} />
          <Route path="/goals/fiscal-governance" element={<FiscalGovernance />} />
          <Route
            path="/goals/global-policy-diplomacy"
            element={<GlobalPolicyDiplomacy />}
          />
          <Route path="/events" element={<Events />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
