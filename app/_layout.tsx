import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { svgArrowBack, svgArrowDown, svgLogo } from '../assets/svgs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { useFonts, Mulish_400Regular, Mulish_600SemiBold, Mulish_700Bold } from '@expo-google-fonts/mulish';
import Currency from './Currency';
import QrCode from './QrCode';
import Success from './Success';
import CountryScreen from './Country';
import ShareScreen from './Share';
import styles from './styles';
import Payment from './Payment';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Payment" 
        component={Payment}
        options={{
          title: 'Importe a pagar',
          headerTitleStyle: styles.headerText,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen 
        name="Currency" 
        component={Currency}
        options={({ navigation }) => ({ 
          title: 'Selecciona una divisa',
          headerTitleStyle: styles.headerText,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              {svgArrowBack}
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen 
        name="Country" 
        component={CountryScreen}
        options={({ navigation }) => ({ 
          title: 'Seleccionar país',
          headerTitleStyle: styles.headerText,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              {svgArrowBack}
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen 
        name="Share" 
        component={ShareScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="QrCode" 
        component={QrCode}
        options={({ navigation }) => ({ 
          title: '',
          headerLeft: () => (
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              {svgArrowBack}
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen 
        name="Success" 
        component={Success}
        options={{ 
          headerTitle: () => 
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
              {svgLogo}
            </View>,
        }}
      />
    </Stack.Navigator>
  );
}
