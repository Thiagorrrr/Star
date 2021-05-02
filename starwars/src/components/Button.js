function Button({RandomPlanet}) {
    return (
      <button className="button" onClick={() => RandomPlanet() }>
          Next
      </button> 
    );
  }
  
  export default Button;
  