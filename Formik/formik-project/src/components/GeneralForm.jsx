import React from "react";
import { useFormik } from "formik";
const GeneralForm = () => {
  const {values,errors,handleChange,handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age:'',
      password:'',
      Confirmpassword:''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Mail Adresinizi Giriniz."
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı Giriniz."
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi Giriniz."
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Şifre Tekrar</label>
          <input
            type="password"
            id="Confirmpassword"
            placeholder="Şifrenizi Tekrar Giriniz."
            value={values.Confirmpassword}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
};

export default GeneralForm;
