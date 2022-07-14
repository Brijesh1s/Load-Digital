import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import globalStyles from "../../styles/globalStyles";
import Header from "../../components/Header";
import BackButton from "../../components/BackButton";
import GridList from "react-native-grid-list";
import Loader from "../../components/Loader";

const Details = ({ navigation, route }) => {
  const { countryData, allData } = route.params;
  const [borderCountries, setBorderCountries] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [countryDetails, setCountryDetails] = useState({
    name: countryData.name.common,
    flag: countryData.flags.png,
    nativeName: [],
    population: null,
    region: null,
    subRegion: null,
    capital: null,
    tld: null,
    currencies: [],
    languages: [],
  });

  useEffect(() => {
    extractCountryDetails();
    if (countryData.borders) {
      fetchCountryNames();
    }
  }, []);

  const fetchCountryNames = () => {
    const names = [];
    countryData.borders.map((borders) => {
      const name = allData.find(
        (item) => borders === item.cioc || borders === item.cca3
      );
      if (name) {
        names.push(name.name.common);
      }
    });
    setBorderCountries(names);
  };

  const extractCountryDetails = () => {
    const currenciesObj = Object.values(countryData.currencies);
    const currencies = currenciesObj.map((item) => {
      return item.name;
    });
    const languages = Object.values(countryData.languages);
    const capitals = Object.values(countryData.capital);
    const nativeNamesObj = Object.values(countryData.name.nativeName);
    const nativeNames = nativeNamesObj.map((item) => {
      return item.official;
    });

    setCountryDetails({
      ...countryDetails,
      nativeName: nativeNames,
      population: countryData.population,
      region: countryData.region,
      subRegion: countryData.subregion,
      capital: capitals,
      tld: countryData.tld[0],
      currencies: currencies,
      languages: languages,
    });
    setIsLoading(false);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderBorderCountries = ({ item }) => (
    <View style={[globalStyles.btnView, styles.borderContView]}>
      <Text>{item}</Text>
    </View>
  );

  if (isLoading) return <Loader />;

  const renderCountryDetails = () => (
    <View style={{ margin: 12 }}>
      <Image
        style={globalStyles.flagImg}
        resizeMode="contain"
        source={{ uri: countryDetails.flag }}
      />
      <Text style={[globalStyles.text_bold, { paddingVertical: 10 }]}>
        {countryDetails.name}
      </Text>
      <Text style={globalStyles.text_md}>
        Native Name:{" "}
        {countryDetails.nativeName.map((name, index) => (
          <Text style={styles.textColor}>
            {name}
            {index !== countryDetails.nativeName.length - 1 ? `, ` : `\n\n`}
          </Text>
        ))}
        <Text style={globalStyles.text_md}>Population: </Text><Text style={styles.textColor}>
          {`${countryDetails.population}\n\n`}
        </Text>
        {`Region: ${countryDetails.region}\n\n`}
        {`Sub Region: ${countryDetails.subRegion}\n\n`}
        Capital:{" "}
        {countryDetails.capital.map((cap, index) => (
          <Text style={styles.textColor}>
            {cap}
            {index !== countryDetails.capital.length - 1 ? `, ` : `\n\n\n`}
          </Text>
        ))}
        {`Top Level Domain: ${countryDetails.tld}\n\n`}
        Currencies:{" "}
        {countryDetails.currencies.map((currency, index) => (
          <Text style={styles.textColor}>
            {currency}
            {index !== countryDetails.currencies.length - 1 ? `, ` : `\n\n`}
          </Text>
        ))}
        Languages:{" "}
        {countryDetails.languages.map((lang, index) => (
          <Text style={styles.textColor}>
            {lang}
            {index !== countryDetails.languages.length - 1 ? `, ` : `\n\n`}
          </Text>
        ))}
      </Text>
      {borderCountries && (
        <Text style={globalStyles.text_bold}>Border Countries:</Text>
      )}
    </View>
  );

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header />
      <View style={styles.btnView}>
        <BackButton onPress={handleBackPress} />
      </View>
      {!isLoading && (
        <GridList
          showSeparator
          ListHeaderComponent={renderCountryDetails}
          data={borderCountries}
          numColumns={3}
          renderItem={renderBorderCountries}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderContView: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  btnView: {
    marginVertical: 20,
    marginLeft: 20,
  },
  textColor:{
    color:'gray'
  }
});

export default Details;
