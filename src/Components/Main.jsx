import { useEffect, useState } from "react";
import { fetchImages } from "../api";
import { Gallery } from "./Main/Gallery";
import { Form } from "./Main/Form";

export const Main = () => {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchImages("shiba").then((urls) => {
      setUrls(urls);
    });
  }, []);
  const reloadImages = (breed) => {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
};
