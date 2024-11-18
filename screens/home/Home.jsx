import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReusableText, VerticalSpacer } from '../../components';
import { reusable } from '../reusable.style';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { homeStyles } from './home.style';
import { COLORS, SIZES, TEXT } from '../../constants/theme';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText title={'Hey User'} />

          <TouchableOpacity
            style={homeStyles.box}
            onPress={() => navigation.navigate('Search')}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>
        <VerticalSpacer height={SIZES.xLarge} />
        <ReusableText
          title={'Places'}
          family={'medium'}
          size={TEXT.large}
          color={COLORS.black}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
