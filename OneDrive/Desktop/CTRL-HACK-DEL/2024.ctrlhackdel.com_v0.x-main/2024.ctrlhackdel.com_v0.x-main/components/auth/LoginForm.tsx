"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { LoginSchema } from "@/lib/validators/auth";

interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps) => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
    }
  };

  return (
    <Form {...form}>
      <form
        className="w-full max-w-sm space-y-2 rounded-lg border-2 border-amber-700 bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-400 p-4 shadow-[2px_2px_24px_4px] shadow-amber-900/50 md:p-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-semibold md:text-2xl">Login</h2>
        <hr className="border-t-2 border-amber-700 pb-1" />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="bebidawg@gmail.com"
                  onInvalid={(e) => {
                    e.preventDefault();
                    toast.error("Invalid email.");
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="password" placeholder="********" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
