import React, { useState } from "react";

export default function useForm<T>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<any> | string, value?: any) => {
    if(typeof e === "string") {
      setForm((prev) => ({
        ...prev,
        [e]: value,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  }

  return {
    form,
    handleChange,
  };
}
