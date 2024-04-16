"use client"
import React from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import useLogin from './useLogin';
import { ImageLogin } from '@/assets/image';
import LayoutClient from '@/app/LayoutClient';

export default function Login() {
  const { form, handleChange, handleSubmit } = useLogin();

  return (
    <LayoutClient>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mb-20">
        <div className="max-w-[380px]">
          <div className="text-[30px] md:text-[40px] text-[#132B50] mb-[26px]">
            <b>Continue</b> Study, <br /> Finish Your <b>Goals</b>
          </div>
          <form onSubmit={handleSubmit}>
            <Input value={form.email} onChange={handleChange} placeholder="Your email address" label="Email Address" type="email" name="email" />
            <Input value={form.password} onChange={handleChange} placeholder="Password" label="Password" name="password" type="password" />
            <Button className="w-full mt-[15px]" size="lg" type="submit">Masuk</Button>
          </form>
        </div>
        <div>
          <Image src={ImageLogin} alt="review" className="m-auto" />
        </div>
      </div>
    </LayoutClient>
  )
}
