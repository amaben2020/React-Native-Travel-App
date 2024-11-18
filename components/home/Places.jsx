import { Text, View, VirtualizedList } from 'react-native';
import React from 'react';
import VerticalSpacer from '../reusable/VerticalSpacer';
import { countries } from '../../mocks/countries';

const Places = () => {
  return (
    <View>
      <VerticalSpacer height={20} />

      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(item) => item.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item.country}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Places;
