import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Startpage2.css';

const Startpage3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className="overall-container">
          <div className="contentText-container">
              <p className="content-text">Buy us a coffee if we fullfill your weather needs</p>
          </div>

          <div className="image-container">
            <div>Picture 1</div>
          </div>
          
          <div className="contentText-container">
              <p className="content-text">https://ko-fe.com/</p>
          </div>
        <div>
            <IonButton className="next-button">Next</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Startpage3;
