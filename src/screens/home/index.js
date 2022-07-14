import { FlatList, TouchableOpacity, SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import globalStyles from "../../styles/globalStyles";
import { Card, Title, Paragraph } from "react-native-paper";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import Loader from "../../components/Loader";

const Home = ({ navigation }) => {
  const [data, setData] = useState();
  const [countriesDta, setCountriesData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [regions, setRegions] = useState();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setData(data);
        const regionsList = [];
        data.map((item) => {
          if (!regionsList.includes(item.region)) {
            regionsList.push(item.region);
          }
        });
        setRegions(regionsList);
      })
      .catch((error) => console.warn(error))
      .finally(() => setIsLoading(false))
  }, []);

  const handleRegionData = (data) => {
    if (data.length > 0) {
      setCountriesData(data);
    }
  };

  const handleSearch = (data) => {
    setCountriesData(data);
  };

  const countriesList = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        navigation.push("Details", {
          countryData: item,
          allData: countriesDta,
        })
      }
    >
      <Card style={globalStyles.cardStyle}>
        <Card.Cover source={{ uri: item.flags.png }} resizeMode="stretch" />
        <Card.Content>
          <Title style={globalStyles.text_bold}>{item.name.common}</Title>
          <Paragraph>
            <Text>Population: </Text><Text style={globalStyles.text_light}>{`${item.population}\n`}</Text>
            <Text>Region: </Text><Text style={globalStyles.text_light}>{`${item.region}\n`}</Text>
            <Text>Capital: </Text><Text style={globalStyles.text_light}>{`${item.capital[0]}\n`}</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  if (isLoading)
    return <Loader/>

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header />
      {data && <Search data={data} onSearch={(data) => handleSearch(data)} />}
      {regions && (
        <Filter
          regionsList={regions}
          countriesData={data}
          onChange={(data) => handleRegionData(data)}
        />
      )}
      <FlatList
        data={countriesDta}
        renderItem={countriesList}
        keyExtractor={(item) => item.cca2}
      />
    </SafeAreaView>
  );
};

export default Home;
