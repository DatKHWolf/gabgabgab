const app = Vue.createApp({
    // Optionen 
    data: function(){
        return {
            submissions: submissions, // aus seed.js
            totalVotes:0
        }
    },
     computed:{
        totalVotes(){
            console.log("computed property ausgeführt")
            return this.submissions.reduce((totalVotes, submission)=>{
                return totalVotes + submission.votes
            }, 0)
        }

    } 
    ,
    methods: {
        upvote(){
            this.submission.votes++
        },

    },
    watch:{
       
    }
})

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount('#app')