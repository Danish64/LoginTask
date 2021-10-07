import React, {useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import styles from './styles';
export default ({
  phoneInputRef,
  defaultValue,
  onChangeText,
  onChangeFormattedText,
}) => {
  const phoneRef = useRef(null);
  return (
    <PhoneInput
      ref={phoneInputRef ? phoneInputRef : phoneRef}
      defaultValue={defaultValue ? defaultValue : ''}
      defaultCode="DM"
      layout="first"
      onChangeText={onChangeText ? onChangeText : null}
      onChangeFormattedText={
        onChangeFormattedText ? onChangeFormattedText : null
      }
      containerStyle={styles.phoneInputContainer}
      withShadow
      autoFocus
    />
  );
};
