import PropTypes from 'prop-types';

export const HeroInfo = ({hero, onNavigateBack}) => {
  return (
    <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
            <img 
                src={ `/assets/heroes/${hero.id}.jpg` }
                alt={ hero.superhero } 
                className="img-thumbnail"
            />
        </div>

        <div className="col-8">
            <h3>{ hero.superhero }</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>alter Ego:</b> { hero.alter_ego } </li>
                <li className="list-group-item"> <b>publisher:</b> { hero.publisher } </li>
            </ul>
            <h5 className="mt-3">Character</h5>
            <p className="list-group-item"> <b>characters:</b> { hero.characters } </p>
            <button 
            className="btn btn-outline-info"
            onClick={ onNavigateBack }
            >
                Return
            </button>
           
         </div>

    </div>
  )
}

HeroInfo.propTypes = {

    hero : PropTypes.any,
    onNavigateBack : PropTypes.any,

}