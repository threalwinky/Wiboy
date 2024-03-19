import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonSegment,
  IonSegmentButton,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./Library.css";

import wf from "../assets/wf.jpg";
import { useEffect, useState } from "react";
import { arrowBack } from "ionicons/icons";

const Library: React.FC = () => {
  const [color, setColor] = useState("white");
  const changeColor = () => {
    if (color == "white") setColor("dark");
    else setColor("white");
  };
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    setTimeout(() => { setLoading(1) }, 500)

  }, [])

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        {/* <IonToolbar>
  
            <IonSegment>
  
              <IonSegmentButton>
                Image
              </IonSegmentButton>
              <IonSegmentButton>
                Video
              </IonSegmentButton>
              <IonSegmentButton>
                Library
              </IonSegmentButton>
            </IonSegment>
  
            {loading == 0
  
              ? <IonProgressBar type="indeterminate">
  
              </IonProgressBar> : ""
            }
  
          </IonToolbar> */}

        {/* <IonToolbar>
                    <IonToolbar>
                        <IonLabel>Library</IonLabel>
                    </IonToolbar>
                </IonToolbar> */}
        <IonToolbar>

        <IonButtons slot="start">
          <IonButton>
            <IonIcon icon={arrowBack}>

            </IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>Library</IonTitle>
        
        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen color={color}>

      </IonContent>
    </IonPage>
  );
};

export default Library;
