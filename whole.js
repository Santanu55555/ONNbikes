const whole=()=>{
    return`<header class="Hoome" id="Hoome">
    <div class="image_container">
        <nav class="home_nav_bar">
            <ul class="flex-box-space-btw">
                <li>
                    <a href="#whyONNId">WHY ONN?</a>
                </li>
                <li>
                    <a href="#" onclick="showFleetAndPricing()">FLEET AND PRICING</a>
                </li>
                <li>
                    <a href="./safetypage/safety.html">SAFETY</a>
                </li>
                <li class="logo_li">
                    <a href="#">
                        <img src="images/onn logo/ONN logo.png" alt="" srcset="">
                    </a>
                </li>
                <li>
                    <a href="./support/home.html">FAQ</a>
                </li>
                <li style="position: relative;">
                    <a href="#Hoome" onclick="showLoginPopup()" class="signupNav"> LOGIN/SIGNUP</a>
                    <a href="#" onclick="showWelcomeContent()"class='welcomeNav hide'>WELCOME <span class="fa fa-caret-down"></span></a>
                    <div class="welcome-collapse-content">
                        <p onclick="showMyAccount()"><i class="fa fa-user"></i> MY ACCOUNT</p>
                        <p onclick='logoutUser()'><i class="fas fa-sign-out-alt"></i> LOGOUT</p>
                    </div>
                </li>
                <li>
                    <a href="tel:+91708467376">+91708467376</a>
                </li>
                <div class="hamburgerMenu" onclick="showMobileNavBar()">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="mobileNavBar">
                    <ul>
                        <li>
                            <a href="#whyONNId">WHY ONN?</a>
                        </li>
                        <li>
                            <a href="#" onclick="showFleetAndPricing()">FLEET AND PRICING</a>
                        </li>
                        <li>
                            <a href="./safetypage/safety.html">SAFETY</a>
                        </li>
                        <li>
                            <a href="./FAQ/index.html">FAQ</a>
                        </li>
                        
                        <li style="position: relative;">
                            <a href="#Hoome" onclick="showLoginPopup()" class="signupNav"> LOGIN/SIGNUP</a>
                            <a href="#" onclick="showWelcomeContent()" class='welcomeNav hide'>WELCOME <span
                                    class="fa fa-caret-down"></span></a>
                            <div class="welcome-collapse-content">
                                <p onclick="showMyAccount()"><i class="fa fa-user"></i> MY ACCOUNT</p>
                                <p onclick='logoutUser()'><i class="fas fa-sign-out-alt"></i> LOGOUT</p>
                            </div>
                        </li>
                        
                        <li>
                            <a href="#"> +7008467376</a>
                        </li>
                    </ul>
                </div>
            </ul>
        </nav>
      <div id="mainpart"></div>
<div class="main_contentFaq">
    <div class="FAQs_section">
        <h2>Top FAQs</h2>
        <p>Renting a Bike should be Easy, Like our FAQs.</p>

        <div class="FAQ_ques_section flex-box-space-btw">
            <div>
                <h3><i class="fas fa-circle"></i> How do I pay?</h3>
                <p>You can pay online using debit/credit card or e-wallets. You can also pay at the hub station
                    during your vehicle
                    pick-up.</p>
                <h3><i class="fas fa-circle"></i> Where can I pick up the bike from?</h3>
                <p>While booking your bike, you’ll be given an option to select a pick-up location in your vicinity.
                </p>
            </div>
            <div>
                <h3><i class="fas fa-circle"></i> What documents do I need to show while booking?</h3>
                <p>You need to show your original valid driving license and submit any one original government
                    verified ID proof.</p>
                <h3><i class="fas fa-circle"></i> Will I be getting a complimentary helmet?</h3>
                <p>Due to COVID-19 pandemic, we avoid providing helmets to customers. We suggest customers to bring
                    their own helmets.</p>
            </div>
        </div>

        <p class="blog_FAQ_link">If you have any more doubts, please visit our <a href="./FAQ/index.html">FAQ Section</a> <br>
            Our Daily Bike Renting Plan is the most affordable plan in India. Check out our Fleet and Pricing
            section on top for
            more detailed information and if you are a bike enthusiast, check out our Blog.
        </p>
        <div class="popular_bike_for_rent">
            <div class="popular_Bike_Heading">
                <h5>Popular Bikes for Rent:</h5>
            </div>
            <div>
                <p>Honda Activa for rent</p>
                <p>Pulsar 150 for rent</p>
                <p>Royal Enfield 350 Classic for rent</p>
                <p>Avenger 220 Street for rent</p>
                <p>Bajaj CT 100 for rent</p>
            </div>
            <div>
                <p>Honda Activa for rent</p>
                <p>Pulsar 150 for rent</p>
                <p>Royal Enfield 350 Classic for rent</p>
                <p>Avenger 220 Street for rent</p>
                <p>Bajaj CT 100 for rent</p>
            </div>
        </div>
    </div>
</div>`
}
export{whole}