import React from 'react'

export default function SearchBar({searchTerm,setSearchTerm}) {
  return (
    <div style={{marginLeft:"30px"}}>
      <input type="text" 
      placeholder='Enter movie name' 
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)} 
      style={{
        width:"40%",
        borderRadius:"25px",
        padding:"10px",
        fontSize:"1.2rem",
        marginBottom:"10px"
      }}/>
    </div>
  )
}
