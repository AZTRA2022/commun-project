import { View, Text } from 'react-native';
import React, { useState } from 'react';
import TransactionList from './TransactionList';

const Footer = () => {
    const [value, setValue] = useState("transactions");

    return (
        <View className='p-2 absolute bottom-0 h-3/5 ' >
            <Text className='font-semibold text-lg ml-2 text-slate-700' >Transactions</Text>
            <TransactionList />
        </View>
    )
};

export default Footer;
