import React from "react";
import { useNavigate } from "react-router-dom";
import './BusinessLoansCard.css'; // Import the custom CSS file

const BusinessLoansCard = () => {
    const navigate = useNavigate();

    const subcategories = [
        { name: "Buy Stall", path: "/buystall" },
        { name: "Advance Rent for Shop", path: "/rentforshop" },
        { name: "Shop Assets", path: "/shopasset" },
        { name: "Shop Machinery", path: "/shopmachinery" },
    ];

    return (
        <div className="business-loans-card">
            {/* Image Section */}
            <div className="image-section">
                <img
                    className="card-image"
                    src="https://lh3.googleusercontent.com/LejDjN5Fycu2FDFahVP2UJkGqpnXDn9G8-zeXfF-c7Hs6D0Za4NtA7V5UjkZhbbnZ_2FxomqT0Hg-c27eNI6ANnOj6Ptyap-ZwGNo96IgCW7BPBlMDucL5L7P8kXGVWGHFbLxW9xa_1AygFtH5wFlwSBN1DSOotLk1EQXxyYbVfjfwIz4LGtFNLYjRwQYw"
                    alt="Business Startup Loans"
                />
            </div>

            {/* Title Section */}
            <h2 className="card-title">Business Startup Loans</h2>

            {/* Additional Information */}
            <div className="card-info">
                <p>
                    <span className="font-bold">Maximum loan:</span> PKR 10 Lakh
                </p>
                <p>
                    <span className="font-bold">Loan period:</span> 5 years
                </p>
            </div>

            {/* Subcategories */}
            <div className="subcategories">
                {subcategories.map((subcategory, index) => (
                    <button
                        key={index}
                        onClick={() => navigate(subcategory.path)}
                        className="subcategory-btn"
                    >
                        {subcategory.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BusinessLoansCard;
