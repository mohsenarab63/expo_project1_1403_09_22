import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#def',
      }}
    >
      <Text style={{ backgroundColor: 'red' }}>
        Edit app/index.tsx to edit this screen. ??
      </Text>
      <Text
        style={{
          backgroundColor: 'blue',
          color: '#fff',
          marginTop: 25,
          padding: 15,
        }}
      >
        Edit app/index.tsx to edit this screen. ??
      </Text>
    </View>
  )
}
