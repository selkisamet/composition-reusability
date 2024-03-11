import "./App.css";
import Accordion from "./components/accordion";

// App fonksiyonu tanımlanır.
function App() {
  return (
    // Accordion bileşeni üç kez kullanılır. Her bir Accordion bileşeni için bir başlık ve içerik belirtilir.
    <div className="button-wrap">
      <Accordion header="Accordion 1">
        ACCORDION 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis laboriosam impedit sit molestias dolores voluptatibus obcaecati cupiditate asperiores. Natus velit facere culpa asperiores quidem, odio tempore et explicabo. Rem!
      </Accordion>

      <Accordion header="Accordion 2">
        ACCORDION 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique blanditiis beatae error consectetur deserunt aperiam repudiandae suscipit facilis fugit exercitationem maxime qui, reiciendis ipsa expedita totam debitis nam dignissimos quos!
      </Accordion>

      <Accordion header="Accordion 3">
        ACCORDION 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate quisquam nam illum ad, totam molestias, explicabo distinctio expedita recusandae nulla enim. Velit, soluta quam. Id impedit labore sapiente eveniet!
      </Accordion>
    </div>
  )
}

export default App;
