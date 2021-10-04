/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import ProgressBar from 'react-native-animated-progress';

export const ProgressLine = () => {
  return (
    <View>
      <View>
        <ProgressBar
          progress={50}
          height={7}
          backgroundColor="#EF3507"
          animated={false}
        />
      </View>
    </View>
  );
};
