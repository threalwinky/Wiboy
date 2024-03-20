import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
import "./Profile.css";

import wf from "../assets/wf.jpg";
import { useEffect, useState } from "react";
import { arrowBack, ellipse, heart, people, peopleCircle, peopleOutline } from "ionicons/icons";
import HeatMap from "@uiw/react-heat-map";
import { Link } from "react-router-dom";

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

const Profile: React.FC = () => {
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
                Profile
              </IonSegmentButton>
            </IonSegment>
  
            {loading == 0
  
              ? <IonProgressBar type="indeterminate">
  
              </IonProgressBar> : ""
            }
  
          </IonToolbar> */}

        {/* <IonToolbar>
                    <IonToolbar>
                        <IonLabel>Profile</IonLabel>
                    </IonToolbar>
                </IonToolbar> */}
        <IonToolbar>

          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={arrowBack}>

              </IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen color={color}>
        <IonGrid >
          <IonRow>
            <IonCol size="12" size-sm="3">

              {/* <IonText color={"dark"}>123</IonText> */}
              <IonCard className="profile-card" >
                <IonCardContent class="profile-avatar-container">
                  <IonAvatar className="profile-avatar" >
                    <img src="https://placewaifu.com/image/600" alt="" />
                  </IonAvatar>
                </IonCardContent>

                <IonCardHeader>
                  <IonCardTitle><strong>Quang Vu</strong></IonCardTitle>
                  <IonCardSubtitle><strong>threalwinky</strong></IonCardSubtitle>
                  <IonButton className="profile-card-button">Follow</IonButton>
                </IonCardHeader>
                <IonCardContent class="profile-link"> <IonIcon icon={peopleCircle}></IonIcon>  <Link to={"#"}>4 followers</Link>  </IonCardContent>
                <IonCardContent class="profile-link"> <IonIcon icon={heart}></IonIcon>  <Link to={"#"}>10 following</Link> </IonCardContent>
                <IonCardContent>just a beginner coder  </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="11.8" size-sm="8.8" color="dark">
                <IonText color={"dark"}></IonText>
                <HeatMap
                  className="profile-heatmap"
                  value={value}
                  weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
                  startDate={new Date('2016/01/01')}
                  panelColors={{
                    0: 'rgb(230, 200, 255)',
                    2: 'rgb(211, 158, 255)',
                    4: 'rgb(198, 129, 255)',
                    10: 'rgb(182, 93, 255)',
                    20: 'rgb(169, 63, 255)',
                    30: 'rgb(144, 36, 233)',
                  }}
                />
          
            </IonCol>
            {/* <IonCol size="12" size-sm="3">
          <IonText color={"primary"} >123</IonText>
          </IonCol>
          <IonCol size="12" size-sm="3">
          <IonText color={"primary"}>123</IonText>
          </IonCol> */}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
