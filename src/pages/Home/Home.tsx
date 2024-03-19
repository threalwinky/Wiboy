import {
  IonButton,
  IonContent,
  IonHeader,
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
import "./Home.css";

import wf from "../assets/wf.jpg";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
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
      <IonHeader>
        {/* <IonToolbar>

          <IonSegment>

            <IonSegmentButton>
              Image
            </IonSegmentButton>
            <IonSegmentButton>
              Video
            </IonSegmentButton>
            <IonSegmentButton>
              Note
            </IonSegmentButton>
          </IonSegment>

          {loading == 0

            ? <IonProgressBar type="indeterminate">

            </IonProgressBar> : ""
          }

        </IonToolbar> */}

        <IonToolbar>
        <IonLabel>Home</IonLabel>
        </IonToolbar>
       
      </IonHeader>

      <IonContent fullscreen color={color}>
        123
      </IonContent>
    </IonPage>
  );
};

export default Home;
