import { View, Text } from 'react-native';
import React, { useState } from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/Tabs";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/Card";
import TransactionList from './TransactionList';

const Footer = () => {
    const [value, setValue] = useState("transactions");

    return (
        <View className="w-full  h-1/2 absolute bottom-20 justify-center  p-2">
            <Tabs
                value={value}
                onValueChange={setValue}
                className="w-full max-w-[400px] mx-auto flex-col gap-1.5 bg-transparent rounded-xl "
            >
                <TabsList className="flex-row w-full bg-transparent">
                    <TabsTrigger value="transactions" className="flex-1 rounded-xl  ">
                        <Text className={`${value !== "transactions" ? 'text-black' : 'text-white'}`}>Transactions</Text>
                    </TabsTrigger>
                    <TabsTrigger value="operations" className="flex-1 rounded-xl">
                        <Text className={`${value !== "operations" ? 'text-black' : 'text-white'}`}>Operations</Text>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="transactions">
                    <Card  >
                        <CardContent className="gap-2 w-full bg-white native:gap-2">
                            <TransactionList />
                        </CardContent>
                    </Card>
                </TabsContent>
// todo: resoudre le decalage de la card
                <TabsContent value="operations">
                    <Card>
                        <CardContent className="gap-4 native:gap-2">
                            <View className='h-10/12 bg-red-400 w-full'>

                            </View>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </View>
    );
};

export default Footer;