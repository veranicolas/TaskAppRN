import { Text, View, StyleSheet, StatusBar } from 'react-native'
import List from '../List/List'

const Title = () =>{
    return(
        <View style={styles.titleBox}>
            <Text style={styles.title}>Task App</Text>
        </View>
    )
}

const Main = () =>{
    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <Title />
            <List />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleBox:{
        padding:20,
        backgroundColor:'black'
    },
    title:{
        fontSize:30,
        fontWeight:'600',
        color:'white'
    }
})


export default Main;