let url = "https://kontests.net/api/v1/all"
let k = fetch(url)
k.then((response) => {
  return response.json()
}).then((contest) => {
  console.log(contest)
  ihtml = ""
  let pics = ["https://cdn.vectorstock.com/i/1000x1000/31/61/digital-java-code-text-computer-software-coding-vector-19533161.webp", "https://www.freecodecamp.org/news/content/images/size/w2000/2021/03/key-difference-between-coding-and-programming--2-.png", "https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696", "https://images.pexels.com/videos/2278095/free-video-2278095.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", "https://media.geeksforgeeks.org/wp-content/uploads/20220427142321/TopWebsitesForCodingChallengesCompetitions.jpg"];
  // const pic = document.querySelector('section');

  // var img = pics[a];
  for (item in contest) {
    console.log(contest[item])
    var a = Math.floor(Math.random() * pics.length);
    ihtml += `
          <div class="card" style="width: 18rem;margin:25px">
          
                <img src="${pics[a]}"; class="card-img-top" style="height:151px" alt="..." >
            <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">Visit here</a></p>
        p class="card-text">Side status is ${contest[item].status} and site is ${contest[item].side} </a></p>
        <p>Start at :${contest[item].start_time}
        <p>end at :${contest[item].end_time}
        <div class="buttoon" >
        <a href="${contest[item].url}" class="btn btn-primary" style="display:block">Visit contest</a>
      </div></div>
    </div>
 `
  }



  cardsconatiner.innerHTML = ihtml
})
