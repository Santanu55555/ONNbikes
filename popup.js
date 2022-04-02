function popup1(){
    return `  <div class="selectCity-overlay hide">
    <div class="selectCity">
        <div class="removeSelectCity" onclick="removePopUp('selectCity-overlay')"></div>
        <div class="searchArea">
            <div class="cityInputCont">
                <input type="text" name="searchCity" id="searchCity" oninput="filterRideNowCities()" placeholder="Enter your city to search">
            </div>
            <div class="CitySearchInputInfo">
                <p>You've selected <br><span>Bengaluru</span></p>
                <p class="city-search-input-info-para2">Tell us where you are and <br>we make sure you #RideONN</p>
            </div>
        </div>
        <div class="cityArea">
            
        </div>
    </div>
</div>


<!-- this is login popup -->
<div class="loginPopupOverlay hide">
<div class="loginPop">
    <div class="loginPopRemove" onclick="removePopUp('loginPopupOverlay')"></div>
    <div class="logoSec"></div>
    <div class="otpSec hide">
        <div class="otp_heading">
            <p>OTP VERIFY</p>
        </div>

        <input type="text" name="otp" id="otp" placeholder="OTP">

        <p class="otpInfo">One Time Password (OTP) has been sent to your mobile, please enter the same here to login.</p>
        <button onclick="verifyOTP()" class="verifyOTP">Request Verify</button>
    </div>
    <div class="formSec">
        <div class="heading">
            <span class="currForm" onclick="showSignup()">LOGIN</span> | <span onclick='showSignup()'>SIGNUP</span>
        </div>
        <div class="fb_google">
            <div class="fbLogin">
                <button>facebook</button>
            </div>
            <div class="googleLogin">
                <button>Google+</button>
            </div>
        </div>
        <div class="divider">
            <span>OR</span>
        </div>
        <form id="login_form">
            <div class="inputCont">
                <input type="text" name="email/number" id="emailORPhone" placeholder="EMAIL ID / Phone number">
            </div>
            <div class="inputCont">
                <input type="password" name="password" id="password" placeholder="Password">
            </div>
            <div class="inputCont checkbox">
                <label for="remember_me">
                    <input type="checkbox" name="remember_me" id="remember_me"> Remember me
                </label>
            </div>
            <button class="login-Btn" onclick="checkUsers(event)">Login</button>
            <div>
                <a href="#" onclick="showSignup()">New to ONN Bikes? Signup</a>
            </div>
        </form>
        <form id="signup_form" class="hide">
            <div>
                <div>
                    <input type="text" name="first_name" id="first_name" placeholder="First Name" class="input-event">
                    <p class="required_field">This field is required</p>
                    <p class="warning">No space and special character</p>
                </div>
                <div>
                    <input type="text" name="last_name" id="last_name" placeholder="Last Name" class="input-event">
                    <!-- <p class="required_field">This field is required</p> -->
                    <p class="warning">No space and special character</p>
                </div>
            </div>
            <div>
                <div>
                    <input type="text" name="email" id="email" placeholder="Email Address" class="input-event">
                    <p class="required_field">This field is required</p>
                    <p class="warning">Enter a valid email id</p>
                </div>
                <div>
                    <input type="text" name="mobile" id="mobile" placeholder="Mobile Number(10 Digits)" class="input-event">
                    <p class="required_field">This field is required</p>
                    <p class="warning">Enter a valid mobile number</p>
                </div>
            </div>
            <div>
                <div>
                    <input type="password" name="password" id="password" placeholder="Password" class="input-event">
                    <p class="required_field">This field is required</p>
                    <p class="warning">Minimum 6 character</p>
                </div>
            </div>
            <button class="login-Btn" onclick="signupUser(event)">Signup</button>
            <div>
                <a href="#" onclick="showSignup()">New to ONN Bikes? Signup</a>
            </div>
        </form>
    </div>
</div>
</div>


<div id="fnp"></div>


<div class="paymentDoneOrNotOverlay hide">
<div class="paymentDoneOrNot">
    <div class="paymentDoneRemove" onclick="removePopUp('paymentDoneOrNotOverlay')"></div>
    <div class="paymentResult">
        <h1>YOUR BOOKING WAS SUCCESSFUL. PAYMENT DONE.</h1>
        <h1 style="color: #1d2d51;">THANK YOU <i class="fas fa-glass-cheers"></i></h1>
    </div>
</div>
</div>
<div id="footerhe"> </div>`
}
export {popup1}