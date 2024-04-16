import useForm from '@/hooks/useForm';
import React from 'react'
import { useRouter } from 'next/navigation'

interface FormProps {
  name: string;
  email: string;
  password: string;
  occupation: string;
}

export default function useRegister() {
  const { form, handleChange } = useForm<FormProps>({
    name: "",
    email: "",
    password: "",
    occupation: ""
  });

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form)
    router.push("/login")
  };

  return {
    form,
    handleChange,
    handleSubmit
  }
}
