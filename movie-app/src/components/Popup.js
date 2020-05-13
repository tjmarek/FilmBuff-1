import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rated">Rated {selected.Rated}</p>
				<p className="genre">Genre: {selected.Genre}</p>
				<p className="rating">IMDB Rating: {selected.imdbRating} / 10 <br></br>IMDB Votes: {selected.imdbVotes}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
					<p className="director">Director: {selected.Director}</p>
					<p className="writer">Writer: {selected.Writer}</p>
					<p className="actors">Actors: {selected.Actors}</p>
				</div>
				<div className="info">
				<p className="released">First released on {selected.Released}</p>
				<p className="runtime">Runtime: {selected.Runtime}</p>
				<p className="orgin">Country: {selected.Country} ; Language: {selected.Language}</p>
				<p className="awards">Awards: {selected.Awards}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
				
					
				
			</div>
		</section>
	)
}

export default Popup