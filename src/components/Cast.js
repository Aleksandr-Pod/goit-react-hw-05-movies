import { useState, useEffect } from 'react';
import * as movieApi from './APIfetch/APIfetch';
import { useParams } from 'react-router-dom'; 

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (cast) return;
  movieApi.fetchCast(movieId).then(data => setCast(data.cast));
  }, [movieId, cast]);

    return (
        <>
        Cast content:
            profile_path
            name
            character
        </>
    )
}