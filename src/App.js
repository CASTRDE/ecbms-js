import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
