import { TabNavigator } from 'react-navigation';
import AttractionsList from '../components/AttractionsList';
import AttractionsMap from '../components/AttractionsMap';



export default AttractionsNavigator = TabNavigator({
  List: {
    screen: AttractionsList
  },
  Map: {
    screen: AttractionsMap
  }
},
  {
    tabBarOptions: {
      style: {
        display: 'none'
      }
    }
  }
);
