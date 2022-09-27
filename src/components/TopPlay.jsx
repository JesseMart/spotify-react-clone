import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title}`}>

  </div>
);

const TopPlay = () => (
  <div>TopPlay</div>
);

export default TopPlay;
