
export default function SuggestedMovies (setSearchTerm) {
    const suggestedMovies = ["Batman", "Dune", "Spider-Man", "Intresteller", "Harry Poter"];
    return (
        <div className="mt-3 d-fles flex-wrap gap-2">
            {suggestedMovies.map((chip)=>(
                <button
                key={chip}
                type="button"
                className="btn btn-sm btn-soft rounded-pill"
                onclick={setSearchTerm(chip)}
                >
                    {chip}
                </button>
                
            ))}
        </div>
    )
}