import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";
import { HeroInfo } from "../components/HeroInfo";


export const Heroes = () => {

  const naviBack = useNavigate();
  
  const { id } = useParams();
  
  const hero = useMemo( () => getHeroById( id ), [ id ] );

  const onNavigateBack = () => {
    return naviBack(-1);
  }

  if ( !hero ) {
    return <Navigate to='/marvel'/>
  }

  return (
     <HeroInfo hero={ hero } onNavigateBack={ onNavigateBack }  />
  )
}
