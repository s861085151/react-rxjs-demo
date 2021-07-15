import React, { createContext, useState, useContext, memo } from "react";

const FormContext = createContext({});

const FormProvider = ({ initialValues, children }: any) => {
  const [values, setValues] = useState(initialValues);

  const value = {
    values,
    setValues
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

const TextField = memo(
  ({ name, value, setValues }: any) => {
    console.log(name);
    return (
      <input
        type="text"
        value={value}
        onChange={e => {
          e.persist();
          setValues((prev: any) => ({
            ...prev,
            [name]: e.target.value
          }));
        }}
      />
    );
  },
  (prev, next) => prev.value === next.value
);

const Field = ({ name }: any) => {
  const { values, setValues }: any = useContext(FormContext);

  const value = values[name];

  return <TextField name={name} value={value} setValues={setValues} />;
};

const App = () => (
  <FormProvider initialValues={{ firstName: "Marr", lastName: "Keri" }}>
    First name: <Field name="firstName" />
    <br />
    Last name: <Field name="lastName" />
  </FormProvider>
);

export default App;