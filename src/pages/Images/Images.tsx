import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonRow,
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
import "./Images.css";

import wf from "../assets/wf.jpg";
import { useEffect, useState } from "react";
import { arrowBack } from "ionicons/icons";
import HeatMap from '@uiw/react-heat-map';

const Images: React.FC = () => {
  const [color, setColor] = useState("white");
  const changeColor = () => {
    if (color == "white") setColor("dark");
    else setColor("white");
  };
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    setTimeout(() => { setLoading(1) }, 500)

  }, [])

  const value = [
    { date: '2016/01/11', count: 2 },
    { date: '2016/01/12', count: 20 },
    { date: '2016/01/13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
    { date: '2016/04/11', count: 2 },
    { date: '2016/05/01', count: 5 },
    { date: '2016/05/02', count: 5 },
    { date: '2016/05/04', count: 11 },
  ];

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
                  Images
                </IonSegmentButton>
              </IonSegment>
    
              {loading == 0
    
                ? <IonProgressBar type="indeterminate">
    
                </IonProgressBar> : ""
              }
    
            </IonToolbar> */}

        {/* <IonToolbar>
                      <IonToolbar>
                          <IonLabel>Images</IonLabel>
                      </IonToolbar>
                  </IonToolbar> */}
        <IonToolbar>

          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={arrowBack}>

              </IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Images</IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen color={color}>
        <IonGrid>
          <IonRow>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
            <IonCol size="4" size-sm="3" size-md="2"><IonText color="dark">
              <img className="images-img" src="https://placewaifu.com/image/300" alt="" />
            </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>



      </IonContent>
    </IonPage>
  );
};

export default Images;
