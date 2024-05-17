import Ads from "./components/Ads";
import Nav from "./components/Nav";

interface Props {
  isLoading: boolean
}

export default function Header({ isLoading }: Props) {
  return (
    <header>
      <Ads />
      <Nav isLoading={isLoading} />
    </header>
  )
}