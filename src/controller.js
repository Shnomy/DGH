import {Controller} from 'cerebral';
import Devtools from 'cerebral/devtools';
import FirebaseProvider from '@cerebral/firebase';
import Router from '@cerebral/router';
import app from './modules/app';

export default Controller({
  devtools: process.env.NODE_ENV === 'production'
    ? null
    : Devtools({
      host: 'localhost:8787',
    }),
    modules: {
      app: app,
      router: Router({
        routes: [{
          path: '/',
          signal: 'app.frontPageRouted'
        }, {
          path: '/bater',
          signal: 'app.boatsRouted'
        }, {
          path: '/mobler',
          signal: 'app.furnitureRouted'
        }, {
          path: '/dorvindu',
          signal: 'app.doorWindowRouted'
        }, {
          path: '/provselv',
          signal: 'app.tryYourselfRouted'
        }, {
          path: '/login',
          signal: 'app.loginRouted'
        }]
      })
    },
    providers: [
      FirebaseProvider({
        config: {
          apiKey: "AIzaSyDQOw1Y14ILvjw2e1Ue2vi21kU3D0urvP0",
          authDomain: "dengladehoevel.firebaseapp.com",
          databaseURL: "https://dengladehoevel.firebaseio.com",
          projectId: "dengladehoevel",
          storageBucket: "dengladehoevel.appspot.com",
          messagingSenderId: "716208147989"
        }
      })
    ]
})
