import React from 'react'
import PropTypes from 'prop-types'

// IMPORTANT COMPONENTS
import ArtistContainer from './ArtistContainer'

const ArtistInfoPage = (props) => (
  <ArtistContainer artistId={props.match.params.id} />
);

ArtistInfoPage.propTypes = {
  id: PropTypes.string
}

export default ArtistInfoPage
