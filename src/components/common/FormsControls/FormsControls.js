import styles from "./FormsControls.module.css"
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
import React from "react";

export const FormsControl = ({input, meta:{error,touched}, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <props.typeField {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validate, component, props={},text="") =>
    <div>
        <Field type={'text'} name={name} placeholder={placeholder} component={component} validate={validate}
               typeField={"input"} {...props}/>{text}
    </div>


