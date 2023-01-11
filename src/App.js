import React from 'react';
import Post from './Post'

// Props -> Propriedades
function App() {
  return (
    <>
      <h1>Jstack's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post 
      title="Titulo da noticia 01"
      subtitle="Subtitulo da noticia 01"
      />
      <Post 
      title="Titulo da noticia 02"
      subtitle="Subtitulo da noticia 02"
      />
      <Post 
      title="Titulo da noticia 03"
      subtitle="Subtitulo da noticia 03"
      />
      <Post 
      title="Titulo da noticia 04"
      subtitle="Subtitulo da noticia 04"
      />
    </>
  );
}

export default App;