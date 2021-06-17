import './style.css'

import firebase  from 'firebase/app';
import 'firebase/firestore';
import fbConfig from './secret';

const firebaseConfig = fbConfig;


if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    }
  ],
  iceCandidatePoolSize: 10
}

let pc = new RTCPeerConnectionIceEvent(servers);
let localStream = null;
let remoteStream = null;


const webcamButton = document.querySelector('#webcamButton');
const webcamVideo = document.querySelector('#webcamVideo');
const webcamVideo = document.querySelector('#callButton');
const webcamVideo = document.querySelector('#callInput');
const webcamVideo = document.querySelector('#answerButton');
const webcamVideo = document.querySelector('#remoteVideo');
const webcamVideo = document.querySelector('#hangupButton');


webcamButton.onclick = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:true});
}