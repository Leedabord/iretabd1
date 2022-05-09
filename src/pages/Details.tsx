import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent,
   IonItem, IonLabel, IonList } from '@ionic/react';

const Details: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab2" />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Details</p>
        <IonList>
          <IonItem href="/tab2/details">
            <IonLabel>
              <h2>List Item</h2>
            </IonLabel>
          </IonItem>
          <IonItem href="/tab2/details">
            <IonLabel>
              <h2>List Item</h2>
            </IonLabel>
          </IonItem>
          <IonItem href="/tab2/details">
            <IonLabel>
              <h2>List Item</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </React.Fragment>
  );
};

export default Details;
