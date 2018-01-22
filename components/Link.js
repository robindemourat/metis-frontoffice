import React from 'react';
import Link from 'next/link'

export default ({
  to,
  children
}) => {
  let url;
  let as;
  
  if (to.view === 'composition') {
    url = '/' + to.view + '?id=' + to.index;
    as = '/' + to.view + '/' + to.index;
  } else {
    url = '/';
    as = '/'
  }
  return (
    <Link prefetch href={url} as={as}>
      <a className="link">{children}</a>
    </Link> 
  );
}