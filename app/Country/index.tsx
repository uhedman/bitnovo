import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Gr, Gq, Gs, Gt, Gy, Hk, Hn, Es } from 'react-native-svg-circle-country-flags';
import { svgSearch, svgTickCircleSmall, svgChevronRight } from "../../assets/svgs";
import { CountryScreenProps } from "../types";
import styles from "./styles";

export default function CountryScreen({ route, navigation }: CountryScreenProps) {
  const { countryCode, setCountryCode } = route.params;
  const [search, setSearch] = useState("");

  const countries = [
    { code: "+34",  name: "España", flag: <Es width={32} height={32}/> },
    { code: "+240", name: "Equatorial Guinea", flag: <Gq width={32} height={32}/> },
    { code: "+30",  name: "Grecia", flag: <Gr width={32} height={32}/> },
    { code: "+500", name: "South Georgia and the South Sandwich Islands", flag: <Gs width={32} height={32}/> },
    { code: "+502", name: "Guatemala", flag: <Gt width={32} height={32}/> },
    { code: "+592", name: "Guyana", flag: <Gy width={32} height={32}/> },
    { code: "+852", name: "Hong Kong", flag: <Hk width={32} height={32}/> },
    { code: "+504", name: "Honduras", flag: <Hn width={32} height={32}/> },
  ];

  const filteredcountries = countries.filter(country => 
    country.name.toLowerCase().startsWith(search.toLowerCase())
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

      {/* Countries */}
      <View style={styles.countriesContainer}>
        {filteredcountries.map((country, index) => (
          <TouchableOpacity 
            style={styles.countryContainer} 
            key={index} 
            onPress={() => {
              setCountryCode(country.code);
              navigation.goBack()
            }}
          >
            {country.flag}
            <View style={{ flex: 1 }}>
              <Text style={styles.countryCode}>{country.code}</Text>
              <Text style={styles.countryName}>{country.name}</Text>
            </View>
            { countryCode === country.code 
            ? svgTickCircleSmall
            : svgChevronRight
            }
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
