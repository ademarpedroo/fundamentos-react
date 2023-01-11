import React from 'react';

export default function Post(prosps) {
  return (
    <>
      <article>
        <strong>{prosps.title}</strong><br />
        <small>{prosps.subtitle}</small>
      </article>
      <br />
    </>
  )
}