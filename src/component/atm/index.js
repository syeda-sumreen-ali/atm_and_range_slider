import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native'

const ATM = () => {
  const [amount, setAmount] = useState('')
  const [notes5k, setNotes5k] = useState('')
  const [notes1k, setNotes1k] = useState('')
  const [notes5h, setNotes5h] = useState('')
  const [err, setErr] = useState(null)

  const Withdraw = () => {
    if (
      Number.isInteger(Number(amount)) &&
      amount > 500 &&
      amount < 20000 &&
      amount % 500 === 0
    ) {
      let val = amount, n5k, n1k, n5h

      n5k = val >= 5000 ? Math.floor(val / 5000) : 0
      val = val - n5k * 5000
      n1k = val >= 1000 ? Math.floor(val / 1000) : 0
      val = val - n1k * 1000
      n5h = val >= 500 ? Math.floor(val / 500) : 0
      val = val - n5h * 1000

      setErr('')
      setNotes5k(n5k)
      setNotes1k(n1k)
      setNotes5h(n5h)
    } else {
        setNotes5k('')
        setNotes1k('')
        setNotes5h('')
  
      setErr('Invalid Amount')
      console.log('Invalid Amount')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ATM MACHINE</Text>

      <TextInput
        placeholder={'Enter Amount'}
        value={String(amount)}
        onChangeText={val => setAmount(val)}
      />
      <TouchableHighlight onPress={() => Withdraw()} style={styles.btn}>
        <Text style={styles.btnText}>Withdraw cash</Text>
      </TouchableHighlight>
      {!!err && <Text style={styles.errText}>{err}</Text>}
      {!!notes5k && <Text style={styles.text}>number of 5000 notes {notes5k}</Text>}
      {!!notes1k && <Text style={styles.text}>number of 1000 notes {notes1k}</Text>}
      {!!notes5h && <Text style={styles.text}>number of 500 notes {notes5h}</Text>}
    </View>
  )
}

export default ATM

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  btnText: {
    fontSize: 14,
    color: 'white',
  },
  container: {
    // flex: 1,
    height:400,
    overflow:'hidden',
    // backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errText: {
    color: 'red',
    fontSize: 16,
  },
  text:{
    fontSize:16
  }
})
