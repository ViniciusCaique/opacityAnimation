
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function App() {

  const textOpacity = useSharedValue(0)

  const opacity = useAnimatedStyle(() => {
    return{
      opacity: textOpacity.value
    }
  })

  function changeOpacity() {
    return(
      textOpacity.value = withTiming(1, { duration: 1500 })
    )
  }

  function changeOpacityAgain() {
    return(
      textOpacity.value = withTiming(0, { duration: 1500 })
    )
  }
  
  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <Animated.Text style={[ opacity ]}>teste</Animated.Text>
      <TouchableOpacity
        onPress={changeOpacity}
      >
        <Text>Mostrar texto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={changeOpacityAgain}
      >
        <Text>Esconder texto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
