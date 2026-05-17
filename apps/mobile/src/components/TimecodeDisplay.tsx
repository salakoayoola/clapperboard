import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { getTodTimecode } from '../utils/timecode';
import { colors } from '../theme/colors';

interface Props {
  fps: number;
}

export function TimecodeDisplay({ fps }: Props) {
  const [timecode, setTimecode] = useState(() => getTodTimecode(fps));

  useEffect(() => {
    let animationFrameId: number;

    const updateTimecode = () => {
      setTimecode(getTodTimecode(fps));
      animationFrameId = requestAnimationFrame(updateTimecode);
    };

    animationFrameId = requestAnimationFrame(updateTimecode);

    return () => cancelAnimationFrame(animationFrameId);
  }, [fps]);

  return <Text style={styles.timecode}>{timecode}</Text>;
}

const styles = StyleSheet.create({
  timecode: {
    color: colors.textPrimary,
    fontFamily: 'SpaceMono-Bold',
    fontSize: 48,
    letterSpacing: 1,
    fontVariant: ['tabular-nums'], // Keeps character width fixed to prevent layout jitter
  },
});
