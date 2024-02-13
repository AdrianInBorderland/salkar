$(document).ready(function () {

  //Contact
  $(".contact").click(function () {
    swal({
      showConfirmButton: false,
      title: "Contact",
      html: '<form method="post" action="../contact.php"><input name="Name" type="text" placeholder="Name" maxlength="20" required><input name="Email" type="email" placeholder="Email" required><input name="Captcha" type="text" placeholder="Enter the first 2 digits of 2019" maxlength="2" required /><textarea name="Message" rows="4" placeholder="Enter your message..." required></textarea><button type="submit" name="submit" class="swal2-styled gray" />Send</button></form>',
    });
  });

  //Disable cut copy paste
  $('body').bind('cut copy paste', function (e) {
    e.preventDefault();
  });

  /*
	//Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    });
	*/

  $('.counter').counterUp({
    delay: 20,
    time: 5000
  });

  $(".btn-start").click(function () {
    $('.loading').show();
    $(".detecting").html('Detecting');
    $(function () {
      var count = 0;
      var wordsArray = ["Detecting", "Detecting .", "Detecting ..", "Detecting ...", "Detecting .", "Detecting ..", "DETECTED"];
      setInterval(function () {
        count++;
        $(".detecting").fadeOut(500, function () {
          $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
        });
      }, 1000);
    });
    setTimeout(function () {
      $('#connectbox').addClass('animated bounceOut 1s');
    }, 7000);
    setTimeout(function () {
      $('#connectbox').hide();
      $('#generatebox').show().addClass('animated bounceIn 1s');
    }, 8000);

  });

  $(".btn-generate").click(function () {
    var device = getMobileOperatingSystem();
    var coins = $('#coins').val();
    var points = $('#points').val();
    var console = '';
    var ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255) + 0) + "." + (Math.floor(Math.random() * 255) + 0) + "." + (Math.floor(Math.random() * 255) + 0);
    var s = '<span class="username">[' + device + '@' + ip + ': ~] </span>';
    console += '#Console initialized<br>';
    console += s + 'Importing <span class="config">config.xml</span> file for editing<br>';
    console += s + '<span class="config">config.xml</span> file has been imported successfully<br>';
    console += s + 'Restoring <span class="resource">' + coins +
      '</span> <strong> ' + r1 + ' </strong> to device ID-***. ' + r1 + ' restored successfully<br>';
    if (r2 !== null && r2 !== '') {
      console += s + 'Restoring <span class="resource">' + points +
        '</span> <strong> ' + r2 + ' </strong> to device ID-***. ' + r2 + ' restored successfully<br>';
    } else {
      console += s + "...<br>";
    }
    console += s + 'Uploading temporary configuration file to main server<br>';
    console += s + "Update (0x61) uploading. progress: 96.98 (2996709959 / 3090085990)<br>";
    console += s + "Update (0x61) uploading. progress: 97.30 (3096709977 / 3190585696)<br>";
    console += s + 'Status: 100% completed... token matched!<br>';
    console += s + '<span class="verify-alert">Wating for user activation!</span>';
    if (coins !== '0') {
      setTimeout(function () {
        $('#generatebox').addClass('animated bounceOut 1s');
      }, 1000);
      setTimeout(function () {
        $('#generatebox').hide();
        $('#consolebox').show().addClass('animated bounceIn 1s');
        $('.consoleboximg').show();
        $(function () {
          var div = $('.element');
          setInterval(function () {
            var pos = div.scrollTop();
            div.scrollTop(pos + 2);
          }, 50);
          $(".element").typed({
            strings: [console],
            contentType: 'html',
            typeSpeed: -80,
            showCursor: false,
            callback: function () {
              setTimeout(function () {
                $('#consolebox').hide();
                $('#surveybox').show().addClass(
                  'animated bounceIn 1s');
              }, 1000);
              $('.proofcounter').html(coins);
            }
          });
        });
        setTimeout(function () {
          $(".proofh").removeClass("animated infinite flash");
          $('.proofcounter').html(coins);
          $('.proofcounter').counterUp({
            delay: 20,
            time: 15000
          });
        }, 10000);
      }, 2000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter Robux Amount'
      })
    }
  });
  var feednames = ["mido", "mint", "karate", "nx531j", "A6020", "hayabusa", "i9305", "n5110", "d801", "d2spr", "d851",
    "i9300", "n5120", "kltedv", "ja3gxx", "land", "a610", "oneplus3t", "dogo", "n7100", "oneplus2", "flo", "libra",
    "d855", "deb", "ms013g", "taoshan", "lt02ltespr", "Z00A", "I9205", "ha3g", "m8d", "t0lte", "gemini", "bacon",
    "clark", "ls980", "armani", "hammerhead", "klteduos", "k3gxx", "trltetmo", "wt88047", "h811", "d2att", "merlin",
    "mako", "d2vzw", "slte", "serrano3gxx", "i9100", "klteusc", "hlte", "athene", "jfvelte", "axon7", "ido",
    "huashan", "kltekdi", "d852", "ham", "sprout8", "_h5ai", "kiwi", "hero2lte", "falcon", "jfltexx", "lettuce",
    "Z012D", "titan", "kltevzw", "grouper", "piccolo", "chiron", "i9082", "n5100", "odin", "pme", "v400", "trltexx",
    "kltekor", "nicki", "jagnm", "surnia", "victara", "amami", "garlic", "manta", "Z010D", "Z00T", "jfltetmo",
    "castor", "treltexx", "dragon", "d2tmo", "cancro", "condor", "angler", "oneplus3", "hydrogen", "oneplus5",
    "tsubasa", "Z00L", "peregrine", "flounder", "sprout4", "yuga", "kltechn", "d800", "tomato", "taido_row",
    "sagit", "sltexx", "m7", "scorpio", "a7lte", "klte", "g2m", "otus", "sirius", "Z012", "honami", "Z008", "vs980",
    "dior", "harpia", "d802", "lux", "z012d", "h815", "d803", "A7010a48", "shamu", "zl1", "ghost", "onyx",
    "natrium", "lithium", "Find7s", "jag3gds", "osprey", "zuk_z2", "m8", "potter", "togari", "Find7a", "capricorn",
    "T00F", "helium", "n7000", "jalebi", "kltespr", "shamrock", "santoni", "quark", "a6000", "bullhead", "kenzo",
    "crackling", "i9500"
  ];
  var feedcoins = ["1000", "5000", "10000", "15000", "20000"];
  var feedpoints = ["1000", "5000", "10000", "15000", "20000"];
  $(".feed").fadeOut(200, function () {
    var itemfeednames = feednames[Math.floor(Math.random() * feednames.length)];
    var feed = '<span class="feednames">' + itemfeednames +
      '</span> has generated <span class="feedvalues">20000</span> ' + r1;
    $(this).html(feed).fadeIn(100);
  });
  setInterval(function () {
    $(".feed").fadeOut(2500, function () {
      var itemfeednames = feednames[Math.floor(Math.random() * feednames.length)];
      var itemfeedcoins = feedcoins[Math.floor(Math.random() * feedcoins.length)];
      var itemfeedpoints = feedpoints[Math.floor(Math.random() * feedpoints.length)];
      var r2feed = '';
      if (r2 !== null && r2 !== '') {
        var r2feed = '<span class="feedvalues"> ' + itemfeedpoints + ' </span>' + r2;
      }
      var feed = '<span class="feednames">' + itemfeednames + '</span> has generated <span class="feedvalues"> ' +
        itemfeedcoins + ' </span>' + r1 + r2feed;
      $(this).html(feed).fadeIn(2500);
    });
  }, 5000);

});