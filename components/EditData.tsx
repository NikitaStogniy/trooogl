"use client";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface EditDataProps {
  data: string;
  url: string;
}

const EditData: React.FC<EditDataProps> = ({ data, url }) => {
  const router = useRouter();
  const [input, setInput] = useState(data);
  const [name, setName] = useState(data);

  useEffect(() => {
    const localDataName = localStorage.getItem("dataName");
    const localDataId = localStorage.getItem("dataId");
    if (localDataId === url && localDataName) {
      setName(localDataName);
    }
  }, [url]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("dataId", url);
    localStorage.setItem("dataName", input);
    router.refresh();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full" variant="outline">
          Edit
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-black text-white border-zinc-800 gap-2 flex flex-col">
        <Label htmlFor="width">Edit name</Label>
        <Input
          onChange={handleChange}
          id="width"
          value={input}
          className="col-span-2 h-8"
        />
        <Button className="w-full" onClick={handleSave}>
          Save
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default EditData;
