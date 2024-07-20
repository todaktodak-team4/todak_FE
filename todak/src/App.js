import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlantTreeStepOne from "./pages/PlantTree_stepOne";
import PlantTreeStepTwo from "./pages/PlantTree_stepTwo";
import PlantCompleteModal from "./pages/PlantCompleteModal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plantTreeStepOne" element={<PlantTreeStepOne />} />
        <Route path="/plantTreeStepTwo" element={<PlantTreeStepTwo />} />
        <Route path="/completeModal" element={<PlantCompleteModal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
