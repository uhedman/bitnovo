import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Payment: { currency : string | undefined };
  Country: { countryCode: string, setCountryCode: (code: string) => void };
  Currency: { currency : string };
  QrCode: { amount: string, currency : string, link: string };
  Share: { amount: string, concept: string, currency : string };
  Success: undefined;
};

export type PaymentScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Payment"
>;

export type CountryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Country"
>;

export type CurrencyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Currency"
>;

export type QrCodeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "QrCode"
>;

export type ShareScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Share"
>;

export type SuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Success"
>;
