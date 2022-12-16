import React from 'react'

function SingleMovieData({poster_path,imdb_id,title,overview,release_date,status,tagline
,popularity,vote_average,vote_count
}) 

{
const image='https://image.tmdb.org/t/p/w500';


  return (
    <div>
        <img src={`${image}${poster_path}`} alt='error' />
        <p>imdb_id : {imdb_id}</p>
        <p>Title : {title}</p>
        <p>Overview : {overview}</p>
        <p>Release_Date : {release_date}</p>
        <p>Status : {status}</p>
        <p>Tagline : {tagline ? tagline : 'Forever'}</p>
        <p>Popularity : {popularity}</p>
        <p>Vote_Average : {vote_average}</p>
        <p>Vote_Count : {vote_count}</p>
    </div>
  )
}

export default SingleMovieData;