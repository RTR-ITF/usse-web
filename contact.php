<?php include "includes/header.php" ?>
<body>

    <!-- Navigation -->
    <?php include "includes/nav-bar.php" ?>

    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Contact
                    <small>Subheading</small>
                </h1>
                
            </div>
        </div>
        <!-- /.row -->

        <!-- Content Row -->
        <div class="row">
            <!-- Map Column -->
            <div class="col-md-8">
                <!-- Embedded Google Map -->
                <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" <iframe width="420" height="345" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Ulukade+Junction+Rd,+Sri+Lanka&amp;aq=0&amp;oq=ul&amp;sll=37.0625,-95.677068&amp;sspn=56.506174,79.013672&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Sathutu+Uyana,+Ganemulla,+Gampaha,+Western+Province,+Sri+Lanka&amp;ll=7.05775,79.959522&amp;spn=0.008763,0.009645&amp;z=14&amp;iwloc=lyrftr:m,1628981885762990429,7.060264,79.948379&amp;output=embed"></iframe>
            </div>
            <!-- Contact Details Column -->
            <div class="col-md-4">


              <div class= contact-item>
        					<h3>Head office & Factory</h3>
        					<p>USS Engineering (Pvt) Ltd.<br>
        							397, Galahitiyawa South,<br>
        							Ganemulla, Sri Lanka<br>
        					</p>
        					<p><i class="fa fa-phone"></i>
        						<abbr title="Phone">P</abbr>: +94332260066   <br>     +94335628911 - 3 </p>
        					<p><i class="fa fa-envelope-o"></i>
        						<abbr title="Email">E</abbr>: <a href="mailto:info@ussengineering.com">info@ussengineering.com</a>
        					</p>


        			</div>


        			<div class= contact-item>
        					<h3>Pole yard</h3>
        					<p>USS Engineering (Pvt) Ltd.<br>
        							397, Galahitiyawa South,<br>
        							Ganemulla, Sri Lanka<br>
        					</p>
        					<p><i class="fa fa-phone"></i> 
        						<abbr title="Phone">P</abbr>: +94332260066   <br>     +94335628911 - 3 </p>
        					<p><i class="fa fa-envelope-o"></i>
        						<abbr title="Email">E</abbr>: <a href="mailto:info@ussengineering.com">info@ussengineering.com</a>
        					</p>
        			</div>

        			<div class= contact-item>
        					<h3>Contact Details</h3>
        					<p>USS Engineering (Pvt) Ltd.<br>
        							397, Galahitiyawa South,<br>
        							Ganemulla, Sri Lanka<br>
        					</p>
        					<p><i class="fa fa-phone"></i>
        						<abbr title="Phone">P</abbr>: +94332260066   <br>     +94335628911 - 3 </p>
        					<p><i class="fa fa-envelope-o"></i>
        						<abbr title="Email">E</abbr>: <a href="mailto:info@ussengineering.com">info@ussengineering.com</a>
        					</p>
        			</div>

                <ul class="list-unstyled list-inline list-social-icons">
                    <li>
                        <a href="#"><i class="fa fa-facebook-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-linkedin-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter-square fa-2x"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-google-plus-square fa-2x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /.row -->

        <!-- Contact Form -->
        <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
        <div class="row">
            <div class="col-md-8">
                <h3>Send us a Message</h3>
                <form name="sentMessage" id="contactForm" novalidate>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Full Name:</label>
                            <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
                            <p class="help-block"></p>
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Phone Number:</label>
                            <input type="tel" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Email Address:</label>
                            <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
                        </div>
                    </div>
                    <div class="control-group form-group">
                        <div class="controls">
                            <label>Message:</label>
                            <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
                        </div>
                    </div>
                    <div id="success"></div>
                    <!-- For success/fail messages -->
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>

        </div>
        <!-- /.row -->

        <hr>

        <!-- Footer -->
        <?php include "includes/footer.php" ?>

</body>

</html>
