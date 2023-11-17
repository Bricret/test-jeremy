import { HeroList } from "../components/HeroList"


export const MarvelPage = () => {
  return (
    <>
        <h1 className="mt-2">Marvel Page</h1>
        <hr />

        <HeroList publisher={ 'Marvel Comics' } />
    </>
  )
}
