import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { PaymentScreenProps } from "../types";
import styles from "./styles";
import { svgArrowDown } from "../../assets/svgs";

export default function Payment({ navigation, route }: PaymentScreenProps) {
  const currency = route.params?.currency ?? 'USD';
	const [amount, setAmount] = useState('');
	const [concept, setConcept] = useState('');
  const inputRef = useRef<TextInput>(null);
  const isAmountZero = amount === "";

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity 
          style={styles.currencyButton} 
          onPress={() => navigation.navigate('Currency', { currency })}
        >
          <Text style={styles.currencyButtonText}>{currency}</Text>
          {svgArrowDown}
        </TouchableOpacity>
      ),
    });
  }, [navigation, currency]);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <View style={styles.container}>
        <View style={styles.amountContainer}>
					{ (currency === 'USD' || currency === 'GBP') &&
						// Si la moneda es USD o GBP, el símbolo va antes del input
						<Text style={[styles.currencySymbol, { color: isAmountZero ? "#C0CCDA" : "#035AC5" }]}>
							{currency === 'USD' ? '$' : '£'}
						</Text>
					}
          <TextInput
            ref={inputRef}
            style={styles.amountInput}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            placeholderTextColor={'#C0CCDA'}
            selection={{ start: amount.length, end: amount.length }} // Asegurar cursor al final
          />
					{ currency === 'EUR' &&
						// Si la moneda es USD o GBP, el símbolo va antes del input
						<Text style={[styles.currencySymbol, { color: isAmountZero ? "#C0CCDA" : "#035AC5" }]}>
							€
						</Text>
					}
        </View>
        <View style={{ width: "100%", gap: 4 }}>
          <Text style={styles.conceptText}>Concepto</Text>
          <TextInput
            style={styles.conceptInput}
            multiline
            maxLength={140}
            placeholder="Añade descripción del pago"
            onChangeText={setConcept}
            value={concept}
          />
          <Text style={styles.conceptCaption}>
            {concept.length}/140 caracteres
          </Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isAmountZero ? "#EAF3FF" : "#035AC5" }]}
        onPress={() => navigation.navigate("Share", {amount, concept, currency})}
        disabled={isAmountZero}
      >
        <Text style={[styles.buttonText, { color: isAmountZero ? "#71B0FD" : "#fff" }]}>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
