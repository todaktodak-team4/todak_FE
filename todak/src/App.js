import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlantTreeStepOne from "./pages/PlantTree_stepOne";
import PlantTreeStepTwo from "./pages/PlantTree_stepTwo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plantTreeStepOne" element={<PlantTreeStepOne />} />
        <Route path="/plantTreeStepTwo" element={<PlantTreeStepTwo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
