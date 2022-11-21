import { Platform } from 'react-native';

import colors from './colors';

export default{
    // refactors colors into this file, so anywhere we import defaultStyles there's access to color pallet
    colors: colors,
    text:{
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
}
