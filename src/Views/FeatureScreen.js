import React from 'react';
import { Text, View } from 'react-native';
import { FeatureScreenStyles as styles } from './styles';

const FeatureScreen = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Text>FeatureScreen</Text>
        </View>
    );
}


export default FeatureScreen;