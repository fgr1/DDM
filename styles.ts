import { StyleSheet } from 'react-native';
import { colors, fontSizes } from './theme';

export const styles = StyleSheet.create({
    scrollView:{
        backgroundColor: colors.light3,
        padding: 15,
        paddingTop: 40
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.light3
    },
    primaryButton: {
        backgroundColor: colors.secondary4,
        width: '100%',
        padding: 12,
        borderRadius: 5,
        textAlign: 'center',
    },
    primaryBtnText: {
        color: colors.light3,
        fontSize: fontSizes.m
    }
});
