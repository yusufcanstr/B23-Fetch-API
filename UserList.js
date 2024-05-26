import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import User from "./User";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      fetch("https://dummyjson.com/users")
        .then((resp) => resp.json())
        .then((json) => setUsers(json.users))
        .finally((e) => setLoading(false));
    })();
  }, []);

  return (
    <View style={{ width: "80%" }}>
      {loading ? (
        <ActivityIndicator size={"large"} color={"#0D66FF"}/>
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <User data={item}/>}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
