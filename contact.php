<?php include "includes/header.php" ?>
<body>

    <!-- Navigation -->
    <?php include "includes/nav-bar.php" ?>

    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Contact Us

                </h1>
                
            </div>
        </div>
        <!-- /.row -->

        <!-- Content Row -->
        <div class="row">
        <img class="img-responsive" src="http://placehold.it/1300x150" alt="">
        </div>
        <div class="row">
            <div class="col-lg-12">
            <h2>24, Rosmead Place, Colombo 07, Sri Lanka.</h2>
            <h4> <i class="fa fa-phone"></i> &nbsp<abbr title="Phone">Hotline</abbr>: +94 77 358 18 92, +94 77 226 00 67  &nbsp | &nbsp 
                            <i class="fa fa-envelope-o"></i> &nbsp
                                <abbr title="Email">Email </abbr>: <a href="mailto:info@ussengineering.com">info@ussengineering.com<br></a>
                            </h4>

 </div>
  </div>
            <div class="row" style=" margin-top: 50px;">
            
            <!-- Contact Details Column -->
                <div class="col-md-5">
        			<div class= contact-item >
        					<h3>HEAD OFFICE & FACTORY</h3>
                            <p>
                                <i class="fa fa-industry"></i>397, Galahitiyawa South,Ganemulla, Sri Lanka<br>
                                C3, Ekala Industrial Zone, Ekala.<br>

                                    <abbr title="Phone"> Tel</abbr>:


                                    +94 33 5625555, +94 33 2260066 , +94 33 5628911-3

                                    <br>

                                    <abbr title="Fax"> Fax        </abbr>:

                                +94 33 2260321

        					</p>
        			</div>
                    <div class= contact-item style=" margin-top: 50px;">
                            <h3>CONCRETE PRODUCTS-PRODUCTION FACILITIES</h3>
                                232/1, Pahala Imbulgoda, Imbulgoda<br>
                                <p>
                                    <abbr title="Phone"> Tel</abbr>:

                                    +94 33 2257509, +94 33 5620673

                                <br><br>Galodaya Waththa, Galodaya, Padiyathalawa.<br>

                                    <abbr title="Phone"> Tel</abbr>:

                                    +94 63 2246220


                                <br><br>
                                    208, Ponnimankulam, Galkulama, Anuradapura.<br>

                                    <abbr title="Phone">  Tel       </abbr>:

                                +94 25 5624888

                            </p>
                        </div>

   </div>              
        			<!-- Map Column -->
            <div class="col-md-7">
                <!-- Embedded Google Map -->
                <iframe width="100%" height="400px" frameborder="0" 
                scrolling="no" marginheight="0" marginwidth="0" <iframe width="420"
                 height="345" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                 src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Ulukade+Junction+Rd,+Sri+Lanka&amp;aq=0&amp;oq=ul&amp;sll=37.0625,-95.677068&amp;sspn=56.506174,79.013672&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Sathutu+Uyana,+Ganemulla,+Gampaha,+Western+Province,+Sri+Lanka&amp;ll=7.05775,79.959522&amp;spn=0.008763,0.009645&amp;z=14&amp;iwloc=lyrftr:m,1628981885762990429,7.060264,79.948379&amp;output=embed"></iframe>
            </div>


        </div>
        <!-- /.row -->

        <!-- Contact Form -->
        <!-- In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. -->
        <div class="row" style=" margin-top: 100px;">
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
