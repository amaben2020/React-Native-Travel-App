import { Text, View, VirtualizedList } from 'react-native';
import React from 'react';
import VerticalSpacer from '../reusable/VerticalSpacer';
import { countries } from '../../mocks/countries';
import Country from '../Tiles/Country';

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
        renderItem={({ item }) => (
          <View>
            <Country item={item} />
          </View>
        )}
        // or just marginRight
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        contentContainerStyle={{ paddingHorizontal: 2 }}
      />
    </View>
  );
};

export default Places;
