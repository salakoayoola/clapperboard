import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSlateStore } from '../store/useSlateStore';
import { colors } from '../theme/colors';
import { ClapperSticks } from './ClapperSticks';

export function SlateBoard() {
  const { production, director, dop, scene, take, fps, setField } = useSlateStore();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <TextInput 
            style={styles.productionInput}
            value={production}
            onChangeText={(t) => setField('production', t)}
            placeholder="PRODUCTION NAME"
            placeholderTextColor={colors.textSecondary}
          />
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuIcon}>≡</Text>
          </TouchableOpacity>
        </View>

        {/* Crew Section */}
        <View style={styles.crewSection}>
          <View style={styles.crewField}>
            <Text style={styles.label}>DIR: </Text>
            <TextInput 
              style={styles.crewInput}
              value={director}
              onChangeText={(t) => setField('director', t)}
              placeholder="Director"
              placeholderTextColor="#555"
            />
          </View>
          <View style={styles.crewField}>
            <Text style={styles.label}>DOP: </Text>
            <TextInput 
              style={styles.crewInput}
              value={dop}
              onChangeText={(t) => setField('dop', t)}
              placeholder="DOP"
              placeholderTextColor="#555"
            />
          </View>
        </View>

        {/* Main Display Area (Inner Slate) */}
        <View style={styles.innerSlate}>
          <View style={styles.sceneTakeRow}>
            <View style={styles.sceneTakeBox}>
              <Text style={styles.labelLarge}>SCENE</Text>
              <TextInput 
                style={styles.valueLarge}
                value={scene}
                onChangeText={(t) => setField('scene', t)}
              />
            </View>
            <View style={styles.sceneTakeBox}>
              <Text style={styles.labelLarge}>TAKE</Text>
              <TextInput 
                style={styles.valueLarge}
                value={take.toString()}
                keyboardType="numeric"
                onChangeText={(t) => setField('take', parseInt(t) || 1)}
              />
            </View>
          </View>

          <View style={styles.timecodeWrapper}>
            <Text style={styles.timecode}>01:23:45:12</Text>
            <Text style={styles.fps}>@ {fps}fps</Text>
          </View>
        </View>

        {/* Sticks */}
        <ClapperSticks />

        {/* Bottom Actions */}
        <View style={styles.bottomActions}>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>📝 Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>📋 Log</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>⚙️</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.advancedSwitch}>
          <TouchableOpacity>
            <Text style={styles.advancedText}>Advanced →</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productionInput: {
    color: colors.textPrimary,
    fontFamily: 'Outfit-Bold',
    fontSize: 28,
    flex: 1,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    color: colors.textPrimary,
    fontSize: 28,
  },
  crewSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  crewField: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    color: colors.textSecondary,
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
  },
  crewInput: {
    color: colors.textPrimary,
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    flex: 1,
  },
  innerSlate: {
    backgroundColor: colors.backgroundElevated,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.border,
    padding: 24,
    minHeight: 250,
    justifyContent: 'center',
  },
  sceneTakeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  sceneTakeBox: {
    alignItems: 'center',
  },
  labelLarge: {
    color: colors.textSecondary,
    fontFamily: 'Outfit-Medium',
    fontSize: 20,
    letterSpacing: 2,
  },
  valueLarge: {
    color: colors.textPrimary,
    fontFamily: 'Outfit-Bold',
    fontSize: 48,
    marginTop: 8,
    textAlign: 'center',
  },
  timecodeWrapper: {
    alignItems: 'center',
  },
  timecode: {
    color: colors.textPrimary,
    fontFamily: 'SpaceMono-Bold',
    fontSize: 48,
    letterSpacing: 1,
  },
  fps: {
    color: colors.textSecondary,
    fontFamily: 'SpaceMono-Regular',
    fontSize: 16,
    marginTop: 8,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    paddingVertical: 16,
  },
  actionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.border,
    borderRadius: 8,
  },
  actionText: {
    color: '#fff',
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
  },
  advancedSwitch: {
    alignItems: 'flex-end',
    marginTop: 8,
  },
  advancedText: {
    color: colors.textSecondary,
    fontFamily: 'Outfit-Medium',
    fontSize: 14,
  }
});
