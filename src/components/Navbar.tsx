import type { FC } from 'react';
import Link from 'next/link';

export type NavbarProps = {
  something?: any;
};

export const Navbar: FC<NavbarProps> = ({ something, ...props }) => {
  return (
    <div className="h-[62px] w-full flex justify-center">
      <div className="h-full w-full max-w-6xl flex items-center px-12 justify-between" {...props}>
        
      <Link href="/"><h2 className="text-2xl font-newsreader font-semibold">Tim Stark</h2></Link>
        <div className="flex gap-6">
          <Link href="#">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#">Contact</Link>
          <Link href="https://docs.google.com/document/d/15bet1sTfrKPRN7pOPpI_3DOL0TMJysrxlmUCPI_Xxkg/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</Link>
        </div>
      </div>
    </div>
  )
};