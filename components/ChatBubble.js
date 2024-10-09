import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatBubble = React.memo(({ role, text, onSpeech }) => {
          return (
              <View style={[styles.chatItem, role === 'user' ? styles.userChatItem: styles.modelChatItem]}>
                    <Text style={styles.chatText}>
                              {text}
                    </Text>
                    {role === 'model' && (
                              <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
                                        <Ionicons name="volume-high-outline" size={24} color="black" />
                              </TouchableOpacity>
                    )}
              </View>      
          )
});

export default ChatBubble;

const styles = StyleSheet.create({

          chatItem: {
                  marginTop: 10,
                  padding: 10,
                  borderRadius: 10,
                  maxWidth: "70%",
                  position: "relative",  
          },
          userChatItem: {
                    alignSelf: "flex-end",
                    backgroundColor: "#007AFF"
          },
          modelChatItem:{
                    alignSelf: "flex-start",
                    backgroundColor: "#f4f4f4"
          },
          chatText:{
                    color: "#333",
                    fontSize: 16
          },
          speakerIcon:{
                    position: "absolute",
                    bottom:5,
                    right: 5
          }
});