import React from 'react';

const Home = () => {
  const pokeBallImageUrl = "https://i.pinimg.com/736x/0f/3e/07/0f3e077a861272e647d0b68826c6fc32.jpg";

  return (
    <div className="container text-center mt-5">
       <h1>Hola Aventurero/a</h1>
      <p>Escoge a tu compañero Pokemon!</p>
      <img
        src={pokeBallImageUrl}
        alt="Pokébola"
        className="img-fluid pokeball-image"
        style={{ width: '350px', height: '350px' }} 
        
      />

    </div>
  );
};

export default Home;