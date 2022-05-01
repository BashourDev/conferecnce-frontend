import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import UserContext from "../../contexts/userContext";
import AppButton from "../AppButton";
import AppModal from "./AppModal";
import AppForm from "../AppForm";
import api from "../../api/api";
import AppInput from "../AppInput";
import AppSubmitButton from "../AppSubmitButton";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  deadline: Yup.string().required(),
});

const UserUpdate = ({ isOpen, setIsOpen, info }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [initialValues, setInitialValues] = useState({
    name: "",
    deadline: "",
  });

  const getInfo = async () => {
    const res = await api.get(`/conference-info`);
    setInitialValues(res.data);
  };

  useEffect(() => {
    getInfo();
  }, [isOpen]);

  const handleSubmit = async (values) => {
    setIsUpdating(true);
    try {
      await api.put(`/conference-info/update`, values);
      toast.success("info updated successfully");
      onClose();
    } catch (error) {
    } finally {
      setIsUpdating(false);
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <AppModal isOpen={isOpen} onClose={onClose} title={"Info"}>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {errorMessage && <span className="text-danger">{errorMessage}</span>}
        <div className="space-y-2">
          <AppInput
            id={"name"}
            placeholder={"conference name"}
            label={"Conference Name:"}
            containerClassName="grow"
          />
          <AppInput
            id={"deadline"}
            placeholder={"deadline"}
            label={"Deadline:"}
            type={"date"}
            containerClassName="grow"
          />
        </div>

        <div className="grid grid-cols-2 gap-10 justify-between mt-5">
          <AppButton
            type="button"
            onClick={() => setIsOpen(false)}
            className={
              "border-dark text-dark  bg-lightGray hover:bg-dark hover:text-white"
            }
          >
            cancel
          </AppButton>
          <AppSubmitButton isLoading={isUpdating}>Edit</AppSubmitButton>
        </div>
      </AppForm>
    </AppModal>
  );
};

export default UserUpdate;
