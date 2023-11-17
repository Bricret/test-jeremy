import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";
import PropTypes from 'prop-types';


export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [ publisher ] );

  return (
    <>
        <div className="row rows-cols-1 row-cols-md-3 g-0">
            {
                heroes.map( hero => (

                    <HeroCard 
                        key={ hero.id }  
                        { ...hero }
                    />
                ))
            }
        </div>
    </>
  )
}
 

HeroList.propTypes = {

    publisher : PropTypes.any,

}