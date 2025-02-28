import React from 'react';
import { View, Text } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { svgInfo } from '../../assets/svgs';
import styles from './styles';
import { QrCodeScreenProps } from '../types';

export default function QrCode({ route }: QrCodeScreenProps) {
  const { amount, link } = route.params;
  const currency = route.params?.currency;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.info}>
        {svgInfo}
        <Text style={styles.infoText}>
          Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo Pay.
        </Text>
      </View>
      <View style={styles.qrContainer}>
        <QRCode
          value={ link }
          size={300}
          // logo={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          // logoSize={50}
          // logoBackgroundColor="transparent"
          color='#002859'
        />
      </View>
      <Text style={styles.amount}>
        { currency === 'USD'
        ? '$ ' + amount
        : currency === 'GBP'
        ? '£' + amount
        : currency === 'EUR'
        ? amount + '€'
        : amount}
      </Text>
      <Text style={styles.subtitle}>
        Esta pantalla se actualizará automaticamente
      </Text>
    </View>
  )
}
