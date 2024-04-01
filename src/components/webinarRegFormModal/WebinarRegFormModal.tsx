import React from "react";
import styles from "./WebinarRegFormModal.module.scss";
import { useForm } from "react-hook-form";
import { validateEmail, validateName, validatePhone, alphabetsOnly } from "@/lib/constants/common";
import http from "@/lib/http/http";

function WebinarRegFormModal({ setIndex, onClose, setGrowthModalState }: any) {
  type FormData = {
    name: string;
    mobile: string;
    email: string;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });



  const onSubmit = async (data: any) => {
    const res = await http("/partners/registerWebinar",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    const datares = await res.json();


    if (datares.status === 0) {
      setIndex(1)

    }
  };

  return (
    <div className={`${styles.formWrap}`}>
      <div className={`${styles.modalHeader}`}>
        <h2 className={`${styles.modaltitle}`}>Register For Webinar</h2>
        <button
          type="button"
          className={`${styles.closepp}`}
          aria-label="Close"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.modelBody}`}>
        <ul className={`${styles.formContent}`}>
          <li>
            <div className={`${styles.formGroup}`}>
              <label>
                Name <sup>*</sup>
              </label>
              <input
                onKeyDown={alphabetsOnly}
                type="text"
                id="partnerName"
                className={`${styles.formControl}`}
                autoFocus
                {...register("name", validateName)}
              />
              {errors.name && (
                <span className={`${styles.textDanger}`} id="partner-valid">
                  {errors.name.message}
                </span>
              )}
            </div>
          </li>
          <li>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="mobleNo">
                Mobile Number <sup>*</sup>
              </label>
              <input
                onInput={(e: any) => setValue("mobile", e.target.value.replace(/([a-zA-Z]|\W)+/g, ""))}
                {...register("mobile", {
                  ...validatePhone
                })}
                type="text"
                className={`${styles.formControl}`}
                id="mobleNo"
                maxLength={10}
              />
              {errors.mobile && (
                <span className={`${styles.textDanger}`} id="partner-valid">
                  {errors.mobile.message}
                </span>
              )}
            </div>
          </li>
          <li>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="emailID">
                Email id <sup>*</sup>
              </label>
              <input
                {...register("email", {
                  ...validateEmail
                })}
                type="text"
                className={`${styles.formControl}`}
              />
              {errors.email && (
                <span className={`${styles.textDanger}`} id="partner-valid">
                  {errors.email.message}
                </span>
              )}
            </div>
          </li>
        </ul>
        <div className={`${styles.dFlex} ${styles.justifyCenter}`}>
          <button
            type="submit"
            className={`${styles.btn} ${styles.sumbitbtnpop}`}
          >
            Webinar Registration
          </button>
        </div>
      </form>
    </div>
  );
}

export default WebinarRegFormModal;
