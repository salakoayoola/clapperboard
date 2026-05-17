import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';

export function ClapperSticks() {
  return (
    <View style={styles.container}>
      {/* Top Stick */}
      <View style={[styles.stick, styles.topStick]}>
        <View style={styles.stripeBlack} />
        <View style={styles.stripeWhite} />
        <View style={styles.stripeBlack} />
        <View style={styles.stripeWhite} />
        <View style={styles.stripeBlack} />
        <View style={styles.stripeWhite} />
        <View style={styles.stripeBlack} />
      </View>
      
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
        <View style={styles.soundToggleWrapper}>
          <Text style={styles.soundToggleText}>🔊</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    height: 80,
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
    top: 0,
    width: '100%',
    transform: [{ rotate: '-10deg' }],
    transformOrigin: 'top left',
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
  },
  soundToggleText: {
    fontSize: 20,
  }
});
