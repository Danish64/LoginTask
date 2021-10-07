import React, {useState, useRef} from 'react';
import {
  Container,
  SigninContainer,
  SigninUpperContainer,
  SocialSigninContainer,
  LogoNameContainer,
  Logo,
  LogoText,
  H1Text,
  InstructionText,
  SocialSigninInsctructionLabel,
  PhoneInputBtnContainer,
  BtnContainer,
  BtnText,
  SocialBtnContainer,
  SocialBtnText,
  GoogleLogo,
  FacebookLogo,
  ErrorInsctructionLabel,
} from './styles';
import SignInLabels from '../../../lang/Labels/SignInLabels';
import PhoneInput from '../../widget/PhoneInput';

const login = ({
  phoneInputRef,
  onChangeText,
  onChangeFormattedText,
  onPress,
  isPhoneNumValid,
}) => {
  return (
    <Container>
      <SigninContainer>
        <SigninUpperContainer>
          <LogoNameContainer>
            <Logo />
            <LogoText text={SignInLabels.LogoText} />
          </LogoNameContainer>
          <H1Text text={SignInLabels.HeadingText} />
          <InstructionText text={SignInLabels.InstructionText1} />
          <PhoneInputBtnContainer>
            <PhoneInput
              phoneInputRef={phoneInputRef}
              onChangeText={onChangeText}
              onChangeFormattedText={onChangeFormattedText}
            />
            <BtnContainer onPress={onPress}>
              <BtnText text={SignInLabels.BtnText} />
            </BtnContainer>
          </PhoneInputBtnContainer>
          {!isPhoneNumValid && (
            <ErrorInsctructionLabel text={SignInLabels.ErrorLabel} />
          )}
        </SigninUpperContainer>
        <SocialSigninInsctructionLabel text={SignInLabels.InstructionText2} />
      </SigninContainer>

      <SocialSigninContainer>
        <SocialBtnContainer Facebook>
          <FacebookLogo />
          <SocialBtnText Facebook text="Facebook" />
        </SocialBtnContainer>
        <SocialBtnContainer>
          <GoogleLogo />
          <SocialBtnText text="Google" />
        </SocialBtnContainer>
      </SocialSigninContainer>
    </Container>
  );
};

export default login;
