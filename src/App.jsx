import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

import DataCards from "../src/assets/data/comics";

export default function App() {
  return (
    <>
      <Header />
      <Main DataCards={DataCards} />
      <Footer />
    </>
  );
}
