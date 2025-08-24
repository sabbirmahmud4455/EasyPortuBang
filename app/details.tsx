import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      	<Text>Details</Text>
		<Link href="/details" style={styles.link}>Home</Link>
	  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
	marginTop: 20,
	color: 'blue',
	textDecorationLine: 'underline',
	},
});
