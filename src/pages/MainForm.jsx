import React, { useEffect, useState } from "react";
import AppForm from "../components/AppForm";
import AppInput from "../components/AppInput";
import AppSelect from "../components/AppSelect";
import AppFileInput from "../components/AppFileInput";
import AppSubmitButton from "../components/AppSubmitButton";
import * as Yup from "yup";
import AppFormRadioButton from "../components/AppFormRadioButton";
import { Link } from "react-router-dom";
import { MdCircle } from "react-icons/md";
import api from "../api/api";
import { toast } from "react-toastify";
import moment from "moment";
import { HashLink } from "react-router-hash-link";
import Loading from "../components/Loading";

const MainForm = () => {
  const [info, setInfo] = useState({});
  const [categories, setCategories] = useState([
    { id: 1, name: "attendee" },
    { id: 2, name: "presenter" },
  ]);
  const [selectedFile, setSelectedFile] = useState("");
  let initialValues = {
    name: "",
    degree: "",
    job: "",
    occupation: "",
    institution: "",
    country: "",
    email: "",
    category: categories[0].name,
    presentation: { id: 0, name: "---" },
    telephone: "",
  };
  let presentationTypes = [
    { id: 1, name: "Oral" },
    { id: 2, name: "Poster" },
    { id: 3, name: "Virtual" },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    occupation: Yup.string().required().label("Occupation"),
    institution: Yup.string().required().label("Institution"),
    country: Yup.string().required().label("Country"),
    email: Yup.string()
      .email("please enter a valid email")
      .required()
      .label("Email"),
    presentation: Yup.object().required().label("Presentation"),
    telephone: Yup.string().required().label("Telephone"),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      let formData = new FormData();
      formData.append("attachment", selectedFile);
      formData.append("name", values.name);
      formData.append("degree", values.degree);
      formData.append("job", values.job);
      formData.append("occupation", values.occupation);
      formData.append("institution", values.institution);
      formData.append("country", values.country);
      formData.append("email", values.email);
      formData.append("category", values.category);
      formData.append("presentation", values.presentation.name);
      formData.append("telephone", values.telephone);

      console.log(values);
      await api.post("/invitations/create", formData);
      toast.success("your request has been sent");
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const getInfo = async () => {
    const res = await api.get("/conference-info");
    setInfo(res.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {isLoading && (
        <div className="fixed m-auto inset-0 w-screen flex items-center justify-center bg-black/10">
          <Loading />
        </div>
      )}
      <div className="grid grid-cols-12 h-full w-full pt-10 pb-10">
        <div className="col-span-1 lg:col-span-3 h-full"></div>
        <div className="col-span-10 lg:col-span-6 h-full">
          <div className="flex flex-col items-start sm:items-center justify-center pb-5">
            <p className="text-hpu text-lg lg:text-xl font-semibold">
              First International Medical Conference
            </p>
            <p className="text-hpu text-base lg:text-lg font-medium">
              22-26 August, 2022
            </p>
            <HashLink
              to={"#contact-us"}
              className="text-white bg-hpu rounded px-2 py-2 text-sm lg:text-base mt-2"
              smooth
            >
              Call for Abstracts
            </HashLink>
          </div>
          <div className="px-5 py-10 space-y-7 rounded-lg bg-white shadow-lg ring-2 ring-lightGray">
            <AppForm
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              <AppInput
                id={"name"}
                label={"Name:"}
                placeholder={"enter your name"}
              />
              <AppInput
                id={"degree"}
                label={"Degree:"}
                placeholder={"enter your degree"}
                isRequired={false}
              />
              <AppInput
                id={"job"}
                label={"Job Title:"}
                placeholder={"enter your job title"}
                isRequired={false}
              />
              <AppInput
                id={"occupation"}
                label={"Occupation:"}
                placeholder={"enter your occupation"}
              />
              <AppInput
                id={"institution"}
                label={"Institution/University/Organization:"}
                placeholder={
                  "enter the name of your institution, university or organization"
                }
              />
              <AppInput
                id={"country"}
                label={"Country:"}
                placeholder={"enter the name of your country"}
              />
              <AppInput
                id={"email"}
                label={"Your Email:"}
                placeholder={"enter your email"}
              />

              <div className="space-y-2">
                <label
                  htmlFor={"category"}
                  className="text-dark text-xs lg:text-sm focus:text-primary mb-1 mx-1 focus-within:text-primary"
                >
                  Category of Participation:
                  <span className="text-danger text-lg">*</span>
                </label>{" "}
                <div
                  role="group"
                  className="flex text-xs lg:text-sm items-center"
                >
                  {categories.map((cat) => (
                    <AppFormRadioButton
                      key={cat.id}
                      id={cat.id}
                      name={"category"}
                      value={cat.name}
                      text={cat.name}
                    />
                  ))}
                </div>
              </div>
              {/* <AppInput
              id={"presentation"}
              label={"Type of Presentation:"}
              placeholder={"enter the type of presentation"}
            /> */}
              <AppSelect
                name={"presentation"}
                label={"Type of Presentation:"}
                options={presentationTypes}
              />
              <AppInput
                id={"telephone"}
                label={"Telephone:"}
                placeholder={"enter your telephone number"}
              />
              <AppFileInput
                label={"Select Attachment"}
                selectedFile={selectedFile}
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
              <AppSubmitButton type="submit" isLoading={isLoading}>
                Submit
              </AppSubmitButton>
            </AppForm>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 h-full flex flex-col space-y-10  px-14">
          <div className="border-2 border-hpu w-full rounded-md hidden lg:flex items-center py-10 justify-center">
            <span className="text-lg px-2">
              Abstract Submission Deadline is{" "}
              <span className="text-hpu">
                {moment(info?.deadline).format("DD MMM YYYY")}
              </span>
            </span>
          </div>
          <div className="border-2 border-hpu h-fit w-full rounded-md hidden lg:flex flex-col pb-5 space-y-5">
            <span className="w-full text-center text-white bg-hpu py-2">
              Important Links
            </span>
            <div className="flex items-center text-hpu px-2 space-x-2">
              <MdCircle className="text-sm" />
              <Link to={"/conference-invitation"} className="font-medium">
                Conference Invitation
              </Link>
            </div>
            <div className="flex items-center text-hpu px-2 space-x-2">
              <MdCircle className="text-sm" />
              <Link
                to={"/abstract-submission-requirements"}
                className="font-medium"
              >
                Abstract Submission Requirements
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-3 h-full flex flex-col space-y-10 pb-10 px-14">
        <div className="border-2 border-hpu w-full rounded-md flex lg:hidden items-center py-10 justify-center">
          <span className="text-lg">
            Abstract Submission Deadline is{" "}
            <span className="text-hpu">
              {moment(info?.deadline).format("DD MMM YYYY")}
            </span>
          </span>
        </div>
        <div className="border-2 border-hpu h-fit w-full rounded-md flex lg:hidden flex-col pb-5 space-y-5">
          <span className="w-full text-center text-white bg-hpu py-2">
            Important Links
          </span>
          <div className="flex items-center text-hpu px-2 space-x-2">
            <MdCircle className="text-sm" />
            <Link to={"/conference-invitation"} className="font-medium">
              Conference Invitation
            </Link>
          </div>
          <div className="flex items-center text-hpu px-2 space-x-2">
            <MdCircle className="text-sm" />
            <Link
              to={"/abstract-submission-requirements"}
              className="font-medium"
            >
              Abstract Submission Requirements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
