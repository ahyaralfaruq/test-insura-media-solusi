import { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => setSearchTerm(e.target.value)

  const handleSearch = () => {
    onSearch(searchTerm);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center content-center bg-white rounded-[25px] md:p-[10px] sm:p-[5px]"> 
        <div className="bg-transparent size-full p-[0_10px]">
          <input
            type="text"
            placeholder="Search Pokemon"
            className="font-tomorrow border-none outline-none size-full"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        
        <IoSearchOutline className="size-[32px] text-[32px] text-gray-800" onClick={handleSearch} />
      </div>
    </div>
  )
}

export default SearchBar