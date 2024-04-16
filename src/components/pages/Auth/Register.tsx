"use client"
import { ImageRegister } from '@/assets/image'
import Select from '@/components/elements/Select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'
import useRegister from './useRegister'
import LayoutClient from '@/app/LayoutClient'

export default function Register() {
  const { form, handleChange, handleSubmit } = useRegister();

  return (
    <LayoutClient>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mb-20">
        <div className="max-w-[380px]">
          <div className="text-[30px] md:text-[40px] text-[#132B50] mb-[26px]">
            <b>Grow Skills</b> From, <br /> Anywhere
          </div>
          <form onSubmit={handleSubmit}>
            <Input onChange={handleChange} value={form.name} placeholder='Your name' label='Full Name' name='name' />
            <Input onChange={handleChange} value={form.email} placeholder="Your email address" label="Email Address" type="email" name="email" />
            <Input onChange={handleChange} value={form.password} placeholder="Password" label="Password" name="password" type="password" />
            <Select onValueChange={(e: string) => handleChange("occupation", e)} value={form.occupation} label='Occupation' placeholder='Select your focus' options={[{label: "light", value: "light"}, {label: "dark", value: "dark"}]} />
            <Button className="w-full mt-[15px]" size="lg" type="submit">Daftar</Button>
          </form>
        </div>
        <div>
          <Image src={ImageRegister} alt="review" className="m-auto" />
        </div>
      </div>
    </LayoutClient>
  )
}
