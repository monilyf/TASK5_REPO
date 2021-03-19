import React from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet,View, Text, TouchableOpacity } from "react-native";

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.detailList}>
    <Image source={require('../assets/images/MahindraJeeto.jpg')} style={styles.imgStyle}/>
    <Text style={styles.title}>{item.title}</Text>
    </View>
   
  </TouchableOpacity>
);

export class Home extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
         selectedId:''
        };
      }
    render(){
  
        // const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === this.selectedId ? "#edffec" : "#709fb0";

    return (
      <Item
        item={item}
        onPress={() => this.setState({selectedId:item.id})}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={this.selectedId}
      />
    </SafeAreaView>
  );}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    marginLeft:30
  },
  detailList:{
      flexDirection:'row'
  },
  imgStyle:{
      height:50,
      width:80,
  }
});

export default Home;