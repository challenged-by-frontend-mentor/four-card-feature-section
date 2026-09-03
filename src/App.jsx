import "./App.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="main-content">
        <header className="content__header">
          <h1 className="content__title">
            <span className="content__title--light">
              Reliable, efficient delivery
            </span>{" "}
            Powered by Technology
          </h1>
          <p className="content__description">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default App;
