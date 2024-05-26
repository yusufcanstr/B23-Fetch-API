import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function User({ data }) {
  return (
    <TouchableOpacity
        onPress={() => {
            alert(data.id);
        }}
      style={{
        width: "100%",
        height: 70,
        flexDirection: "row",
        padding: 2,
        margin: 1,
      }}
    >
      <View style={{ flex: 2, justifyContent:"center", alignItems:"center", }}>
        <Image style={{width:60, height:60, borderRadius:30, borderWidth:2, borderColor:"gray"}} source={{uri:data.image}}/>
      </View>
      <View style={{ flex: 5, justifyContent:"center" }}>
        <Text style={{fontSize:20, fontWeight:"500"}}>{data.firstName} {data.lastName}</Text>
        <Text style={{fontSize:15, color:"gray"}}>{data.email}</Text>
      </View>
      <View style={{ flex: 1, alignItems:"center", justifyContent:"center" }}>
        <View style={{width:40, height:40, backgroundColor:"#C777B2", borderRadius:20,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontWeight:"bold"}}>{data.age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
