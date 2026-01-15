import { Search, X } from "lucide-react";
import SuggestedMovies from "./SuggestedMovies";

export default function SearchBar ({searchTerm, setSearchTerm}) {
    const hasText = searchTerm.trim().length>0;

    return (
        <div className="glass rounded-4 p-3">
            <div className="input-group">
                <span className="input-group-text text-light border-0">
                    <Search size={18} />
                </span>
                <input 
                type="text" 
                className="form-control bg-transparent text-light border-0" 
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value)}} 
                placeholder="Search Movie..."
                />

                {hasText ? (
                    <button
                    className="btn btn-sm btn-soft"
                    onClick={() => {setSearchTerm("")}}
                    >
                        <X size={16} />
                    </button>
                    ) : null}
            </div>
            <SuggestedMovies setSearchTerm={setSearchTerm}></SuggestedMovies>
            
        </div>
    )
}