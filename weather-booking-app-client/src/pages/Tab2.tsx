import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Map, { NavigationControl } from 'react-map-gl';
import endpoints from '../endpoints.config';
import 'mapbox-gl/dist/mapbox-gl.css';
import AddLocation from './AddLocation';

const mapboxAPIToken = 'pk.eyJ1IjoibGVvbmFyZG9wcmFzZXR5bzUiLCJhIjoiY2xneHNjYjB4MDJnZDN2cXEzeGZ1YjR5MyJ9.nalIoKCttMHS_6NdVxo6DQ'

const Tab2: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AddLocation />

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
