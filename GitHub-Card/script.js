const url = 'https://api.github.com/users/LucasCarrasco2077'

const data = document.querySelector('.data')

fetch(url)
  .then(resp => resp.json())
  .then(user => {
    data.innerHTML = `
    <div class='container'>
   <img src= ${user.avatar_url}/> 
   <div class='name'>${user.name}</div> 
   <div class='login'> @${user.login}</div>
   <p>${user.bio}</p>
   
   <hr/>

   <div class='data'> 
    <div class='followers'>${user.followers}
    <p>Followers</p>
    </div>

    <div class='following'>${user.following}
    <p>Following</p>
    </div>

    <div class='followers'>${user.public_repos}
    <p>Repositories</p>
    </div>

   </div>
  </div>
   `
  })
