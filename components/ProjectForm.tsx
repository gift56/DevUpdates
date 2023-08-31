"use client";

import { ProjectInterface, SessionInterface } from "@/common.types";
import { FormEvent } from "react";

type ProjectProps = {
  type: string;
  session: SessionInterface;
  project?: ProjectInterface;
};

const ProjectForm = ({ type, session, project }: ProjectProps) => {

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  
  return <form onSubmit={handleFormSubmit} className="flexStart form"></form>;
};

export default ProjectForm;
