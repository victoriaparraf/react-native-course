import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    Background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 20,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

    button: {
        borderRadius: 100,
        justifyContent: 'center',
        backgroundColor: Colors.darkGray,
        marginHorizontal: 10,
    },

    buttonText: {
        textAlign: 'center',
        color: Colors.textPrimary,
        fontSize: 30,
        fontWeight: '300',
        padding: 10,
        fontFamily: 'SpaceMono',
    }
})