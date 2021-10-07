import React, {useState, useEffect, useRef} from 'react';
import LoginView from '../../component/view/auth/login';
import NavigationConstants from '../../constants/NavigationConstants';

const Login = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumWithCountryCode, setPhoneNumWithCountryCode] = useState('');
  const [isPhoneNumValid, setIsPhoneNumValid] = useState(false);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (isPhoneNumValid) {
      // navigation.navigate(NavigationConstants.Home);
    }
  }, [isPhoneNumValid]);

  const onChangePhoneNumberEvent = text => setPhoneNumber(text);
  const onChangeCountryCodeEvent = text => setPhoneNumWithCountryCode(text);

  const validCheck = () => {
    const checkValid = phoneInputRef.current?.isValidNumber(phoneNumber);
    setIsPhoneNumValid(checkValid ? checkValid : false);
  };

  return (
    <LoginView
      phoneInputRef={phoneInputRef}
      onChangeFormattedText={onChangeCountryCodeEvent}
      onChangeText={onChangePhoneNumberEvent}
      onPress={validCheck}
      isPhoneNumValid={isPhoneNumValid}
    />
  );
};

export default Login;
