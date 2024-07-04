"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Search request should be at least 2 characters.",
  }),
  type: z.enum(["people", "planets", "starships"]),
});

const Search = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      type: "people",
    },
  });

  const onSubmit = useCallback(
    (data: z.infer<typeof FormSchema>) => {
      router.push(`?type=${data.type}&search=${data.name}`);
    },
    [router]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-[320px]"
                  placeholder="Type here..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={"people"}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="people">People</SelectItem>
                  <SelectItem value="planets">Planets</SelectItem>
                  <SelectItem value="starships">Starships</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
        <Button type="submit">Trooople it</Button>
      </form>
    </Form>
  );
};

export default Search;
