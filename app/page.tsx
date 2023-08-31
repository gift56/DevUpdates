import { ProjectInterface } from "@/common.types";


type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

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

const Homepage = () => {
  return (
    <section className="flexStart flex-col paddings mb-16">
      <h1>Catergory</h1>
      <h1>Post</h1>
      <h1>Loadmore</h1>
    </section>
  );
};

export default Homepage;
