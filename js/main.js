function play(id){
    if(document.getElementById(id).className=="music 0")
    {
        document.getElementById(id).src="images/pause.png"
        document.getElementById(id).className="music 1"
    }else{
        document.getElementById(id).src="images/play.png"
        document.getElementById(id).className="music 0"
    }
}
const app = new Vue({
  el:"#app",
  data:{
    labels : []
  },
  async created(){
    var firebaseConfig = {
      apiKey: "AIzaSyBRPTYrGurdv3LGoLbIe3Z7bCSzf1GTiv0",
      authDomain: "challenge-mil3r.firebaseapp.com",
      databaseURL: "https://challenge-mil3r.firebaseio.com",
      projectId: "challenge-mil3r",
      storageBucket: "challenge-mil3r.appspot.com",
      messagingSenderId: "501597643651",
      appId: "1:501597643651:web:e765718303a21aa7b70cb6",
      measurementId: "G-JY3E9447J4"
    };
    firebase.initializeApp(firebaseConfig);
      await firebase.database().ref('Devs/').once('value')
        .then(function(snapshot){
            app.labels = snapshot.val()
        })
    }
  })