import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withSequence, withTiming, Easing, runOnJS } from 'react-native-reanimated';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { useSlateStore } from '../store/useSlateStore';
import { colors } from '../theme/colors';

export function ClapperSticks() {
  const { isSoundEnabled, toggleSound, incrementTake } = useSlateStore();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  
  const rotation = useSharedValue(-15);

  useEffect(() => {
    async function loadSound() {
      try {
        const { sound: s } = await Audio.Sound.createAsync(
          require('../../assets/clap.wav')
        );
        setSound(s);
      } catch (e) {
        console.warn('Could not load clap sound', e);
      }
    }
    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const triggerClapEffects = async () => {
    // 1. Trigger haptic feedback immediately on close
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    // 2. Play sound if enabled
    if (isSoundEnabled && sound) {
      await sound.replayAsync();
    }

    // 3. Increment take number
    incrementTake();
  };

  const handleClap = () => {
    // Animate the stick closing, trigger effects, then animate opening
    rotation.value = withSequence(
      withTiming(0, { duration: 100, easing: Easing.in(Easing.ease) }, (finished) => {
        if (finished) {
          runOnJS(triggerClapEffects)();
        }
      }),
      withSpring(-15, { damping: 15, stiffness: 100 })
    );
  };

  const animatedStickStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleClap} style={styles.touchableArea}>
        {/* Top Stick (Animated) */}
        <Animated.View style={[styles.stick, styles.topStick, animatedStickStyle]}>
          <View style={styles.stripeBlack} />
          <View style={styles.stripeWhite} />
          <View style={styles.stripeBlack} />
          <View style={styles.stripeWhite} />
          <View style={styles.stripeBlack} />
          <View style={styles.stripeWhite} />
          <View style={styles.stripeBlack} />
        </Animated.View>
        
        {/* Bottom Stick */}
        <View style={styles.stick}>
          <View style={styles.stripeBlack} />
          <View style={styles.stripeWhite} />
          <View style={styles.stripeBlack} />
          <View style={styles.stripeWhite} />
          <View style={styles.stripeBlack} />
          <View style={styles.stripeWhite} />
          <View style={styles.stripeBlack} />
          
          {/* Sound Toggle */}
          <TouchableOpacity 
            style={styles.soundToggleWrapper} 
            onPress={(e) => {
              e.stopPropagation();
              toggleSound();
            }}
          >
            <Text style={styles.soundToggleText}>
              {isSoundEnabled ? '🔊' : '🔇'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    height: 80,
    justifyContent: 'flex-end',
  },
  touchableArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  stick: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    borderColor: '#333',
    borderWidth: 1,
  },
  topStick: {
    position: 'absolute',
    bottom: 36,
    width: '100%',
    transformOrigin: 'left bottom',
    zIndex: 10,
  },
  stripeBlack: {
    flex: 1,
    backgroundColor: '#111',
    transform: [{ skewX: '-30deg' }],
    marginHorizontal: -10,
  },
  stripeWhite: {
    flex: 1,
    backgroundColor: '#eee',
    transform: [{ skewX: '-30deg' }],
    marginHorizontal: -10,
  },
  soundToggleWrapper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -20,
    marginTop: -20,
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.textPrimary,
    borderWidth: 2,
    zIndex: 20,
  },
  soundToggleText: {
    fontSize: 20,
  }
});
