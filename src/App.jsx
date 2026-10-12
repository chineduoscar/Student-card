import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import CountryList from "./pages/CountryList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<Student />} />
        <Route path="/country" element={<CountryList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
