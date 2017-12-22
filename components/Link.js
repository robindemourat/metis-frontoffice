import React from 'react';
import Link from 'next/link'

export default ({
  to,
  children
}) => {
  const url = '/' + to.view + '?id=' + to.index;
  const as = '/' + to.view + '/' + to.index;
  return (
    <Link prefetch href={url} as={as}>
      <a>{children}</a>
    </Link> 
  );
}