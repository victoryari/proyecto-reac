import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
