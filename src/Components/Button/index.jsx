import React from "react";
import classes from "./Button.module.css";
import mergeClass from "../../utils/helper";

export default function Button({ className, buttonText, variant }) {
  return (
    <div>
      <button
        variant={variant}
        className={mergeClass(classes.button, className)}
      >
        {buttonText}
      </button>
    </div>
  );
}
