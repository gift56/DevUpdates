"use client"

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";

import { SessionInterface } from "@/common.types";

const ProfileMenu = ({ session }: { session: SessionInterface }) => {
  return <div>ProfileMenu</div>;
};

export default ProfileMenu;
