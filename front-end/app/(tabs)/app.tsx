import { SafeAreaView } from "react-native-safe-area-context";
import CarousselBalance from "@/components/CarousselBalance";
import TransactionList from "@/components/TransactionList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full w-full flex flex-col items-center  ">
      <Header />
      <CarousselBalance />
      <Footer />
    </SafeAreaView>
  );
}
