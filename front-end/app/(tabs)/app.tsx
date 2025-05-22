import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import CarousselBalance from "@/components/CarousselBalance";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import React, { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { Fingerprint } from "lucide-react-native";

export default function HomeScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (hasHardware && isEnrolled) {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authentifiez-vous',
        fallbackLabel: 'Utiliser un mot de passe',
      });

      if (result.success) {
        setIsAuthenticated(true);
      } else {
      }
    } else {
      console.log('Authentification biométrique non disponible');
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  if (!isAuthenticated) {
    return (
      <SafeAreaView className="h-full w-full bg-zinc-100 flex items-center justify-center">
        <Text className="text-slate-600">Veuillez vérifier votre empreinte digitale</Text>
        <TouchableOpacity onPress={authenticate}>
          <Fingerprint size={64} color="red" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="h-full w-full flex flex-col items-center">
      <Header />
      <CarousselBalance />
      <Footer />
    </SafeAreaView>
  );
}