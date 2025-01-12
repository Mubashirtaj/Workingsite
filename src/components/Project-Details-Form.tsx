"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "./ui/checkbox";
import { format } from "date-fns";
import VoiceMessage from "./VoiceMesssage";
const Projectdiv = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [number, setnumber] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>();
  const [Page, setPage] = React.useState<number | null>(null);

  // const handleChange = (newValue) => {
  //   // If newValue is defined, set it as a string; otherwise, set an empty string
  //   setValue(newValue ? newValue : "");
  // };
  const [fileName, setFileName] = React.useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      setFileName(file.name); // Update the state with the file name
    } else {
      setFileName(""); // Clear the file name if no file is selected
    }
  };
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Convert the string value to a number
    const numberValue = value ? parseInt(value, 10) : null; // Use parseFloat if you want to allow decimal numbers

    // Check if numberValue is less than 0 and set it to 0 if so
    const validPageValue =
      numberValue !== null && numberValue < 0 ? 0 : numberValue;

    // Calculate the price based on the number of pages
    const calculatedPrice = validPageValue !== null ? validPageValue * 96 : 0;
    setPage(calculatedPrice);
  };
  const formatPrice = (Page: number | null): string => {
    if (Page === null) return "0";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Page);
  };

  return (
    <div className="bg-slate-950 w-full text-white h-full">
      <div className="w-full flex flex-col items-center">
        <div className="bg-black  w-full md:w-[500px] px-4 py-6  md:px-11 md:py-7">
          <div className="w-full  md:w-[400px] overflow-hidden">
            <h1 className="text-center	text-4xl Bebas">Enter Details</h1>
            <div className="name flex  md:flex-row gap-4 my-5">
              <div className=" w-6/12">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="name"
                  id="name"
                  className="bg-black"
                  placeholder="Name"
                />
              </div>
              <div className="w-6/12">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  className="bg-black"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="grid  gap-1.5 my-5">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>

            <div className=" flex flex-row gap-4 my-5 w-full">
              <div className="w-6/12">
                <Select disabled>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Web Development" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Web Development</SelectLabel>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-6/12 text-black">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between bg-black text-white"
                    >
                      {value
                        ? frameworks.find(
                            (framework) => framework.value === value
                          )?.label
                        : "Select framework..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(
                                  currentValue === value ? "" : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              {framework.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  value === framework.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className=" flex flex-row gap-4  my-6 w-full">
              <div className="w-6/12">
                <Label htmlFor="name">Pages</Label>
                <Input
                  type="number"
                  id="name"
                  className="bg-black"
                  placeholder="Name"
                  onChange={handlePageChange}
                />
              </div>
              <div className="w-6/12">
                <Label htmlFor="message">Project DeadLine</Label>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-black",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <p className="text-xs	">
              If DO you Have Page more than 3 Please Choose Date After 7 days
            </p>
            <div className="name   flex flex-row gap-4  my-6 w-full">
              <div className="w-6/12">
                <Label htmlFor="name">Country</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="United Kingdom" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="United Kingdom">
                        United Kingdom
                      </SelectItem>
                      <SelectItem value="apple">United State</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-6/12 rounded-sm	absulote ">
                <Label htmlFor="email">Phone Number</Label>
                <div className="border-number  text-black">
                  <PhoneInput
                    country={"us"}
                    value={number}
                    onChange={(phone: string) => setnumber(phone)}
                  />
                </div>
              </div>
            </div>

            <div className="">
              <Label>Listen It</Label>
              <VoiceMessage />
            </div>

            <div className=" flex flex-row relative my-11 ">
              <div className="flex flex-col w-5/6	 gap-4 ">
                <Label className="text-lg		">Sample File(optional)</Label>

                <p>You can upload a file to use as a sample for your order.</p>
              </div>
              <div className=" ">
                <div className="Foldercontainer">
                  <div className="folder">
                    <div className="top" />
                    <div className="bottom" />
                  </div>
                  <label className="custom-file-upload">
                    <input
                      className="title"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <p>{fileName ? `${fileName}` : "Selected file: "}</p>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 my-8 ">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>
            <div className="relative">
              <Button>Submit</Button>

              <span className="text-4xl text-white absolute right-2">
                {formatPrice(Page)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectdiv;
