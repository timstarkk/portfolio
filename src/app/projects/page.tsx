import type { FC } from 'react';

export type ProjectProps = {
  something: any;
};

const Projects: FC<ProjectProps> = ({ something, ...props }) => {
  return <div className="relative overflow-none" {...props}>
  <header className="h-[551px] bg-spaceGray text-spaceWhite flex flex-col justify-center items-center gap-4 bg-[url('../../astro.avif')] bg-cover bg-[right_200px_bottom_200px] bg-no-repeat">
    <h2 className="text-6xl font-newsreader font-bold">[...projects]</h2>
  </header>
</div>;
};

export default Projects;