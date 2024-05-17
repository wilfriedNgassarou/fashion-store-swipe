interface Props {
  isLast?: boolean,
  img: string
}

export default function SingleArticle({ isLast = false, img}: Props) {
  return (
    <article
      className={`${isLast ? 'last-article' : null} single-article `}
    >
      <div className="like">
        <img src="/header/loves.png" alt="" />
      </div>
      <div className="single-article-img-container">
        <img src={img} alt="" />
      </div>
      <div className="single-article-details">
        <span>Blouson collection Man</span>
        <span>100</span>
      </div>
    </article>
  )
}