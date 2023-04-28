import {StyleSheet} from 'react-native';
import {COLORS} from '../../../brands/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: 8,
    backgroundColor: COLORS.white,
    minHeight: 100,
    padding: 10,
    borderRadius: 8,
  },
  containerTask: {
    flex: 1,
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
  },
});
