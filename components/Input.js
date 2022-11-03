import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function Input({placeholder, onSubmitEditing}) {
    const [text, setText] = useState('');

    return (
        <TextInput 
            style={styles.input}
            value={text}
            placeholder={placeholder}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={() => {
                if (!text) return // Don't submit if empty
                onSubmitEditing(text)
                setText('')
            }
        }
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});