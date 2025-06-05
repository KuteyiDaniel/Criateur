"use client";

import React, { useState } from "react";
import styles from "@/css/components/waitlistform.module.scss";

type TextInputProps = {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
  placeholder,
  type = "text",
  value,
  onChange,
}: TextInputProps) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

function WaitListForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessType: "",
    title: "",
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  return (
    <div className={styles.waitList}>
      <div className={styles.formCon}>
        <form>
          <div className={styles.inputFieldsCon}>
            <TextInput
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange("fullName")}
            />
            <TextInput
              placeholder="Enter Email"
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
            />
            <TextInput
              placeholder="Enter Business Type"
              value={formData.businessType}
              onChange={handleChange("businessType")}
            />
            <TextInput
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange("title")}
            />
          </div>

          <div className={styles.checkboxItemsCon}>
            <div style={{ marginBottom: "5px" }}>
              <input type="checkbox" id="consent" />
              <label htmlFor="consent" style={{marginLeft: "1vw", fontSize: "14px"}}>
                I consent to my submitted data being collected and stored.{" "}
                <a
                  href="/privacy"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  Privacy Notice
                </a>
              </label>
            </div>

            <div>
              <input type="checkbox" id="subscribe" />
              <label htmlFor="subscribe" style={{marginLeft: "1vw", fontSize: "14px"}}>
                I would like to subscribe to the mailing list
              </label>
            </div>
          </div>

          <div className={styles.buttonNInfoCon}>
            <button className={styles.submit}>Join waitlist</button>
            <p className={styles.secText}>
              We will never share your details with third parties. We won’t spam
              you
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WaitListForm;
