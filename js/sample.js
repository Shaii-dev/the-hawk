// Navbar Being Visible on scroll

//When the document is ready...
$(document).ready(function () {

  //and the window is scrolled...
  $(window).on("scroll", function () {

    //create a variable
    var wn = $(window).scrollTop();

    //when window is scrolled a distance of 150 from the top
    if (wn > 150) {

      //navbar will change the display to "block"
      $(".navbar").css("display", "block")
    }

    // if not then the display will be "none"
    else {
      $(".navbar").css("display", "none")
    }
  });
}); // Code end Here



// Navbar Menu active
// When the document is ready...
$(document).ready(function () {

  // and the window is scrolled...
  $(window).on("scroll", function () {

    // it will check this object...
    $('#a-home').each(function (i) {

      // and create 2 variable...
      var bottom_of_object = $(this).offset().top + $(this).height(); // will get the height of the object
      var bottom_of_window = $(window).scrollTop() + $(window).height(); // will get the height of the window

      // If the object is completely visible in the window...
      if (bottom_of_window > bottom_of_object) {

        // remove the "active" class to the current nav-item...
        $('.nav-item.active').removeClass('active')

        // and add it to this object.
        $('#m-design').addClass('active')
      }

    });

    // it will check this object...
    $('.design-title').each(function (i) {

      // and create 2 variable...
      var bottom_of_object = $(this).offset().top + $(this).height(); // will get the height of the object
      var bottom_of_window = $(window).scrollTop() + $(window).height(); // will get the height of the window

      // If the object is completely visible in the window...
      if (bottom_of_window > bottom_of_object) {

        // remove the "active" class to the current nav-item...
        $('.nav-item.active').removeClass('active')

        // and add it to this object.
        $('#m-design').addClass('active')
      }

    });

    // it will check this object...
    $('.info-title').each(function (i) {

      // and create 2 variable...
      var bottom_of_object = $(this).offset().top + $(this).height(); // will get the height of the object
      var bottom_of_window = $(window).scrollTop() + $(window).height(); // will get the height of the window

      // If the object is completely visible in the window...
      if (bottom_of_window > bottom_of_object) {

        // remove the "active" class to the current nav-item...
        $('.nav-item.active').removeClass('active')

        // and add it to this object.
        $('#m-info').addClass('active')
      }

    });

    // it will check this object...
    $('.comfort-title').each(function (i) {

      // and create 2 variable...
      var bottom_of_object = $(this).offset().top + $(this).height(); // will get the height of the object
      var bottom_of_window = $(window).scrollTop() + $(window).height(); // will get the height of the window

      // If the object is completely visible in the window...
      if (bottom_of_window > bottom_of_object) {

        // remove the "active" class to the current nav-item...
        $('.nav-item.active').removeClass('active')

        // and add it to this object.
        $('#m-comfort').addClass('active')
      }

    });

    // it will check this object...
    $('.safety-title').each(function (i) {

      // and create 2 variable...
      var bottom_of_object = $(this).offset().top + $(this).height(); // will get the height of the object
      var bottom_of_window = $(window).scrollTop() + $(window).height(); // will get the height of the window

      // If the object is completely visible in the window...
      if (bottom_of_window > bottom_of_object) {

        // remove the "active" class to the current nav-item...
        $('.nav-item.active').removeClass('active')

        // and add it to this object.
        $('#m-safety').addClass('active')
      }

    });

    // it will check this object...
    $('.trims-title').each(function (i) {

      // and create 2 variable...
      var bottom_of_object = $(this).offset().top + $(this).height(); // will get the height of the object
      var bottom_of_window = $(window).scrollTop() + $(window).height(); // will get the height of the window

      // If the object is completely visible in the window...
      if (bottom_of_window > bottom_of_object) {

        // remove the "active" class to the current nav-item...
        $('.nav-item.active').removeClass('active')

        // and add it to this object.
        $('#m-trims').addClass('active')
      }

    });
  });
});

// this will make every anchor "a" that has an attribute of href to have a smooth scroll effect

//when anchor with href attribute is clicked...
$('a[href^="#"]').click(function () {

  //will have a smooth scroll effect to travel to its target within 800ms
  $('html, body').animate({ scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top }, 800);

  return false;

}); // Code end Here
 

// Go to Top Button...
window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  // if the document was scrolled a distance of 20 from the top...
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    // change the display style of "#myBtn" to block
    document.getElementById("myBtn").style.display = "block";
  } else {

    // if not change the display style to none
    document.getElementById("myBtn").style.display = "none";
  }
} // Code end Here



// Connecting the slider to its content


// This is for Slider and Content of INFOTAINMENT
// When the Document is ready..
$(document).ready(function () {

  // Create 2 varialbe "a" and "b"
  var a = $('#sing')
  var b = $('#app')

  // when the slider finishes the slide animation...
  $('#infotainment-carousel').on('slid.bs.carousel', function () {

    // it will check if varialbe "a" has a class of active...
    if (a.hasClass('active')) {

      // if it has, the d-inline-flex class will be remove from ".app"...
      $('.app').removeClass('d-inline-flex')

      // and it will be added to ".sing"
      $('.sing').addClass('d-inline-flex')

      // if it doesn't have "active"...
    } else {

      // d-inline-flex will be remove from ".sing"...
      $('.sing').removeClass('d-inline-flex')

      // and be added to ".app"
      $('.app').addClass('d-inline-flex')
    }
  })
}); // Code end Here


// Slider of Design & Equipment
// When the Document is ready...
$(document).ready(function () {

  //create Multiple Variable
  var a = $('#exterior') //image slider for exterior
  var b = $('#headlight') //image slider for headlight
  var c = $('#gear') //image slider for gear
  var d = $('#cargo') //image slider for cargo

  var a1 = $('.exterior') //content for exterior slide
  var b1 = $('.headlight') //content for headlight slide
  var c1 = $('.gear') //content for gear slide
  var d1 = $('.cargo') //content for cargo slide

  // when the slider finishes the slide animation...
  $('#design').on('slid.bs.carousel', function () {

    // it will check if "a" has a class of "active"...
    if (a.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption.d-block').removeClass('d-block')

      // and be added to class "a1"
      $(a1).addClass('d-block')
    }

    // if "a" doesn't have "active", it will check "b" if it has...
    else if (b.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption.d-block').removeClass('d-block')

      // and be added to class "b1"
      $(b1).addClass('d-block')
    }

    // if "a" and "b" doesn't have "active", it will check "c" if it has...
    else if (c.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption.d-block').removeClass('d-block')

      // and be added to class "c1"
      $(c1).addClass('d-block')
    }

    // if "a" , "b" and "c" doesn't have "active", it will check "d" if it has...
    else if (d.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption.d-block').removeClass('d-block')

      // and be added to class "d1"
      $(d1).addClass('d-block')
    }
  })
}); // Code end Here


// Slider for comfort * Technology
// when the document is ready...
$(document).ready(function () {

  // create multiple variables
  var a = $('#clima') // climatronic image
  var b = $('#tilting') // tilting image
  var c = $('#leather') // leatherette image
  var d = $('#blindspot') // blindspot image
  var e = $('#keyless') // keyless image

  var a1 = $('.climatronic') // climatronic content
  var b1 = $('.tilting') // tilting content
  var c1 = $('.leatherette') // leatherette content
  var d1 = $('.blindspot') // blindspot content
  var e1 = $('.keyless') // keyless content

  // when the slider finishes the slide animation...
  $('#comfort').on('slid.bs.carousel', function () {

    // it will checked if "a" has a class of "active"
    if (a.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption1.d-block').removeClass('d-block')

      // and be added to class "a1"
      $(a1).addClass('d-block')
    }

    // if "a" doesn't have "active", it will check "b" if it has...
    else if (b.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption1.d-block').removeClass('d-block')

      // and be added to class "b1"
      $(b1).addClass('d-block')
    }

    // if "a" and "b" doesn't have "active", it will check "c" if it has...
    else if (c.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption1.d-block').removeClass('d-block')

      // and be added to class "c1"
      $(c1).addClass('d-block')
    }

    // if "a" , "b" and "c" doesn't have "active", it will check "d" if it has...
    else if (d.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption1.d-block').removeClass('d-block')

      // and be added to class "d1"
      $(d1).addClass('d-block')
    }

    // if "a" , "b" ,"c" and "d" doesn't have "active", it will check "e" if it has...
    else if (e.hasClass('active')) {

      // if it has, class "d-block" will be remove from the current slider content...
      $('#caption1.d-block').removeClass('d-block')

      // and be added to class "e1"
      $(e1).addClass('d-block')
    }
  })
}); // Code end Here

// Slider for Safety
// when the document is ready...
$(document).ready(function () {

  // create multiple variable...
  var a = $('#esp') // First sldie image "esp"
  var b = $('#xds') // Second Slide Image "xds"
  var c = $('#tpms') // third slide image "tpms"
  var a1 = $('.esp') // content for first slide
  var b1 = $('.xds') // content for second slide
  var c1 = $('.tpms') // content for third slide

  // if the slider finishes the slide animation...
  $('#safety-carousel').on('slid.bs.carousel', function () {

    // checked if "a" has a class "active"
    if (a.hasClass('active')) {

      // if it has, class "d-inline-flex" will be remove from the current slider content...
      $('#safety.d-inline-flex').removeClass('d-inline-flex')

      // and be added to class "a1"
      $(a1).addClass('d-inline-flex');
    }

    // if "a" doesn't have "active", it will check "b" if it has...
    else if (b.hasClass('active')) {

      // if it has, class "d-inline-flex" will be remove from the current slider content...
      $('#safety.d-inline-flex').removeClass('d-inline-flex')

      // and be added to class "b1"
      $(b1).addClass('d-inline-flex');
    }

    // if "a" and "b" doesn't have "active", it will check "c" if it has...
    else if (c.hasClass('active')) {

      // if it has, class "d-inline-flex" will be remove from the current slider content...
      $('#safety.d-inline-flex').removeClass('d-inline-flex')

      // and be added to class "c1"
      $(c1).addClass('d-inline-flex');
    }
  })
}); // Code end Here
