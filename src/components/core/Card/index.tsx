import React, { ReactNode } from "react";
import {
  Card as CardRadix,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title?: string;
  description?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export default function Card({title, description, footer, children}: CardProps) {
  return (
    <CardRadix>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </CardRadix>
  );
}
