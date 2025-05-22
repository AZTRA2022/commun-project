import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol'; // Assurez-vous que ce composant existe
import TestAvatar from './testAvatar';
import { transactions } from '@/lib/utils';

export default function TransactionList() {
    return (
        <ScrollView className="w-full p-2 bg-transparent" scrollEnabled={true} showsVerticalScrollIndicator={false}>
            {transactions.map((transaction) => (
                <View key={transaction.id} className="flex-row items-center justify-between w-full p-4 ">
                    <View className="flex-row items-center gap-3">
                        <TestAvatar url={transaction?.logoUrl} size={44} />
                        <View className='flex-col items-start'>
                            <Text className="text-lg text-slate-500 font-semibold">{transaction.name}</Text>
                            <Text className='text-zinc-500'>{transaction.category}</Text>
                        </View>
                    </View>
                    <Text className="text-lg">{transaction.amount}</Text>
                </View>
            ))}
            <View className='w-full h-8' ></View>
        </ScrollView>
    );
}