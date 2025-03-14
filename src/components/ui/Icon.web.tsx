import { Image, ImageSourcePropType } from 'react-native';

export default function Icon(props: { icon: ImageSourcePropType }) {
  return <Image source={props.icon} />;
}
