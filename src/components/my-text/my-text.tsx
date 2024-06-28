import React, { ReactNode, ReactElement } from "react";
import { Text, TextProps } from "react-native";

type MyTextProps = {
    weight?: "400" | "700"; // Make weight optional
    children: ReactNode;
} & TextProps;

const MyText = ({ children, style, weight = "700", ...props }: MyTextProps): ReactElement => {
    let fontFamily;
    if (weight === "400") {
        fontFamily = "DeliusUnicase-Regular";
    } else if (weight === "700") {
        fontFamily = "DeliusUnicase-Bold";
    }
    return (
        <Text {...props} style={[{ fontFamily }, style]}>
            {children}
        </Text>
    );
};

export default MyText;
