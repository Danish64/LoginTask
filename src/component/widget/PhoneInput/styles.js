import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  phoneInputContainer: {
    width: wp('62%'),
    height: hp('6%'),
    borderRadius: 8,
  },
});
