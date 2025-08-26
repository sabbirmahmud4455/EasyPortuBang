import { StyleSheet } from 'react-native';
import { Text } from 'react-native-gesture-handler';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
	<SafeAreaProvider>
	  <SafeAreaView>
		<Text style={{color:'red', fontSize: 100}}>Hello, Book</Text>
	  </SafeAreaView>
	</SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
	flexDirection: 'row',
	alignItems: 'center',
	gap: 8,
  },
  stepContainer: {
	gap: 8,
	marginBottom: 8,
  },
  reactLogo: {
	height: 178,
	width: 290,
	bottom: 0,
	left: 0,
	position: 'absolute',
  },
});
