import React, { useContext, useState } from "react";
import * as Yup from "yup";
import AppSubmitButton from "../../components/AppSubmitButton";
import AppForm from "../../components/AppForm";
import AppInput from "../../components//AppInput";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import api from "../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../api/user";
import { setToken } from "../../api/token";
import UserContext from "../../contexts/userContext";
import WindowContext from "../../contexts/windowContext";
import logo from "../../assets/logo.png";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().label("Password"),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);
  const windowContext = useContext(WindowContext);
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };

  const handleLogin = async (values) => {
    setIsLoading(true);
    try {
      const res = await api.post("/login", {
        username: values.username,
        password: values.password,
      });

      userContext.setUser(res.data.user);
      setUser(res.data.user);
      setToken(res.data.token);

      navigate("/invitations");
    } catch (err) {
      if (err?.response?.status === 401) {
        toast.error("wrong username or password");
      } else {
        toast.error("something went wrong");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="h-screen w-screen overflow-clip flex justify-center items-center  bg-hpu">
      <div className="w-full md:w-3/6 lg:w-3/12 bg-white shadow shadow-gray flex flex-col items-center relative rounded-lg">
        <img
          src={logo}
          alt="logo"
          className="w-32 h-32 rounded-full absolute -top-16 border-8 border-hpu"
        />

        <h2 className="text-dark my-4 text-lg lg:text-xl mt-20">Login</h2>
        <div className="flex flex-col w-full px-7 2xl:px-14 pb-10">
          <div className={`flex flex-col justify-center relative space-y-5`}>
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleLogin(values)}
            >
              <AppInput
                id={"username"}
                label={"Username"}
                placeholder={"enter your username"}
                type="text"
                Icon={AiOutlineUser}
                isRequired={false}
              />
              <AppInput
                id={"password"}
                label={"Password:"}
                placeholder={"enter your password"}
                type="password"
                Icon={AiOutlineKey}
                isRequired={false}
              />
              <AppSubmitButton isLoading={isLoading}>Login</AppSubmitButton>
            </AppForm>
          </div>
        </div>
        {/* <div className="h-full w-full flex justify-end items-end">
          <div className="h-2 bg-hpu w-full"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
