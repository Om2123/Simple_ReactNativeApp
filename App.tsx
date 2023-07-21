import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDark = useColorScheme() === 'light';

  return (
    <SafeAreaView>
      <View>
        <Text style={isDark ? styles.whiteText : styles.darkText}>
          hey there
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'wheat',
  },
  text: {
    fontSize: 20,
    padding: 40,
    // color: '#333',
    // fontWeight: 'bold',
  },
  t: {
    padding: 5,
    fontSize: 10,
  },
  darkText: {
    color: 'black',
    fontSize: 30,
    padding: 40,
    backgroundColor: 'white',
  },
  whiteText: {
    color: 'white',
    fontSize: 30,
    padding: 40,
    backgroundColor: 'black',
  },
});

export default App;
