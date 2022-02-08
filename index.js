
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzbokYBXjwYXk4PBLDlgPeJUkbfNRQC2w",
  authDomain: "niharon-pub.firebaseapp.com",
  projectId: "niharon-pub",
  storageBucket: "niharon-pub.appspot.com",
  messagingSenderId: "157604027912",
  appId: "1:157604027912:web:0bbc9139c1a79f9f453bbd",
  measurementId: "G-W32EVLK4XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import firestore
import { 
    getFirestore,
    doc,
    updateDoc,
    increment,
    collection,
    getDocs,
  } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// init services
const db = getFirestore();

const showDownload = document.querySelector(".show-download");
var downloadbutton = document.getElementById('downloadbutton');

downloadbutton.addEventListener('click', () =>{
    const id = 'cntdoc';
    const cntRef = doc(db, 'Books', id)
        updateDoc(cntRef, {
            cnt: increment(1)
        })
        var current = parseInt(showDownload.innerHTML);
        var final = current + 1;

        showDownload.innerHTML = final;
})

const colRef = collection(db, 'Books') 
        getDocs(colRef)
          .then((snapshot)=>{

            const downCount = [];

            snapshot.docs.forEach((doc)=>{
              downCount.push(doc.data())
            })
            showDownload.innerHTML = downCount[0].cnt;
          })