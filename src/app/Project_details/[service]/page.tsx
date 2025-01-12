import ProjectForm from "@/components/Project-Details-Form";


import { FC } from 'react';

interface Params {
  service: string; // Adjust the type based on your actual data
}

interface SearchParams {
  Projectprice?: string; // Use optional chaining if the parameter might not be present
}

interface PagesProps {
  params: Params;
  searchParams: SearchParams;
}

const Pages: FC<PagesProps> = ({ params, searchParams }) => {
  const Service = params.service;
  const Projectprice = searchParams.Projectprice;
  console.log(Service, Projectprice);
  
  return (
    <div>
      <ProjectForm></ProjectForm>
    </div>
  );
};

export default Pages;
