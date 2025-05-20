import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/Accordion";
import { Text } from "@/components/Text";
import { Label } from "@/components/Label";
import { useState } from "react";
import { View } from "react-native";
import { Checkbox } from "@/components/Checkbox";

const Politique = ({ toActivate }: { toActivate: any }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckedChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        toActivate(newChecked);
    };

    return (
        <View className="flex-1 justify-center items-center p-4">
            <Accordion
                type="multiple"
                collapsible
                defaultValue={["item-1"]}
                className="w-full max-w-sm native:max-w-md"
            >
                <AccordionItem value="item-1">
                    <View className="flex-row items-center gap-2">
                        <Checkbox
                            aria-labelledby="terms"
                            checked={checked}
                            onCheckedChange={handleCheckedChange}
                        />
                        <AccordionTrigger>
                            <Label nativeID="terms" className="w-/12">
                                J'accepte les conditions générales
                            </Label>
                        </AccordionTrigger>
                    </View>
                    <AccordionContent className="w-11/12">
                        <Text>By checking this checkbox i agree all services requirements.</Text>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </View>
    );
};

export default Politique;