import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import CreatePasswordPage from "./pages/CreatePasswordPage";
import NotFoundPage from './pages/NotFoundPage';
import SearchEntry from "./pages/SearchEntry";
import DisplayDocumentPage from "./pages/DisplayDocumentPage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
              <Route path="/login" element={<LoginPage />} />
                  <Route path="/reset" element={<ResetPasswordPage />} />
                  <Route path="/create" element={<CreatePasswordPage />} />
                  <Route path="/*" element={<NotFoundPage />} />


          <Route path="/menu" element={<SideBar />}>
              <Route path="/menu/newlodgement" element={<div>New Lodgement</div>} />
              <Route path="/menu/searchentry" element={<SearchEntry />} />
              <Route path="/menu/documents" element={<DisplayDocumentPage />} />
              <Route path="/menu/commondatasettings" element={<div>Common Data Settings</div>} />

          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;