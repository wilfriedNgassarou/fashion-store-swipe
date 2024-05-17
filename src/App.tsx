import { useEffect, useState } from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";
import './styles/index.css' ;

export default function App() {
  const [isLoading, setIsLoading] = useState(true) ;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <>
      <Header isLoading={isLoading} />
      <Body isLoading={isLoading} />
    </>
  )
}