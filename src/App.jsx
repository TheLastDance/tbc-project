import './App.css';

const products = [
  {
    id: 1,
    productName: "Smartphone XYZ",
    productDescription: "A high-performance smartphone with the latest features and advanced camera technology."
  },
  {
    id: 2,
    productName: "Wireless Headphones ABC",
    productDescription: "Immerse yourself in superior sound quality with these comfortable and stylish wireless headphones."
  },
  {
    id: 3,
    productName: "Smartwatch 123",
    productDescription: "Stay connected and track your fitness with this sleek and feature-rich smartwatch."
  }
]

function App() {
  return (
    <>
      <header>
        <div className="header_logo">
          <a href="/">LOGO</a>
        </div>
        <nav>
          <ul className='header_nav_list'>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#footer">Rules</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id='about'>
          <h2>About us:</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ipsum ab blanditiis libero et autem tempore ipsa aliquid eligendi ad! Molestias, voluptatibus repellendus consequuntur quidem quam voluptas beatae quis aut.
            Totam cupiditate voluptatem labore, quia accusantium at itaque commodi corrupti atque repellat? Voluptatem saepe at harum amet velit vitae, officia esse incidunt vero. Ducimus, ipsam. Voluptatem corporis ab impedit expedita.
            Commodi minima doloribus magni possimus animi ipsa odio provident nemo odit earum. Ab ea est soluta consequatur neque tempora minima cupiditate ipsum asperiores vero, temporibus quidem officiis blanditiis nostrum eum?
            Voluptates rerum in dolorum cum architecto laboriosam nemo illum suscipit ducimus nam nihil, eum minus quaerat quam quis repellendus, eligendi, quidem praesentium! Saepe iste suscipit accusantium esse amet consectetur qui!
            Quis perferendis facere iusto id soluta minima aliquam incidunt sed tenetur. Recusandae rem animi aliquam repellendus, doloribus quos reiciendis placeat minima blanditiis accusantium nulla, delectus optio sed ipsum aut et!
          </p>
        </section>

        <section id="products">
          <h2>Products:</h2>
          <ul className='products_list'>
            {products.map(({ id, productName, productDescription }) => <li key={id}>
              <h3>{productName}</h3>
              <p>{productDescription}</p>
              <button type='button'>Add to Cart</button>
            </li>)}
          </ul>
        </section>
      </main>

      <footer id='footer'>
        <ul>
          <li>
            <a href="/">Terms and conditions</a>
          </li>
          <li>
            <a href="/">Privacy politics</a>
          </li>
        </ul>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email">Subscribe to our newsletter:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email'
            required
          />
          <button type='submit'>Submit</button>
        </form>
      </footer>
    </>
  );
}

export default App;
