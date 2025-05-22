import { View, Text } from 'react-native'
import React from 'react'
import { Copy, CreditCard } from 'lucide-react-native'

const CarousselBalance = () => {
    return (
        <View className=' w-full h-1/3 items-center justify-center absolute top-24 ' >
            {/* <Text className='text-sm text-gray-500' >Total Balance</Text> */}
            <View className='bg-slate-900  w-11/12 h-[70%] flex-col rounded-2xl shadow-2xl justify-between shadow-black ' >
                <View className='flex-row items-center justify-between p-4' >
                    <View className='flex-col w-1/2 left-2 top-2 ' >
                        <Text className='text-sm text-gray-500' >Total Balance</Text>
                        <Text className='text-3xl font-bold text-white' >$ 1,850.20</Text>
                    </View>
                    <Text className='text-zinc-300  ' >
                        BenchMark
                    </Text>
                </View>
                <View className='flex-row items-center justify-between p-4 ' >

                    <Text className='text-white items-center justify-center ' >
                        <Copy size={24} color="#fff" />
                        5282 3456 7890 1289</Text>

                    <Text className='text-white' >09/26</Text>
                </View>
            </View>
        </View>
    )
}

export default CarousselBalance