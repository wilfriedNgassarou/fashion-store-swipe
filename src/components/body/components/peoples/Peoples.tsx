import { Dispatch, SetStateAction } from "react"

interface Props {
  index: number,
  onChange: Dispatch<SetStateAction<number>>,
  isLoading: boolean
}

export default function Peoples({ index, onChange, isLoading }: Props) {
  return (
    <>
      <article className="people-text">
        <h2 className={`title-container ${isLoading ? '' : 'show-title-container'}`}>
          <h2>
            Men’s Collection -
            <span className="bold"> April</span>
          </h2>
        </h2>
        <p className={`paragraph-container ${isLoading ? '' : 'show-paragraph-container'}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore t, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore 
          </p>
        </p>
        <div className={`md-container ${isLoading ? '' : 'show-md-container'}`}>
          <div className="more-details">
            <span className="underline">
              See more détails
            </span>
            <span>
              <img src="/public/arrow/arrow-right.png" alt="" />
            </span>
          </div>
        </div>
      </article>
      <section
        className={`peoples active-${index} ${isLoading ? 'hide-peoples' : 'show-peoples'}`}
      >
        <div className="peoples-img-container">
          <img src="/public/peoples/second/6.png" alt="" />
        </div>
        <div className="peoples-img-container">
          <img onClick={() => onChange(4)} src="/peoples/principale/5.png" alt="" />
        </div>
        <div className="peoples-img-container">
          <img onClick={() => onChange(3)} src="/peoples/principale/4.png" alt="" />
        </div>
        <div className="peoples-img-container">
          <img src="/public/peoples/second/3.png" alt="" />
        </div>
        <div className="peoples-img-container">
          <img onClick={() => onChange(1)} src="/peoples/principale/2.png" alt="" />
        </div>
        <div className="peoples-img-container">
          <img onClick={() => onChange(0)} src="/peoples/principale/1.png" alt="" />
        </div>
      </section>
    </>
  )
}