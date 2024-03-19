import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Images from "./pages/Images/Images";
import Library from "./pages/Library/Library";

import './App.css'
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { add, duplicate, home, image, library, logoIonic, paperPlane, person, playCircle, radio, search } from 'ionicons/icons';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/library">
            <Library />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom" >
          <IonTabButton tab="home" href="/home" className="tab-bar-icon">
            <IonIcon icon={home} />
            <IonLabel>Listen now</IonLabel>
          </IonTabButton>

          <IonTabButton tab="images" href="/images">
            <IonIcon icon={image} />
            <IonLabel>Images</IonLabel>
          </IonTabButton>

          <IonTabButton disabled={true} tab="" href="/">

          </IonTabButton>

          <IonTabButton tab="library" href="/library">
            <IonIcon icon={library} />
            <IonLabel>Library</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile]" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>

      <IonFab vertical="bottom" horizontal="center">
        <IonFabButton>
          <IonIcon icon={add}>

          </IonIcon>
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton type="button" color="primary">
            <IonIcon icon={add}>

            </IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon>

            </IonIcon>
          </IonFabButton>
          <IonFabButton>
            <IonIcon>

            </IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>

      {/* <IonTabButton vertical="bottom" horizontal="center" slot="fixed" edge="false" tab="library" href="/add" >
            
            <IonFabButton>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>

          </IonTabButton> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
