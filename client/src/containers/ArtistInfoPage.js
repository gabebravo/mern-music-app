import React from 'react'

// IMPORTANT COMPONENTS
import ArtistContainer from './ArtistContainer'

const ArtistInfoPage = (props) => (
  <ArtistContainer artistId={props.match.params.id} />
);

export default ArtistInfoPage
