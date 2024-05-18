import { Dispatch, SetStateAction } from "react";

interface Props {
  index: number,
  onChange: Dispatch<SetStateAction<number>>,
  isLoading: boolean
}

export default function Button({ index, onChange, isLoading }: Props) {

  function handleNext() {
    if(index >= 4) return 

    if(index == 1) return onChange(index + 2)

    onChange(index + 1)
  }

  function handlePrev() {
    if(index <= 0) return
    
    if(index == 5) return onChange(index - 2)

    if(index == 3) return onChange(index - 2)

    onChange(index - 1);
  }

  return (
    <div className={`button ${isLoading ? '' : 'show-button'}`}>
      <span className="collection">
        <span className="text">Collection 0</span>
        <span style={{ transform: `translateY(-${index * 38}px)` }} className="numbers">
          <span className="number">1</span>
          <span className="number">2</span>
          <span className="number">3</span>
          <span className="number">4</span>
          <span className="number">5</span>
          <span className="number">6</span>
        </span>
      </span>
      <div className="arrows">
        <span onClick={handlePrev}>
          <img src="/arrow/left.png" alt="" />
        </span>
        <span onClick={handleNext}>
          <img src="/arrow/right.png" alt="" />
        </span>
      </div>
    </div>
  )
}