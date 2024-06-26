import React, { ReactNode, ReactElement } from "react";
import { TextProps } from "react-native";

type MyTextProps = {
    weight: "400" | "700";
    children: ReactNode;
} & TextProps;

const defaultProps = {
    weight: "700"
};

export default function MyText({ children, style, weight, ...props }: MyTextProps): ReactElement {
    let fontFamily;
    if (weight === "400") {
        fontFamily = "DeliusUnicase_400Regular";
    }
    if (weight === "700") {
        fontFamily = "DeliusUnicase_700Bold";
    }
    return (
        <MyText {...props} style={[{ fontFamily }, style]}>
            {children}
        </MyText>
    );
}

MyText.defaultProps = defaultProps;