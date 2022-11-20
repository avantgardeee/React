import styles from "./FormsControls.module.css"

export const FormsControl=({input,meta,child,...props})=>{
    const hasError=meta.touched && meta.error
    return(
        <div className={styles.formControl+ " "+ (hasError? styles.error:"")}>
            <div>
                <props.typeField {...input} {...props}/>
            </div>
            { hasError &&<span>{meta.error}</span>}
        </div>
    )
}


