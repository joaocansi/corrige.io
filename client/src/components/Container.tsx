import React, { ReactNode } from 'react';
import Head from 'next/head';

export interface ContainerProps {
  children: ReactNode;
  title: string;
}

const Container: React.FC<ContainerProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default Container;
