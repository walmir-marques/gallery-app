import { useState } from "react";
import { PhotoItem } from "./components/PhotoItem";
import { photoList } from "./data/photoList";
import { Modal } from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");

  const openModal = (id) => {
    const photo = photoList.find((item) => item.id === id);

    if (photo) {
      setImageOfModal(photo.url);
      console.log(imageOfModal);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10"> Animals Photos</h1>
      <section className="container max-w-5xl mx-auto grid grid-cls-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((item) => {
          return (
            <div>
              <PhotoItem
                key={item.id}
                photo={item}
                onClick={() => openModal(item.id)}
              />
            </div>
          );
        })}
      </section>

      {showModal && (
        <Modal image={imageOfModal} closeModal={closeModal} key={""} />
      )}
    </div>
  );
}

export default App;
