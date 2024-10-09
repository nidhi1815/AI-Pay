import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { speak, isSpeakingAsync, stop } from 'expo-speech';
import ChatBubble from '../../components/ChatBubble';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Data } from '../../constant/TranscationData';

const InvestAi = () => {
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const apiKey= "AIzaSyD4hl5F5RWVqFxvCTToz2ZKmEZWoQlhKWw";
  const genAi = new GoogleGenerativeAI(apiKey);

  const model = genAi.getGenerativeModel({
          model: "gemini-1.5-pro"
  })

  const generationConfig = {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        };

  const handleUserInput = async () => {
    let updatedChat = [
      ...chat,
      {
        role: 'user',
        text: userInput,
      },
    ];

    setLoading(true);

    try {
      // Simulated response from the model

      let text = "From my transactions suggest me some stocks to invest";
      let newText;

      if(userInput === text){
        const ans = "Based on your transactions, you can invest in the following stocks: 1. 10% Amount - High Risk Stocks eg. Suzlon Energy, 2. 20% Amount - Low Risk Stocks eg. IRFC, 3. 30% Amount - Medium Risk Stocks eg. Tata Motors, 4. 40% Amount - Safe Mutual Funds eg. Tata Digital India Fund";
        const updatedChatWithModel = [
          ...updatedChat,
          {
            role: "model",
            text: ans,
          },
        ];
        setChat(updatedChatWithModel);
        setUserInput('');
      }else{
        newText = userInput
        const chatSession = model.startChat({
          generationConfig,
          history:[],
      });

      const result = await chatSession.sendMessage(newText);
      console.log(result.response.text());

      const modelResponse = result.response.text();

      if (modelResponse) {
        const updatedChatWithModel = [
          ...updatedChat,
          {
            role: "model",
            text: modelResponse,
          },
        ];
        setChat(updatedChatWithModel);
        setUserInput('');
      }
      }

      

      

    } catch (error) {
      console.log('Error', error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSpeech = async (text) => {
    if (isSpeaking) {
      stop();
      setIsSpeaking(false);
    } else {
      if (!(await isSpeakingAsync())) {
        speak(text);
        setIsSpeaking(true);
      }
    }
  };

  const renderChatItem = ({ item }) => {
    return (
      <ChatBubble
        role={item.role}
        text={item.text}
        onSpeech={() => handleSpeech(item.text)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Invest AI ChatBot</Text>
      <FlatList
        data={chat}
        renderItem={renderChatItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          placeholderTextColor="#666"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleUserInput}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator style={styles.loading} color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
    </SafeAreaView>
  );
};

export default InvestAi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center"
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: "flex-end"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 60
  },
  input: {
    flex: 1,
    height: 50,
    marginRight: 10,
    padding: 8,
    borderColor: '#333',
    borderRadius: 25,
    color: `#333`,
    backgroundColor: "#fff"
  },
  button: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  loading: {
    marginTop: 10
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center"
  }
});
