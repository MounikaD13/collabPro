import React from 'react'

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div style={{marginLeft:"30px"}}>
      <select 
        style={{
          borderRadius: "10px",
          width: "30%",
          padding: "10px",
          fontSize: "1.2rem"
        }}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories </option>
        {
          categories.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))
        }
      </select>
    </div>
  )
}
