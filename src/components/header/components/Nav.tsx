interface Props {
  isLoading: boolean
}

export default function Nav({ isLoading }: Props) {
  return (
    <nav  
      style={{
        transform: isLoading ? 'translateY(-100px)' : 'translateY(0px)',
        transitionDelay: '.6s'
      }}
    >
      <section>
        <div className="logo-container">
          <img src="/header/logo.svg" alt="" />
        </div>
        <ul>
          <li><a href="#">New Collection</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Stores</a></li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <a href="#">
              <img src="/header/loves.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/header/shop.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/header/user.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  )
}