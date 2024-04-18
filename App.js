
import {ActivityIndicator, View, Text, StyleSheet, Image} from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Image 
        style={styles.img} 
        source={require("./assets/logoChurras.png")}
      />
      <ActivityIndicator 
        size={"large"}
        color={"white"}
        animating={true}
        style={{
            alignSelf: 'center',
            position: 'absolute',
            justifyContent: 'center',
            paddingTop: 120
        }}
      />
      <Text style={styles.title}>Churrascando</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#6A041D',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF'
  },
  title:{
    color: '#FFFFFF',
    fontSize: 28,
    display: "none"
  },
  img:{
    position: "absolute"
  }
})