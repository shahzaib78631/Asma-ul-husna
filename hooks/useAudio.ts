import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";

const useAudio = () => {
  const [isPlaying, setPlaying] = useState(false);
  const soundObject: any = useRef<Audio.Sound | null>();

  const loadAudio = async (audioFile: any) => {
    // If sound is already loaded
    if (soundObject.current) {
      // then unload the sound
      soundObject.current?.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync(audioFile, {
      shouldPlay: false,
    });

    // Set the sound object
    soundObject.current = sound;

    // set the callback function when the sound is finished playing
    soundObject.current.setOnPlaybackStatusUpdate((newStatus: any) => {
      if (newStatus.didJustFinish) {
        setPlaying(false);
      }
    });
  };

  const playAudio = async () => {
    if (soundObject.current) {
      await soundObject.current.playAsync();
      setPlaying(true);
    }
  };

  const pauseAudio = async () => {
    if (soundObject.current) {
      await soundObject.current.pauseAsync();
      setPlaying(false);
    }
  };

  const stopAudio = async () => {
    if (soundObject.current) {
      await soundObject.current.stopAsync();
      setPlaying(false);
    }
  };

  return { loadAudio, playAudio, pauseAudio, stopAudio, isPlaying };
};

export default useAudio;
