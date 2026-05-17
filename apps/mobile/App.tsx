import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { 
  Outfit_400Regular, 
  Outfit_500Medium, 
  Outfit_700Bold 
} from '@expo-google-fonts/outfit';
import { 
  SpaceMono_400Regular, 
  SpaceMono_700Bold 
} from '@expo-google-fonts/space-mono';
import { SlateBoard } from './src/components/SlateBoard';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Outfit-Regular': Outfit_400Regular,
        'Outfit-Medium': Outfit_500Medium,
        'Outfit-Bold': Outfit_700Bold,
        'SpaceMono-Regular': SpaceMono_400Regular,
        'SpaceMono-Bold': SpaceMono_700Bold,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: '#fff' }}>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <SlateBoard />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
