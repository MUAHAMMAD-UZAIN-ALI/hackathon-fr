import React from "react";
import { useNavigate } from "react-router-dom";
import "./WeddingLoansCard.css"; // Import the CSS file

const WeddingLoansCard = () => {
  const navigate = useNavigate();

  const subcategories = [
    { name: "Valima", path: "/valima" },
    { name: "Furniture", path: "/furniture" },
    { name: "Valima Food", path: "/valima-food" },
    { name: "Jahez", path: "/jahez" },
  ];

  return (
    <div className="card-container">
      {/* Image Section */}
      <div className="card-image">
        <img
          src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/personal-loan/personal-loan-for-marriage-717x404.jpg"
          alt="Wedding Loan"
        />
      </div>

      {/* Title Section */}
      <h2 className="card-title">Wedding Loans</h2>

      {/* Additional Information */}
      <div className="card-info">
        <p>
          <span className="info-label">Maximum loan:</span> PKR 5 Lakh
        </p>
        <p>
          <span className="info-label">Loan period:</span> 3 years
        </p>
      </div>

      {/* Subcategories */}
      <div className="card-subcategories">
        {subcategories.map((subcategory, index) => (
          <button
            key={index}
            onClick={() => navigate(subcategory.path)}
            className="subcategory-button"
          >
            {subcategory.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeddingLoansCard;