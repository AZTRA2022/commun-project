import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol'; // Assurez-vous que ce composant existe
import TestAvatar from './testAvatar';

const transactions = [
    { id: 1, name: 'Netflix', amount: '-$120,22', category: 'Entertainment' },
    { id: 2, name: 'Spotify', amount: '+$86,80', category: 'Entertainment' },
    { id: 3, name: 'YouTube', amount: '-$150,10', category: 'Entertainment' },
    { id: 4, name: 'Amazon', amount: '-$200,00', category: 'Shopping' },
    { id: 5, name: 'Apple Music', amount: '+$50,00', category: 'Entertainment' },
    { id: 6, name: 'Google Play', amount: '-$30,00', category: 'Entertainment' },
    { id: 7, name: 'Hulu', amount: '-$70,00', category: 'Entertainment' },
    { id: 8, name: 'Disney+', amount: '+$100,00', category: 'Entertainment' },
    { id: 9, name: 'HBO Max', amount: '-$80,00', category: 'Entertainment' },
    { id: 10, name: 'Twitch', amount: '-$40,00', category: 'Entertainment' },
];

export default function TransactionList() {
    return (
        <ScrollView className="w-full p-2 bg-transparent" scrollEnabled={true} showsVerticalScrollIndicator={false}>
            {transactions.map((transaction) => (
                <View key={transaction.id} className="flex-row items-center justify-between w-full p-4 ">
                    <View className="flex-row items-center gap-3">
                        <TestAvatar size={44} />
                        <View className='flex-col items-start'>
                            <Text className="text-lg font-semibold">{transaction.name}</Text>
                            <Text className='text-zinc-500'>{transaction.category}</Text>
                        </View>
                    </View>
                    <Text className="text-lg">{transaction.amount}</Text>
                </View>
            ))}
        </ScrollView>
    );
}