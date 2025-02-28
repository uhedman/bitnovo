import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Linking, Share, Alert, Modal, ToastAndroid, ActivityIndicator, SafeAreaView } from "react-native";
import { svgLink, svgSms, svgExport, svgScanBarcode, svgMoneyTime, svgWalletAdd, svgWhatsapp, svgArrowDown, svgTickCircleBig } from "../../assets/svgs";
import { BlurView } from 'expo-blur';
import styles from "./styles";
import * as Clipboard from 'expo-clipboard';
import { ShareScreenProps } from "../types";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ShareScreen({ route, navigation }: ShareScreenProps) {
  const currency = route.params.currency;
  const { amount, concept } = route.params;
  const [countryCode, setCountryCode] = useState("+34");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstTouch, setfirstTouch] = useState(true);
  const [isModalVisible, toggleModal] = useState(false);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [link, setLink] = useState('');

  const getData = async () => {
    try {
      const response = await fetch('https://payments.pre-bnvo.com/api/v1/orders/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Device-Id': 'b8affd1d-1436-4035-8eff-fa0b37f29220',
        },
        body: JSON.stringify({
          'expected_output_amount': amount,
          'fiat': currency,
          'reference': concept,
        }),
      });
      const json = await response.json();
      setWebSocket(new WebSocket('wss://payments.pre-bnvo.com/ws/merchant/' + json.identifier));
      setLink(json.web_url);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      if (webSocket) {
        webSocket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.status === 'paid') {
            navigation.navigate('Success');
          }
        }
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onShare = async () => {
    // TODO
    try {
      const result = await Share.share({
        message: link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of', result.activityType);
        } else {
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const copyLink = async () => {
    await Clipboard.setStringAsync(link);
    ToastAndroid.show('Enlace copiado al portapapeles', ToastAndroid.SHORT);
  }

  const shareOnWhatsapp = async (message: string, phoneNumber: string) => {
    try {
      const encodedMessage = encodeURIComponent(message);
      let url = `whatsapp://send?text=${encodedMessage}&phone=${phoneNumber}`;
  
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        const response = await Linking.openURL(url);
        toggleModal(true);
      } else {
        console.error('WhatsApp no está instalado');
        toggleModal(true);
      }
    } catch (error) {
      console.error('Error al compartir en WhatsApp:', error);
    }
  };

  const shareByEmail = () => {
    const subject = encodeURIComponent(`Solicitud de pago: ${amount} ${currency}`);
    const body = encodeURIComponent(link);
  
    const mailto = `mailto:?subject=${subject}&body=${body}`;
  
    Linking.openURL(mailto).catch((err) => console.error('Error al abrir el correo:', err));
  };

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ActivityIndicator size={56} color="#035AC5" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <View style={styles.mainContainer}>
      {/* Contenido central */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
      >
        <BlurView intensity={10} style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            {svgTickCircleBig}
            <Text style={styles.modalTitle}>Solicitud enviada</Text>
            <Text style={styles.modalSubtitle}>Tu solicitud de pago ha sido enviada con éxito por Whatsapp.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => toggleModal(false)}>
              <Text style={styles.modalButtonText}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>

      <View style={styles.bannerContainer}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", gap: 12}}>
          {svgMoneyTime}
          <View style={{ flexDirection: "column", alignItems: "flex-start"}}>
            <Text style={styles.bannerTitle}>Solicitud de pago</Text>
            <Text style={styles.bannerAmount}>
              { currency === 'USD'
              ? '$ ' + amount
              : currency === 'GBP'
              ? '£' + amount
              : currency === 'EUR'
              ? amount + '€'
              : amount}
            </Text>
          </View>
        </View>
        <Text style={styles.bannerSubtitle}>Comparte el enlace de pago con el cliente</Text>
      </View>
      
      {/* Link y QR */}
      <View style={styles.linkQrContainer}>
        <TouchableOpacity style={styles.linkContainer} onLongPress={copyLink}>
          {svgLink}
          <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>{link}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('QrCode', { amount, currency, link })} 
          style={styles.qrButton}
        >
          {svgScanBarcode}
        </TouchableOpacity>
      </View>
      
      {/* Compartir por email */}
      <TouchableOpacity onPress={shareByEmail} style={styles.commonContainer}>
        {svgSms}
        <Text style={styles.text}>Enviar por correo electrónico</Text>
      </TouchableOpacity>

      {/* Compartir por Whatsapp */}
        { firstTouch 
        ? <TouchableOpacity onPress={() => setfirstTouch(false)} style={styles.commonContainer}>
            {svgWhatsapp}
            <Text style={styles.text}>Enviar a número de Whatsapp</Text>
          </TouchableOpacity>
        : <View style={styles.whatsappContainer}>
            {svgWhatsapp}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Country', {countryCode, setCountryCode})} 
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Text style={styles.countryCode}>{countryCode}</Text>
              {svgArrowDown}
            </TouchableOpacity>
            <TextInput
              style={styles.whatsappInput}
              maxLength={13 - countryCode.length}
              placeholder="300 678 9087"
              placeholderTextColor={'#647184'}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <TouchableOpacity onPress={() => shareOnWhatsapp(link, countryCode + phoneNumber)} style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View> 
        }
      
      {/* Compartir con otras aplicaciones */}
      <TouchableOpacity onPress={onShare} style={styles.commonContainer}>
        {svgExport}
        <Text style={styles.text}>Compartir con otras aplicaciones</Text>
      </TouchableOpacity>

      {/* Botón */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.reset({
          index: 0, 
          routes: [{name: 'Payment'}]}
        )}
      >
        <Text style={styles.buttonText}>Nueva solicitud</Text>
        {svgWalletAdd}
      </TouchableOpacity>
    </View>
  );
}
