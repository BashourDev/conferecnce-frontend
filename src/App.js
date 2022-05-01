import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "./api/api";
import { getUser } from "./api/user";
import UserContext from "./contexts/userContext";
import Invitations from "./pages/admin/Invitations";
import Login from "./pages/admin/Login";
import ConferenceInvitation from "./pages/ConferenceInvitation";
import Container from "./pages/Container";
import MainForm from "./pages/MainForm";
import Requirements from "./pages/Requirements";

function App() {
  const [user, setUser] = useState(() => {
    if (!getUser()) {
      return {};
    }

    return getUser();
  });
  const [info, setInfo] = useState({});

  const getInfo = async () => {
    const res = await api.get("/conference-info");
    setInfo(res.data);
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <div className="min-h-screen bg-light font-roboto">
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <ToastContainer className={"z-50"} autoClose={5000} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Container info={info} />}>
            <Route path="" element={<MainForm />} />
            <Route
              path="/conference-invitation"
              element={<ConferenceInvitation info={info} />}
            />
            <Route
              path="/abstract-submission-requirements"
              element={<Requirements info={info} />}
            />
          </Route>
          <Route path="/invitations" element={<Invitations info={info} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
