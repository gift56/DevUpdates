"use client"

import { ProjectInterface, SessionInterface } from "@/common.types";


type ProjectProps = {
  type: string,
  session: SessionInterface,
  project?: ProjectInterface
}

const ProjectForm = () => {
  return <div>ProjectForm</div>;
};

export default ProjectForm;
