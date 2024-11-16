// list of pages to like
likes_list = [{
	"imageUrl":'resources/images/amazon_logo.png',
	"title":'Amazon',
	"link":'www.amazon.com'
}, {
	"imageUrl":'resources/images/google_logo.png',
	"title":'Google',
	"link":'www.google.com'
}];

events_list = [{
	"imageUrl":'resources/images/music_event.jpeg',
	"title":'Coachella 2024',
	"desc":'Music Festival'
}];


tweets_list = [{
	"imageUrl":'resources/images/psit_logo.jpg',
	"title":'PSIT KANPUR',
	"desc":'sample tweet'
}, {
	"imageUrl":'resources/images/logo2.jpg',
	"title":'X',
	"desc":'another sample tweet'
}];

function renderPagesToLike(){
	// looping likes_list and generate the neccesary html
	let likesHTML = '';
	for (ele of likes_list){
		// ele
		likesHTML += `
		<div class="likes_ele">
			<img src="${ele.imageUrl}" alt="" > 
			<a href="${ele.link}">${ele.title}</a>
		</div>
		`;
	}
	document.getElementById('likes_list').innerHTML = likesHTML;
}

function renderTweets(){
	// looping tweets_list and generate the neccesary html
	let tweetsHTML = '';
	for (ele of tweets_list){
		// ele
		tweetsHTML += `
		<div class="tweets_ele">
			<img src="${ele.imageUrl}" alt="" > 
			<div class="tweets_ele_content">
				<h2>${ele.title}</h2>
				<p>${ele.desc}</p>
			</div>
			<button>delete</button>
		</div>
		`;
	}
	document.getElementById('tweets_list').innerHTML = tweetsHTML;
}

function addTweetHandler(){
	const tweet = {
		"imageUrl":'resources/images/psit_logo.jpg',
		"title":'p1',
		"desc":'p1 tweet'
	}
	
	tweets_list = [tweet , ...tweets_list];

	renderTweets();
}


function logoutHandler(){
	// update auth variable for user in local storage
	localStorage.setItem('is_user_authenticated','false');
	location.href = 'index.html';
}

// fetch from local storage and check if user is authenticated to login
const is_user_authenticated = localStorage.getItem('is_user_authenticated') || 'false';
// if not , redirect to login page
if (is_user_authenticated  === 'false'){
	console.log('unauthorized');
	location.href = 'index.html';
}
renderPagesToLike();
//renderEventstoLike();
//renderFollowersToFollow();
renderTweets();