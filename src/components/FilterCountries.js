import DropDownPicker from "react-native-dropdown-picker";
import React, { useState, useEffect } from "react";

const FilterCountries = (props) => {
  const { regionsList, countriesData, onChange } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();

  useEffect(() => {
    var regions;
    if (regionsList) {
      regions = regionsList.map((item) => {
        return (obj = {
          label: item,
          value: item,
        });
      });
      setItems(regions);
    }
  }, []);

  useEffect(() => {
    var countries = countriesData.filter((item) => item.region === value);
    onChange(countries);
  }, [value]);

  return (
    <DropDownPicker
      containerStyle={{ height: 50, width: "50%", left: 20, top: 10 }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Filter By Region"
      zIndex={1000}
      style={{ borderColor: "white" }}
      dropDownContainerStyle={{
        borderColor: "white",
        backgroundColor: "white",
      }}
    />
  );
};

export default FilterCountries;
