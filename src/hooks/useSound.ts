import { useState, useEffect } from 'react';
import { Howl } from 'howler';

export type SoundType = 'rain' | 'wind' | 'birds' | 'waves' | 'none';

const sounds = {
  rain: new Howl({
    src: ['https://cdn.pixabay.com/download/audio/2024/01/25/audio_b05a8ceddc.mp3?filename=rain-sound-188158.mp3'],
    loop: true,
    volume: 0.5,
    html5: true,
  }),
  wind: new Howl({
    src: ['https://cdn.pixabay.com/download/audio/2023/01/17/audio_2d687f5cec.mp3?filename=smooth-cold-wind-looped-135538.mp3'],
    loop: true,
    volume: 0.5,
    html5: true,
  }),
  birds: new Howl({
    src: ['https://cdn.pixabay.com/download/audio/2023/10/28/audio_07f4ccc110.mp3?filename=birds-chirping-calm-173695.mp3'],
    loop: true,
    volume: 0.5,
    html5: true,
  }),
  waves: new Howl({
    src: ['https://cdn.pixabay.com/download/audio/2022/03/13/audio_dcf208ca5a.mp3?filename=waves-53479.mp3'],
    loop: true,
    volume: 0.5,
    html5: true,
  }),
};

export const useNaturalSound = () => {
  const [activeSound, setActiveSound] = useState<SoundType>('none');

  useEffect(() => {
    return () => {
      // Cleanup function to stop all sounds when component unmounts
      Object.values(sounds).forEach(sound => sound.stop());
    };
  }, []);

  const stopAllSounds = () => {
    Object.values(sounds).forEach(sound => sound.stop());
  };

  const toggleSound = (soundType: SoundType) => {
    stopAllSounds();

    if (activeSound === soundType) {
      setActiveSound('none');
      return;
    }

    setActiveSound(soundType);
    if (soundType !== 'none' && sounds[soundType]) {
      sounds[soundType].play();
    }
  };

  return { activeSound, toggleSound, stopAllSounds };
};