import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import moviesData from '../data.json'

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])
  useEffect(() => {
    setMovies(moviesData)
    setFilteredMovies(moviesData)
  }, [])
  useEffect(() => {
    const newFiltered = movies.filter((i) => {
      const matchMovieName = i.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchSelectedCategory = selectedCategory ? i.category === selectedCategory : true
      return matchMovieName && matchSelectedCategory
    })
    setFilteredMovies(newFiltered)
  }, [selectedCategory, searchTerm, movies])
  const categories = [...new Set(movies.map((m) => m.category))]
  return (
    <div>
      <h1 className='text-center'>Movies Search App</h1>
      <SearchBar Search={searchTerm} setSearchTerm={setSearchTerm}/>
      {/* {console.log(movies)} */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}/>
      {
        filteredMovies.length == 0 ? (
          <div>Movie not found</div>
        ) : (
          <div className="container mt-4">
            <div className="row g-3">
              {filteredMovies.map((i) => (
                <div key={i.id} className="col-md-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5>{i.name}</h5>
                      <p>
                        <strong>Year:</strong> {i.year} <br /> 
                        <strong>Category:</strong>{i.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        )
      }
    </div>
  )
}
