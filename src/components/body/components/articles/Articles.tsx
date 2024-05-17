import SingleArticle from "./components/SingleArticle";

interface Props {
  isLoading: boolean,
  index: number,
}

export default function Articles({ isLoading, index }: Props) {
  return (
    <div 
      style={{
        transform: isLoading ? '' : `translateY(-${index * 100}%)`
      }}
      className={`articles-container ${isLoading ? 'hide-article' : 'show-article'}`}
    >
      <aside className="articles">
        <SingleArticle img="/articles/1.png" />
        <SingleArticle img="/articles/2.png" />
        <SingleArticle img="/articles/3.png" isLast={true} />
      </aside>
      <aside className="articles">
        <SingleArticle img="/articles/4.png" />
        <SingleArticle img="/articles/5.png" />
        <SingleArticle img="/articles/6.png" isLast={true} />
      </aside>
      <aside className="articles">
        <SingleArticle img="/articles/4.png" />
        <SingleArticle img="/articles/5.png" />
        <SingleArticle img="/articles/6.png" isLast={true} />
      </aside>
      <aside className="articles">
        <SingleArticle img="/articles/7.png" />
        <SingleArticle img="/articles/8.png" />
        <SingleArticle img="/articles/9.png" isLast={true} />
      </aside>
      <aside className="articles">
        <SingleArticle img="/articles/10.png" />
        <SingleArticle img="/articles/11.png" />
        <SingleArticle img="/articles/12.png" isLast={true} />
      </aside>
      <aside className="articles">
        <SingleArticle img="/articles/10.png" />
        <SingleArticle img="/articles/11.png" />
        <SingleArticle img="/articles/12.png" isLast={true} />
      </aside>

    </div>
  )
}