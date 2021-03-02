import React from 'react';
import { Text, View } from 'react-native';
import { ChatScreenStyles as styles } from './styles';

const ChatScreen = ({ navigation }) => {
    return (
        <View style={styles.MainContainer}>
            <Text>ChatScreen</Text>
        </View>
    );
}


export default ChatScreen;