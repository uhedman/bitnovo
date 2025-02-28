import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { svgConfettiTick } from "../../assets/svgs";
import styles from "./styles";
import { SuccessScreenProps } from "../types";

export default function Success({ navigation }: SuccessScreenProps) {
  return (
    <View style={styles.mainContainer}>
      {/* Contenido central */}
      <View style={styles.bodyContainer}>
        {svgConfettiTick}
        <Text style={styles.title}>Pago Recibido</Text>
        <Text style={styles.subtitle}>El pago se ha confirmado con exito</Text>
      </View>

      {/* Botón */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.reset({index: 0, routes: [{name: 'Payment'}]})}
      >
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}


