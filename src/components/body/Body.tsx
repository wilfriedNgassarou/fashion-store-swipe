import { useState } from "react";
import Articles from "./components/articles/Articles";
import Button from "./components/button/Button";
import Peoples from "./components/peoples/Peoples";

interface Props {
  isLoading: boolean
}

export default function Body({ isLoading }: Props) {
  const [activeIndex, setActiveIndex] = useState(0) ;

  return (
    <main>
      <Peoples isLoading={isLoading} index={activeIndex} onChange={setActiveIndex} />
      <Articles index={activeIndex} isLoading={isLoading} />
      <Button isLoading={isLoading} index={activeIndex} onChange={setActiveIndex} />
    </main>
  )
}