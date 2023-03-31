import React, {useContext} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../context';

export default function Playing() {
  const {song, handleSetSong} = useContext(Songs);
  const handClickNext = () => {
    handleSetSong(song.id +1)
  }
  const handleClickPro = () => {
    handleSetSong(song.id -1)
  }
  const nextSong = () => {
    handleSetSong(song.id +1)
  }
  return (
    <div>
        
        <AudioPlayer className='player-music' 
        src={song.url} 
        layout="stacked-reverse" 
        showSkipControls={true} 
        showJumpControls={false}
        onClickNext={handClickNext}
        onClickPrevious={handleClickPro}
        onEnded = {nextSong}
        />
    </div>
  )
}                                 
