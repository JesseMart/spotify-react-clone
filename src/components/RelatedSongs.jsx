import React from 'react';

import SongBar from './SongBar';

const RelatedSongs = ({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className='flex flex-col '>
    <h1 className='font-bold text-3xl text-white'>Related Songs: </h1>

    <div className='mt-6 w-ful flex flex-col'>
      {data ? data?.map((song, i) => (
        <SongBar
          key={`${artistId}-${song.key}-${i}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
        />
      )) : (
        <h4 className='text-white font-bold text-2xl'>Data not Available Try Again Later</h4>
      )}
    </div>
  </div>
);

export default RelatedSongs;
