const header=()=>{
    return `<div class="banner-wrapper page">
    <div class="banner-title">
        <a href=""class='portal-logo'><span class="portal-img"><i></i>
            <img src='https://s3.ap-south-1.amazonaws.com/ind-cdn.freshdesk.com/data/helpdesk/attachments/production/81004025027/logo/uYFu0uqcdeVROroO5-FQ1YFyS7moWmHM9A.png' alt="Logo"
                onerror="default_image_error(this)" data-type="logo" />
         </span></a>
        <p class="ellipsis Heading">Simplifying Mobility</p>
    </div>
    <nav class="banner-nav">
         <div class="welcome">Welcome  </div>
          <div id="login">
              <div id="lg"> <a id="l" href="login.html">Login</a>  </div>
              <div id="su"> <a id="s" href="signup.html">Sign up</a></div>
         </div>
        </nav>
</div>

<nav class="page-tabs">
<div><a href="home.html" class="home">Home</a></div>
<div><a href="solutions.html" class="active">Solutions</a></div>


</nav>`
}



const footer = ()=>{
   return `<div class="footer">
			
   <div id="f">
       <a href="home.html" class="hm">Home</a>  -
       <a href="solutions.html" class="ac">Solutions</a>
   </div>
   <div><a href=""> Cookie policy</a></div>
</div>
<div class="copyright">
<a href="" target="_blank"> Help Desk Software </a>
by Freshdesk Support Desk
</div> `
}
export  {header,footer}