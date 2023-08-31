"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

type Props = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
};

const CustomMenu = () => {
  return <div>CustomMenu</div>;
};

export default CustomMenu;
