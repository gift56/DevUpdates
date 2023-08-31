import { ProjectInterface } from "@/common.types";
import { Categories } from "@/components";
import { fetchAllProjects } from "@/lib/actions";
import Link from "next/link";

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
};

type Props = {
  searchParams: SearchParams;
};

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

const Homepage = async ({ searchParams: { category, endcursor } }: Props) => {
  const data = await fetchAllProjects() as ProjectSearch;

  // const projectsToDisplay = data?.projectSearch?.edges || [];

  // if (projectsToDisplay.length === 0) {
  //   return (
  //     <section className="flexStart flex-col paddings">
  //       <Categories />

  //       <p className="no-result-text text-center">
  //         No projects found, 😥. Click <Link href="/create-project" className="font-semibold text-primary-purple">Share Project</Link> to get
  //         started.
  //       </p>
  //     </section>
  //   );
  // }

  return (
    <section className="flexStart flex-col paddings mb-16">
      <h1>Catergory</h1>
      <h1>Post</h1>
      <h1>Loadmore</h1>
    </section>
  );
};

export default Homepage;
