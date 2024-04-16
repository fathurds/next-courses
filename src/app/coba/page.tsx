import React from 'react'
import Content from './content'
import axiosInstance from '@/lib/axios'

async function getData() {
  const res = await axiosInstance({
    url: "posts"
  });

  return res.data;
}

export default async function Coba() {
  const data = await getData();

  return <Content data={data} />
}
