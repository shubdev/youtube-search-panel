import React, { useState } from 'react'
import '../stylepages/Category.css'
const Category = ({ search, setSearch }) => {

    const [active, setActive] = useState("All");

    const categories = [
        "All", "Music", "F1 Race", "Tech Panda",
        "EDM", "Football", "React.js", "Javascript",
        "Electronic music", "Skrillex", "Node.js", "GitHub"
    ];

    return (
        <>
            <div className="category-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`cat-btn ${search === cat ? "active" : "inactive"}`}
                        onClick={() => setSearch(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Category