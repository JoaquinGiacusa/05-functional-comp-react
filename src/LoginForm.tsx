import React from "react";
import { Boton } from "./Button";
import { TextField } from "./TextField";

type FormProps = {
  onLogin: (params: { email: string; password: string }) => any;
};
//en la propiedad que declaro es en lo que lo va a tirar para los otros(hacua arriba)

export function LoginForm(props: FormProps) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.psw.value,
    };
    //aca tira los datos para arriba(para el que lo invoca seria)
    props.onLogin(formData);
  };

  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <TextField inputType="email" labelText="Email" inputName="email" />
      <TextField inputType="password" labelText="Contraseña" inputName="psw" />
      <Boton>Ingresar</Boton>
    </form>
  );
}
