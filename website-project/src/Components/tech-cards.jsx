import React, { useEffect, useState } from "react";
import "./tech-cards.css";

const TechCardList = () => {
  const [gadgets, setGadgets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:1337/api/product-cards?populate=image")
      .then((res) => res.json())
      .then((data) => {
        const items = data.data
          .filter((entry) => entry)
          .map((entry) => ({
            id: entry.id,
            name: entry.name,
            description: entry.description,
            price: entry.price,
            image:
              entry.image?.formats?.medium?.url || entry.image?.url || null,
          }));
        setGadgets(items);
      })
      .catch((err) => {
        console.error("Error fetching gadgets:", err);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gadgets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(gadgets.length / itemsPerPage);

  return (
    <div className="card-wrapper">
      <div className="card-container">
        {currentItems.map((gadget) => (
          <div key={gadget.id} className="card">
            {gadget.image && (
              <img
                src={`http://localhost:1337${gadget.image}`}
                alt={gadget.name || "Tech product"}
                className="card-image"
              />
            )}
            <h3>{gadget.name || "Unnamed"}</h3>
            <p>{gadget.description || "No description available."}</p>
            <p>
              <strong>Price:</strong> ${gadget.price || "N/A"}
            </p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TechCardList;
