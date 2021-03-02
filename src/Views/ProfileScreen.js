import React from 'react';
import { Text, View } from 'react-native';
import { ProfileScreenStyles as styles } from './styles';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Text>ProfileScreen</Text>
        </View>
    );
}


export default ProfileScreen;