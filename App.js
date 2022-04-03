import * as React from 'react';
import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, Image, TextInput, AsyncStorageStatic, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import * as FileSystem from 'expo-file-system';
// ExcelJS
import ExcelJS from 'exceljs';
// Share excel via share dialog
import * as Sharing from 'expo-sharing';
// From @types/node/buffer
import { Buffer as NodeBuffer } from 'buffer';
import { render } from 'react-dom';

//suggestions section





//dismiss keyboard
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}

  </TouchableWithoutFeedback>

);

const windowWidth = Dimensions.get('window').width;
function FitnessSuggestions(va) {
  

  


if (parseInt(va)>=1 && parseInt(va)<=3) {
  
 
  
  return (
      <Text>
            We recommend you increase the weight by 5 pounds and lower your reps by 2
      </Text>


  
  );
}
if (parseInt(va)>=4 && parseInt(va)<=7) {
    

  return (
      <Text>
            We recommend you keep the weight the same and increase the reps to one.     
             </Text>


  
  );
}
if (parseInt(va)>=8 && parseInt(va)<=10) {
    
  
  return (
      <Text>
            We recommend you decrease the weight by 5-10 pounds and lower your reps by 2. 
      </Text>


  
  );
}
}
//home screen
function HomeScreen({navigation}) {
  const quotes = ["The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.", "Success usually comes to those who are too busy to be looking for it.", "All progress takes place outside the comfort zone.", "If you think lifting is dangerous, try being weak. Being weak is dangerous.", "The only place where success comes before work is in the dictionary.", "The clock is ticking. Are you becoming the person you want to be?"];
  return (
    <DismissKeyboard>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.splitsButton}
        onPress = {() => navigation.navigate('Fitness')}

      >
        <Image
          style={styles.image2}
          source={require('./assets/dumbell.png')}
        >

        </Image>


      </TouchableOpacity>
      <TouchableOpacity style={styles.motiButton} onPress= {undefined}>
            <View>
            
             
              <Text style={styles.textMain}> Quote of the Day: "{quotes[Math.floor(Math.random()*quotes.length)]}" </Text>

              



               </View>

      </TouchableOpacity>
      
    </View>
    </DismissKeyboard>
  );
}

//splits screen






function Fitness({navigation}) {
  const [weight, setWeight] = useState('0');
  const [reps, setReps] = useState('0');
  const [fatigue, setFatigue] = useState('0');
  

  return (
    
      

    <DismissKeyboard>
    <View style={styles.container2}>
      <Text style = {styles.weightText}>
        Weight of Exercise (lbs): 
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(value) => setWeight(value)}
      >
        
      </TextInput>
      <Text style = {styles.weightText}> Reps Completed </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(val) => setReps(val)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Fatigue Level (0-10):  
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(va) => setFatigue(va)}
      />
      
        
     


      <Text> {FitnessSuggestions(fatigue)} </Text>

      
        
       
      
      
    

      </View>
    </DismissKeyboard>

  

  );

}
//push screen
const Push = () => {
  const [weight, setWeight] = useState('0');
  const [reps, setReps] = useState('0');
  const [fatigue, setFatigue] = useState('0');
  

  return (
    
      

    <DismissKeyboard>
    <View style={styles.container2}>
      <Text style = {styles.weightText}>
        Weight of Exercise (lbs): 
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(value) => setWeight(value)}
      >

      </TextInput>
      <Text style = {styles.weightText}> Reps Completed </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(val) => setReps(val)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Fatigue Level (0-10):  
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(va) => setFatigue(va)}
      >

      </TextInput>
     
      
      

      </View>
    </DismissKeyboard>

  );

}

//pull screen
const Pull = () => {
  return (
    <DismissKeyboard>
    <View style={styles.container2}>
      <Text style = {styles.weightText}>
        Weight of Exercise (lbs): 
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(value) => setFlush(value)}
      >

      </TextInput>
      <Text style = {styles.weightText}> Reps Completed </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(val) => setShower(val)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Fatigue Level (0-10):  
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(va) => setLaundry(va)}
      >

      </TextInput>
      
      
    

      </View>
    </DismissKeyboard>

  );



}

//legs screen
const Legs = ()=> {
  return (
    <DismissKeyboard>
    <View style={styles.container2}>
      <Text style = {styles.weightText}>
        Weight of Exercise (lbs): 
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(value) => setFlush(value)}
      >

      </TextInput>
      <Text style = {styles.weightText}> Reps Completed </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(val) => setShower(val)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Fatigue Level (0-10):  
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(va) => setLaundry(va)}
      >

      </TextInput>
      
      
    

      </View>
    </DismissKeyboard>

  );


}

//usage screen
const UsageScreen = () => {
  const [flush, setFlush] = useState('0');
  const [shower, setShower] = useState('0');
  const [dish, setDish] = useState('0');
  const [laundry, setLaundry] = useState('0');
  const [remain, setGoal] = useState('0');
  return (
    <DismissKeyboard>
    <View style={styles.container2}>
      <Text style = {styles.weightText}>
        Total Toilet Flushes: 
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(value) => setFlush(value)}
      >

      </TextInput>
      <Text style = {styles.weightText}> Minutes Showered </Text>
      <TextInput
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(val) => setShower(val)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Loads of Laundry:  
      </Text>
      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(va) => setLaundry(va)}
      >

      </TextInput>
      <Text style = {styles.weightText}>
        Loads of Dishwashing:  
      </Text>

      <TextInput 
        style={styles.textInput}
        keyboardType='numeric'
        placeHolder="0"
        onChangeText={(er) => setDish(er)}
      >

      </TextInput>
      
      <Text>
        You have used {10*parseInt(dish)+1.6*parseInt(flush)+20*parseInt(laundry)+2.1*parseInt(shower)} gallons of water today!
        

      </Text>
      <Text>
      {ShowerSuggestion(shower)}
      </Text>
      <Text>
        {LaundrySuggestion(laundry)}
      </Text>
      
      
      

    </View>
    </DismissKeyboard>

  );

}
//navigation between pages
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {HomeScreen} />
            <Stack.Screen name = "Fitness" component = {Fitness} />
            <Stack.Screen name = "Usage" component = {UsageScreen} />
            <Stack.Screen name = "Push" component = {Push} />
            <Stack.Screen name = "Pull" component = {Pull} />
            <Stack.Screen name = "Legs" component = {Legs} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
//stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#cfe8ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  motiButton:{
    position: 'absolute',
    top: 1,
    width: '100%',
    height: '15%',
    backgroundColor: "#c2daff",
    
    alignItems: 'center',
  },
  
  splitsButton: {
    position: 'absolute',
    
    top: '10%',

    width: '100%',
    height: '95%',
    backgroundColor: "#c7eaff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  pushButton: {
    position: 'absolute',
    top: '0%',
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EB4FF'
  },
  pullButton: {
    position: 'absolute',
    top: '33%',
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9EE2FF'
  },
  legsButton: {
    position: 'absolute',
    top: '66%',
    width: '100%',
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ECEFF'
  },

  usageButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '45%',
    backgroundColor: "#a3ddff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  weightText: {
    
    fontSize: 30,
    
    
  },
  waterText:{
    position: 'absolute',
     fontSize: 20,
     marginTop: 10,
     bottom: '15%',
     textAlign: 'center',



  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: "60%",
    textAlign: 'center',

  },
  image1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: '25%',

  },
  image2: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    height: '25%',

  },
  textMain: {
    alignItems: 'center',
    justifyContent: 'center'
    
  },

    
  
});

export default App;