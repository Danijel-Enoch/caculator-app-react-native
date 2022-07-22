import { View, Text,StatusBar, SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const SelectCalculator = ({navigation}) => {
  const Onpress=()=>{
    alert("welcome To My First Calculator")
  }
  return (
    <SafeAreaView>
       <StatusBar
        animated={true}
        backgroundColor="#0000"
        barStyle="dark-content"
        showHideTransition="slide"
      //  hidden={hidden}
         />
         <View >
           <View style={styles.container}>
             <Text>
               Welcome to MATHRO CALC
             </Text>
           </View>

         
      <TouchableOpacity
       style={styles.button}
       onPress={() =>
        navigation.navigate('RoiCalculator')
      }>
        <Text>
          ROI calculator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('MathCalculator')
      }
      >
        <Text>
         Math Calculator
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  container:{
    margin:10,
    justifyContent:"center",

  }
})

export default SelectCalculator