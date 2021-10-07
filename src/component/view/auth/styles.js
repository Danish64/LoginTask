import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../constants/colors';
import logo from '../../../assets/main/logo.png';
import facebookLogo from '../../../assets/modules/login/facebook.png';
import googleLogo from '../../../assets/modules/login/google.png';
import BaseText from '../../widget/text';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.Primary};
  padding-bottom: 0;
`;

export const SigninContainer = styled.View`
  width: 100%;
  height: ${hp('80%')}px;
  padding-horizontal: ${wp('15%')}px;
  justify-content: space-between;
`;

export const SigninUpperContainer = styled.View``;

export const LogoNameContainer = styled.View`
  margin-top: ${hp('3%')}px;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: ${wp(12)}px;
  height: ${hp(12)}px;
  resize-mode: contain;
`;

export const LogoText = styled(BaseText).attrs({})`
  font-size: ${wp(12)}px;
  color: ${colors.White};
  margin-left: ${wp(1)}px;
`;

export const H1Text = styled(BaseText).attrs({})`
  font-size: ${wp(8)}px;
  font-weight: 600;
  color: ${colors.White};
  margin-top: ${hp(2)}px;
  margin-bottom: ${hp(1.5)}px;
`;

export const InstructionText = styled(BaseText).attrs({})`
  font-size: ${wp(6)}px;
  color: ${colors.White};
  margin-bottom: ${hp(4)}px;
`;

export const SocialSigninInsctructionLabel = styled(BaseText).attrs({})`
  font-size: ${wp(4)}px;
  color: ${colors.White};
  margin-bottom: ${hp(2)}px;
  font-weight: 400;
  text-align: center;
`;

export const PhoneInputBtnContainer = styled.View`
  height: ${hp('8%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BtnContainer = styled.TouchableOpacity`
  width: ${wp('12%')}px;
  height: ${hp('6%')}px;
  margin-left: ${wp('2%')}px;
  border-color: ${colors.GreyishWhite};
  border-radius: 4px;
  border-width: 3px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled(BaseText).attrs({})`
  font-size: ${wp(5)}px;
  color: ${colors.White};
  font-weight: 500;
`;

export const SocialSigninContainer = styled.View`
  width: ${wp('100%')}px;
  height: ${hp('20%')}px;
  background-color: ${colors.GreyishWhite};
  padding-horizontal: ${wp('15%')}px;
  padding-vertical: ${wp('5%')}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const FacebookLogo = styled.Image.attrs({
  source: facebookLogo,
})`
  width: ${wp(6)}px;
  height: ${hp(6)}px;
  resize-mode: contain;
`;

export const GoogleLogo = styled.Image.attrs({
  source: googleLogo,
})`
  width: ${wp(6)}px;
  height: ${hp(6)}px;
  resize-mode: contain;
`;

export const SocialBtnContainer = styled.TouchableOpacity`
  width: ${wp('35%')}px;
  height: ${hp('5%')}px;
  border-color: ${({Facebook}) => (Facebook ? colors.Blue : colors.Grey)};
  border-radius: 8px;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${wp(3)}px;
  margin-right: ${wp(7)}px;
`;

export const SocialBtnText = styled(BaseText).attrs({})`
  font-size: ${wp(4)}px;
  color: ${({Facebook}) => (Facebook ? colors.Black : colors.Black)};
  font-weight: 500;
`;

export const ErrorInsctructionLabel = styled(BaseText).attrs({})`
  font-size: ${wp(4)}px;
  color: ${colors.ErrorRed};
  margin-top: ${hp(2)}px;
  font-weight: 400;
  text-align: center;
`;
