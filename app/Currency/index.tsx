import React, { useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { svgChevronRight, svgEuFlag, svgGbFlag, svgSearch, svgTickCircleSmall, svgUsFlag } from "../../assets/svgs";
import styles from "./styles";
import { CurrencyScreenProps } from "../types";

export default function Currency({ navigation, route }: CurrencyScreenProps) {
  const currency = route.params?.currency;
  const [search, setSearch] = useState("");

  const currencies = [
    {
      "symbol": "EUR",
      "name": "Euro",
      "image": svgEuFlag
    },
    {
      "symbol": "USD",
      "name": "Dólar Estadounidense",
      "image": svgUsFlag
    },
    {
      "symbol": "GBP",
      "name": "Libra Esterlina",
      "image": svgGbFlag
    }
];

  const filteredCurrencies = currencies.filter(currency => 
    currency.name.toLowerCase().includes(search.toLowerCase()) || 
    currency.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.mainContainer}>
      {/* Search */}
      <View style={styles.searchSection}>
        {svgSearch}
        <TextInput
          style={styles.input}
          placeholder="Buscar"
          placeholderTextColor="#647184"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Currencies */}
      <View style={styles.currenciesContainer}>
        {filteredCurrencies.map((currencyItem, index) => (
          <TouchableOpacity 
            style={styles.currency} 
            key={index} 
            onPress={() => {
              navigation.popTo('Payment', { currency: currencyItem.symbol });
            }}
          >
            {currencyItem.image}
            <View style={{ flex: 1 }}>
              <Text style={styles.currencyName}>{currencyItem.name}</Text>
              <Text style={styles.currencySymbol}>{currencyItem.symbol}</Text>
            </View>
            { currency === currencyItem.symbol 
            ? svgTickCircleSmall
            : svgChevronRight
            }
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
