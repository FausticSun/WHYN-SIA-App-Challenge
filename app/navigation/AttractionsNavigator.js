import { TabNavigator } from 'react-navigation';
import AttractionsList from '../components/AttractionsList';
import AttractionsMap from '../components/AttractionsMap';



export default AttractionsNavigator = TabNavigator({
  AttractionsList: {
    screen: AttractionsList
  },
  AttractionsMap: {
    screen: AttractionsMap
  }
},
  {
    swipeEnabled: false,
    backBehaviour: 'none',
    lazy: true,
    tabBarOptions: {
      style: {
        display: 'none'
      }
    }
  }
);
