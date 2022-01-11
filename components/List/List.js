import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Items = () =>{

    const items = ['Cook dinner', 'Tidy the room', 'Take out the trash','Another task','Play a flex game'];

    return items.map(item =>{
        return(
            <TouchableOpacity key={item}>
                <View style={listStyles.itemBox}>
                    <Text style={listStyles.text}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    })
}

const Subtitle = () =>{
    return(
        <Text style={listStyles.subtitle}>Showing tasks...</Text>
    )
}

const List = () =>{
    return(
        <View style={listStyles.container}>
            <Subtitle />
            <Items />
        </View>
    )
}

const listStyles = StyleSheet.create({
    container:{
        flex:5, 
        margin:20
    },
    subtitle:{
        fontSize:20,
        padding:20,
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
        marginBottom:10
    },
    text:{
        fontSize:18,
        padding:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'black',
        borderRadius:10,
    },
    itemBox:{
        display:'flex',
        justifyContent:'space-between'
    }
})

export default List;