import AttractionsScreen from '../screens/AttractionsScreen'
import AttractionInfoScreen from '../screens/AttractionInfoScreen'
import { StackNavigator } from 'react-navigation';


export default AttractionsNavigator = StackNavigator({
  Attractions: { screen: AttractionsScreen },
  AttractionInfoScreen: { screen: AttractionInfoScreen },
}, {
    header: 'null',
     headerMode: 'none',
     mode: 'modal'
   });
