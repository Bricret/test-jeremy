import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

  const imgUrl = `../../../assets/heroes/${id}.jpg`;

  const characterByHero =  <p className="card-text">{ characters }</p>;

  return (
        <div className="card d-grid gap-2 d-md-block animate__animated animate__fadeIn" style={{width: "18rem", margin: "1rem"}}>
            <img src={ imgUrl } className="card-img-top" alt={ superhero } />
            <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
                {
                    alter_ego !== characters && characterByHero
                }
                <p className="card-text">
                   <small className='text-muted'>{ first_appearance }</small> 
                </p>
            </div>

            <Link to={`/hero/${id}`} className='btn btn-outline-info btn-sm m-2'>
                Mas informacion...
            </Link>
        </div>
  )
}



HeroCard.propTypes = {
    id : PropTypes.any,
    superhero : PropTypes.any,
    publisher : PropTypes.any,
    alter_ego : PropTypes.any,
    first_appearance : PropTypes.any,
    characters : PropTypes.any,
}



