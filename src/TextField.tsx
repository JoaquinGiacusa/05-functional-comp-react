import React from "react";

type PropsTextField = {
  labelText?: string;
  inputType: string;
  inputName: string;
};

export function TextField(props: PropsTextField) {
  const label = props.labelText || props.inputName;
  return (
    <div>
      <label>{label}</label>
      <div>
        <input
          className="inputText"
          type={props.inputType}
          name={props.inputName}
        />
      </div>
    </div>
  );
}
