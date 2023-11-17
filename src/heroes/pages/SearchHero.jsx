import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const SearchHero = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search ); // las querys vienen en el location.search y se parsean con queryString para obtener el valor de la query q (q=batman) y si no existe se asigna un string vacio '' y siempre se va a recibir un string.

  const heroes = getHeroesByName( q );


  const { searchText, onInputChange } = useForm({
    searchText: q,

  });

  const onTextSubmit = (e) => {
    e.preventDefault();
    if ( searchText.trim().length <= 1 ) return;
    navigate( `?q=${ searchText.trim().toLowerCase() }` );
  }

  return (
    <>
        <h1>Search</h1>
        <hr />
        <div className="row">
          <div className="col-5">
              <h4>Search your hero:</h4>
              <form onSubmit={ onTextSubmit }>
                <input 
                  type="text" 
                  placeholder="Find your hero" 
                  className="form-control" 
                  name="searchText" 
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange } 
                  />
                <button
                  type="submit"
                  className="btn m-1 btn-block btn-outline-primary"
                >
                  Search...
                </button>
              </form>
          </div>

          <div className="col-7 row">
            <h4>Result</h4>
            <hr />

            <div className="alert alert-primary">
              search a hero
            </div>

            <div className="alert alert-danger">
              Hero dont found <b>{ q }</b>
            </div>
            
            {
              heroes.map( hero => (
                <HeroCard key={ hero.id } { ...hero } />
              ))
            }

          </div>
        </div>
    </>
  )
}
