<?php include "includes/header.php" ?>

<body>
    <!-- Navigation -->
        <?php include "includes/nav-bar.php" ?>


    <!-- Page Content -->
    <div class="container">

        <!-- Page Heading/Breadcrumbs -->

        <div class="row"> 
            <ul  class="page-header list-group">
                <li class="list-group-item">
                    <a  role="button" data-toggle="collapse" href="#collapsePClients" aria-expanded="false" aria-controls="collapseExample">
                      Principal Clients
                    </a>
                     <ul class ="collapse " id="collapsePClients">
                        <li >
                            <a href="#PClient1"> Client 1</a>
                        </li>
                        <li >
                            <a href="#PClient2"> Client 2</a>
                        </li>
                </ul>
                </li>
                <li class="list-group-item">
                    <a  role="button" data-toggle="collapse" href="#collapseOClients" aria-expanded="false" aria-controls="collapseExample">
                      Other Clients
                    </a>
                     <ul class ="collapse " id="collapseOClients">
                        <li >
                            <a href="#OClient1"> Client 1</a>
                        </li>
                        <li >
                            <a href="#OClient2"> Client 2</a>
                        </li>
                </ul>
                </li>               
            </ul>
        </div>
        <div class="row">
                <h1 class="page-header"> Principal Clients 
                                    <img class="img-responsive img-hover" src="http://placehold.it/1170x300" alt="">

<!--                     <small>Subheading</small>
 -->                </h1>
        </div>
        <!-- /.row -->

        <div class="row">

            <!-- Blog Entries Column -->

                <!-- First Blog Post -->
                <h2>
                    <a href="#" id="PClient1">Client 1</a>
                </h2>
                <p class="lead">
                    by <a href="index.php"></a>
                </p>
                <p><i class="fa fa-clock-o"></i> Project name or a title with the client</p>
                <hr>
                <a href="blog-post.html">
                    <img class="img-responsive img-hover" src="http://placehold.it/900x300" alt="">
                </a>
                <hr>
                <p> Description about the project that has beem done or doing currently after the read more button is presses. With a java script effect</p> 
                <a class="btn btn-primary" href="#">Read More <i class="fa fa-angle-right"></i></a>

                <hr>

                <!-- Second Blog Post -->
               

                <!-- Third Blog Post -->
                <h2>
                    <a href="#" id="PClient2">Client 2</a>
                </h2>
                <p class="lead">
                    by <a href="index.php"></a>
                </p>
                <p><i class="fa fa-clock-o"></i> Project name or a title with the client</p>
                <hr>
                <a href="blog-post.html">
                    <img class="img-responsive img-hover" src="http://placehold.it/900x30" alt="">
                </a>
                <hr>
                <p> Description about the project that has beem done or doing currently</p> 
                <a class="btn btn-primary" href="#">Read More <i class="fa fa-angle-right"></i></a>

                <hr>                


            <div class="container">

        
        <div class="row" id = "OtherClients">
                <h1 class="page-header"> Other Clients
                                    <img class="img-responsive img-hover" src="http://placehold.it/1170x300" alt="">

<!--                     <small>Subheading</small>
 -->                </h1>
        </div>
        <!-- /.row -->

        <div class="row">

            <!-- Blog Entries Column -->

                <!-- First Blog Post -->
                <h2>
                    <a href="#" id="OClient1">Client 1</a>
                </h2>
                <p class="lead">
                    by <a href="index.php"></a>
                </p>
                <p><i class="fa fa-clock-o"></i> Project name or a title with the client</p>
                <hr>
                <a href="blog-post.html">
                    <img class="img-responsive img-hover" src="http://placehold.it/900x300" alt="">
                </a>
                <hr>
                <p> Description about the project that has beem done or doing currently after the read more button is presses. With a java script effect</p> 
                <a class="btn btn-primary" href="#">Read More <i class="fa fa-angle-right"></i></a>

                <hr>
                <h2>
                    <a href="#" id="OClient2">Client 2</a>
                </h2>
                <p class="lead">
                    by <a href="index.php"></a>
                </p>
                <p><i class="fa fa-clock-o"></i> Project name or a title with the client</p>
                <hr>
                <a href="blog-post.html">
                    <img class="img-responsive img-hover" src="http://placehold.it/900x300" alt="">
                </a>
                <hr>
                <p> Description about the project that has beem done or doing currently after the read more button is presses. With a java script effect</p> 
                <a class="btn btn-primary" href="#">Read More <i class="fa fa-angle-right"></i></a>

                <hr>

                <!-- Second Blog Post -->
               

                <!-- Third Blog Post -->
                <h2>
                    <a href="#">Client 2</a>
                </h2>
                <p class="lead">
                    by <a href="index.php"></a>
                </p>
                <p><i class="fa fa-clock-o"></i> Project name or a title with the client</p>
                <hr>
                <a href="blog-post.html">
                    <img class="img-responsive img-hover" src="http://placehold.it/900x30" alt="">
                </a>
                <hr>
                <p> Description about the project that has beem done or doing currently</p> 
                <a class="btn btn-primary" href="#">Read More <i class="fa fa-angle-right"></i></a>

                <hr>  

                </div>              


    <?php include "includes/footer.php" ?>


</body>

</html>
