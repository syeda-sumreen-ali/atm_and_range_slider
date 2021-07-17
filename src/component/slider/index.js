import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const Slider = () => {
    const [minPrice, setMinPrice] = useState(100)
    const [maxPrice, setMaxPrice] = useState(700)
    const [midPrice, setMidPrice] = useState(350)

    const handleRangeChange =(val)=>{
        console.log(val)
        setMinPrice(val[0]<=100 ?100: val[0])
        setMaxPrice(val[1]>=700 ?700: val[1])
        setMidPrice(val[1]>=700  && val[0]<=100 ?350: (val[1]+val[0])/2)
    }

    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.text}>Slider</Text>
      <MultiSlider
                values={[minPrice, maxPrice]}
                sliderLength={250} //width
                onValuesChange={val =>  handleRangeChange(val)}
                min={0}
                max={1000}
                step={5}
                selectedStyle={{backgroundColor: 'black'}}
                markerStyle={{backgroundColor:'black'}}
                Style={{width:300}}
              />

              <Text style={styles.text}>Min Price: { minPrice}</Text>
              <Text style={styles.text}>Max Price: { maxPrice}</Text>
              <Text style={styles.text}>Mid Price: { midPrice}</Text>
      </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    text:{
        fontSize:16
    }
})
