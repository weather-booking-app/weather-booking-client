import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Startpage1.css';

const Startpage1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className="overall-container">
          <div className="image-container">
            <div>Picture 1</div>
            <div>Picture 2</div>
          </div>
            <div className="middleText-container">
              <p className="middle-text">Do you have special occasion coming up?</p>
            </div>
          <div className="image-container">
            <div>Picture 3</div>
            <div>Picture 4</div>
          </div>
          <div>
            <IonButton className="next-button">Next</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Startpage1;
