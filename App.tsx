import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import theme from "./constants/Theme";
import {ThemeProvider} from "@shopify/restyle";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation/>
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
