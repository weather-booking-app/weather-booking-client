import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Startpage4.css';

const Startpage4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className="overall-container">

          <div className="image-container">
            <div>Picture 1</div>
          </div>
          <div className="bookButton-container">
            <IonButton className="book-button">BOOK NOW</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Startpage4;
