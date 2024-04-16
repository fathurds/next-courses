import useForm from '@/hooks/useForm';
import React from 'react'

interface FormProps {
  email: string;
  password: string;
}

export default function useLogin() {
  const { form, handleChange } = useForm<FormProps>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form)
  };

  return {
    form,
    handleChange,
    handleSubmit
  }
}
