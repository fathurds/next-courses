"use client";
import Card from "@/components/core/Card";
import React from "react";
import { PostProps } from "./type";
import useGetPosts from "./useGetPosts";
import { Input } from "@/components/ui/input";
import useForm from "@/hooks/useForm";

interface FormProps {
  search: string;
}

export default function Content({ data }: { data: PostProps[] }) {
  const { data: posts } = useGetPosts(data);
  const { form, handleChange } = useForm<FormProps>({
    search: ""
  })

  const filteredPosts = posts.filter(el => el.title.indexOf(form.search) >= 0 || el.body.indexOf(form.search) >= 0)

  return (
    <div className="container">
      <Input className="my-5" value={form.search} onChange={handleChange} name="search" />
      <div className="grid grid-cols-4 gap-3">
        {filteredPosts.map((el) => (
          <Card title={el.title} key={el.id}>
            {el.body}
          </Card>
        ))}
      </div>
    </div>
  );
}
