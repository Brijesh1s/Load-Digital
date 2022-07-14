import { View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import filter from "lodash.filter";
import images from "../assets";

const Search = (props) => {
  const { data, onSearch } = props;
  const [query, setQuery] = useState("");

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(data, (item) => {
      const { name } = item;
      const { common, official, nativeName } = name;

      if (common.toLowerCase().startsWith(formattedQuery)) {
        return true;
      }
      if (official.toLowerCase().startsWith(formattedQuery)) {
        return true;
      }
      return false;
    });
    onSearch(filteredData);
    setQuery(text);
  };

  return (
    <View
      style={{
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          backgroundColor: "#fff",
          width: "88%",
          borderRadius: 8,
          flexDirection: "row",
          height: 40,
        }}
      >
        <Image
          source={images.icon_search}
          style={{
            height: 20,
            width: 20,
            alignSelf: "center",
            tintColor: "grey",
          }}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={handleSearch}
          placeholder="Search"
          style={{
            backgroundColor: "#fff",
            paddingHorizontal: 20,
            width: "95%",
          }}
        />
      </View>
    </View>
  );
};

export default Search;
