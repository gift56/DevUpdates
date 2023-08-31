"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CardProps = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};

const ProjectCard = ({
  id,
  image,
  title,
  name,
  avatarUrl,
  userId,
}: CardProps) => {
  const [randomLikes, setRandomLikes] = useState(0);
  const [randomViews, setRandomViews] = useState("");

  useEffect(() => {
    setRandomLikes(Math.floor(Math.random() * 10000));
    setRandomViews(
      String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + "k")
    );
  }, []);
  return <div>ProjectCard</div>;
};

export default ProjectCard;
