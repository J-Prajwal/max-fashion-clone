function navbar() {
    return `<div id="navbar">
    <div id="left">
        <div id="tooltip"><i class="fa-solid fa-truck"></i>Free Shipping<span class="tooltiptext">On All Orders
                Above ₹499</span>
        </div>
        <div id="tooltip"><i class="fa-solid fa-shop"></i>Return To Store <span class="tooltiptext">visit to
                your nearest store.</span></div>
        <div id="tooltip"><i class="fa-solid fa-shop"></i>Click & Collect<span class="tooltiptext">Order Online
                And Collect at a Store Of Your Choice For Free. <a
                    href="https://www.maxfashion.in/click-and-collect" target="_blank"
                    rel="noopener noreferrer">Learn more.</a></span></div>
    </div>
    <div id="right">
        <div>Download Our Apps</div>
        <div style="color: grey; font-size: 18px;">|</div>
        <div>Store Locator</div>
        <div style="color: grey; font-size: 18px;">|</div>
        <div>Help</div>
    </div>
</div>
<div id="navbar2">
    <div id="left">
        <div><img
                src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
                alt="" id="mainLogo"></div>
        <div><a href="womens.html">Women</a></div>
        <div><a href="mens.html">Men</a></div>
        <div><a href="girls.html">Girls</a></div>
        <div><a href="boys.html">Boys</a></div>
        <div id="searchBox"><span><i class="fa-solid fa-magnifying-glass"></i></span><input type="text"
                id="search" placeholder="What are you looking for?"></div>
    </div>
    <div id="right">
        <div id="user">
            <button type="button" id="signupBtn" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#signup"
                style="background-color: transparent; border: none; color: black; padding: 0%;">
                Sign up - Sign in
            </button>
        </div>
        <div style="color: grey; font-size: 18px;">|</div>
        <a href="cart.html"><div style = "display: flex;"> 
        <div><a href="Basket.html"> Basket </a>
            <i class="fa-solid fa-bag-shopping" style="margin-left: 10px;"></i> 
        </div>
                <div id="basketCounter">1</div>
            </div>
    </div> </a>
</div>

<div class="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header" style="display: flex; flex-direction: column;">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h5 align="left" class="modal-title" id="exampleModalLabel">Sign up or Sign in</h5>
                <p>Enjoy the convenience of a single account accross all participating brands</p>
            </div>
            <div class="modal-body" style="display: flex; flex-direction: column;">
                <h5>Mobile Number</h5>
                <div style="display: flex; gap: 0; border: 1px solid blue;">
                    <div style=" display: flex; align-items: center; padding: 10px;">
                        <div>
                            +91
                        </div>
                    </div>
                    <input type="text" placeholder="Enter your mobile number" id="mobileNumber"
                        style="width: 100%; border: none; outline: none;">
                </div>
                <p>By creating your account you agree to our <a
                        href="https://www.maxfashion.in/in/en/termsandconditions" target="_blank"
                        rel="noopener noreferrer">Terms and Conditions</a></p>
            </div>
            <div class="modal-footer">
                <button type="button" id="gotoOtp" class="btn btn-secondary" data-bs-dismiss="modal"
                    data-bs-toggle="modal" data-bs-target="#otp">Continue</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="otp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header" style="display: flex; flex-direction: column;">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h5 class="modal-title" id="exampleModalLabel">Sign up or Sign in</h5>
                <div>
                    <p>Enjoy the convenience of a single account accross all participating brands</p>
                </div>
            </div>
            <div class="modal-body" style="display: flex; flex-direction: column;">
                <h5>Verify with OTP</h5>
                <div>
                    <p id="sentTo">Sent to </p>
                </div>
                <div id="fillOtp" style="display: flex; gap: 5px; width: 100%;">
                    <input type="text" maxlength="1" id="otp1" class="inputs">
                    <input type="text" maxlength="1" id="otp2" class="inputs">
                    <input type="text" maxlength="1" id="otp3" class="inputs">
                    <input type="text" maxlength="1" id="otp4" class="inputs">
                    <input type="text" maxlength="1" id="otp5" class="inputs">
                </div>
            </div>
            <p style="color: red; font-size: 12px; padding-left: 3%;" id="wrongOtp"></p>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                    id="otpVerify">Continue</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="linkAccount" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header" style="display: flex; flex-direction: column;">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-bs-toggle="modal"
                    data-bs-target="#finalForm"
                    style="border: none; background-color: transparent; color: grey;">Skip</button>
                <h5 class="modal-title" id="exampleModalLabel">Link your account</h5>
                <div>
                    <p>Existing User please login to your account to link your account to your phone number,
                        it's one lifetime process</p>
                </div>
            </div>
            <div class="modal-body" style="display: flex; flex-direction: column;">
                <input type="text" id="email" placeholder="Enter your email" style="height: 50px;" />
            </div>
            <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#finalForm"
                    class="btn btn-secondary" id="linkEmail">Proceed</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="finalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header" style="display: flex; flex-direction: column;">
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                <h5 class="modal-title" id="exampleModalLabel">How do we address you?</h5>
            </div>
            <div class="modal-body" style="display: flex; flex-direction: row; gap: 10px; margin: auto;">
                <input type="text" id="fname" placeholder="First Name" style="height: 50px;" />
                <input type="text" id="lname" placeholder="Last Name" style="height: 50px;" />
            </div>
            <div style="padding-left: 11%;"><input type="checkbox" id="x"><label for="x"
                    style="padding-left: 5px;">Enroll me for Landmark Rewards</label></div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-bs-toggle="modal"
                    data-bs-target="#linkAccount">GO BACK</button>
                <button type="button" class="btn btn-secondary" id="userName">CONTINUE</button>
            </div>
        </div>
    </div>
</div>`
}

function footer() {
    return `<div id="top">
    <div>
        <h2>Subscribe to our awesome emails.</h2>
        <p>Get our latest offers and news straight in your inbox.</p>
        <input type="text" placeholder="Please enter an email address" id="newsletter" /><span><button
                id="subscribe">Subscribe</button></span>
        <p style="color: red; font-size: 14px; visibility: hidden;">Enter your email address</p>
    </div>
    <div>
        <h2>Download our apps</h2>
        <p>Shop our products and offers on-the-go</p>
        <div id="apps">
            <img src="./assets/appStore.png" alt="">
            <img src="./assets/playStore.png" alt="">
        </div>
    </div>
</div>
<hr align="center" width="90%" height="1px" style="margin: auto;">
<div id="middle">
    <div>
        <ul>
            <li style="color: black;"><b>women</b></li>
            <li><a href="womens-product.html" target="_blank">tops</a></li>
            <li>dresses & jumpsuits</li>
            <li>bottoms</li>
            <li>winterwear</li>
            <li>ethnicwear</li>
            <li>lingerie</li>
            <li>sleepwear</li>
            <li>accessories</li>
            <li>shoes</li>
        </ul>
    </div>
    <div>
        <ul>
            <li style="color: black;"><b>mens</b></li>
            <li>tops</li>
            <li>bottoms</li>
            <li>sportswear</li>
            <li>winterwear</li>
            <li>accessories</li>
            <li>shoes</li>
        </ul>
    </div>
    <div>
        <ul>
            <li style="color: black;"><b>boys</b></li>
            <li>tops</li>
            <li>bottoms</li>
            <li>indian wear</li>
            <li>winter wear</li>
            <li>essentials</li>
            <li>accessories</li>
            <li>shoes</li>
        </ul>
    </div>
    <div>
        <ul>
            <li style="color: black;"><b>girls</b></li>
            <li>tops</li>
            <li>bottoms</li>
            <li>indian wear</li>
            <li>winter wear</li>
            <li>essentials</li>
            <li>accessories</li>
            <li>shoes</li>
        </ul>
    </div>
    <div>
        <ul>
            <li style="color: black;"><b>explore</b></li>
            <li>offers</li>
            <li>magazine</li>
        </ul>
    </div>
    <div>
        <ul>
            <li style="color: black;"><b>about</b></li>
            <li>about us</li>
            <li>write to us</li>
            <li>careers</li>
            <li>take a tour</li>
            <li>blog</li>
            <li>store locator</li>
            <li>landmark cares</li>
        </ul>
    </div>
    <div>
        <ul>
            <li style="color: black;"><b>help</b></li>
            <li>contact us</li>
            <li>shipping</li>
            <li>return process</li>
            <li>return policy</li>
            <li>help centre</li>
        </ul>
    </div>
</div>
<div id="bottom">
    <div id="details">
        <div id="queries">
            <div>
                <div id="iconFooter"><i class="fa-solid fa-phone fa-1.5x"></i></div>
                <div style="display: flex; flex-direction: column;">
                    <div id="data" style="margin-left: -37%; color: grey;">Talk to us</div>
                    <div id="data">1800-123-1444</div>
                </div>
            </div>
            <div>
                <div id="iconFooter"><i class="fa-solid fa-circle-question fa-1.5x"></i></div>
                <div style="display: flex; flex-direction: column;">
                    <div id="data" style="margin-left: -47%; color: grey;">Helpcentre</div>
                    <div id="data">help.maxfashion.com</div>
                </div>
            </div>
            <div>
                <div id="iconFooter"><i class="fa-solid fa-envelope fa-1.5x"></i></div>
                <div style="display: flex; flex-direction: column;">
                    <div id="data" style="margin-left: -57%; color: grey;">Write to us</div>
                    <div id="data">help.in@maxfashion.com</div>
                </div>
            </div>
        </div>
        <div id="social" style="display: flex; align-items: center; gap: 15px;">
            <div id="fb"><i class="fa-brands fa-facebook-f"></i></div>
            <div id="twitter"><i class="fa-brands fa-twitter"></i></div>
            <div id="insta"><i class="fa-brands fa-instagram"></i></div>
        </div>
    </div>
    <div style="display: flex; line-height: 7px; font-size: 14px; align-items: center; color: grey;">
        <div><img
                src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
                alt="" id="mainLogo"></div>
        <div>
            <p>© 2022 Retail World Limited.</p>
            <p><a href="" id="link">Terms & Conditions</a> - <a href="" id="link">Privacy Policy</a></p>
        </div>
    </div>
</div>`
}

export { navbar, footer };