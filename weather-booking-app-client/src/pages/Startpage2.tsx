import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Startpage2.css';

const Startpage2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className="overall-container">
          <div className="contentText-container">
              <p className="content-text">Need a certain weather ..?</p>
          </div>

          <div className="image-container">
            <div>Picture 1</div>
          </div>
          
          <div className="contentText-container">
              <p className="content-text">Then book it!</p>
          </div>
        <div>
            <IonButton className="next-button">Next</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Startpage2;
