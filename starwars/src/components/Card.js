function Card({data}) {
  return (
    <div className="card">
        <h2 className="card__title">{data.name}</h2>

        <div className="card__features"> 
            <ul className="card__list">
              <li className="card__type"> 
                Population: <span className={`card__info ${data.population !=='unknown' ? 'card__info--true': 'card__info--off' } `}>{data?.population}</span>
              </li>
              <li className="card__type">
                Climate: <span className={`card__info ${data?.climate !=='unknown' ? 'card__info--true': 'card__info--off' } `}>{data?.climate}</span>
              </li>
              <li className="card__type">
                Terrain: <span className={`card__info ${data?.terrain !=='unknown' ? 'card__info--true': 'card__info--off' } `}>{data?.terrain} </span>
              </li>
              { 
                data?.films?.length > 0 ?

                <li className="card__type-features card__type-features--true">Features {data?.films?.length} films </li>:
                <li className="card__type-features card__type-features--off">Features 0 films </li>
              }
            </ul>            
        </div>
    </div> 
  );
}

export default Card;
