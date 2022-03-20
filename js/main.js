// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Bareq Al-Azzawi</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with me</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know what I'm good at</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download my full CV</td>\
  </tr>\
  <tr>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:barq.firas@gmail.com\">barq.firas@gmail.com\</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td>+358&nbsp;44&nbsp;956&nbsp;4424</td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>Finland - Vantaa</td>\
  </tr>\
  <tr>\
      <td>Linkedin</td>\
    <td><a href=\"https://www.linkedin.com/in/bareq-a-493a10107/\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> Bareq</a></td>\
  </tr>\
  <tr>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
  <tr>\
    <td>Client support</td>\
    <td>▰▰▰▰▰▰▰▰▰▱ 90%</td>\
  </tr>\
  <tr>\
    <td>Networking</td>\
    <td>▰▰▰▰▰▰▰▱▱▱ 75%</td>\
  </tr>\
  <tr>\
    <td>Winodws</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr>\
  <tr>\
      <td>Cloud</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
        <td>Troubleshooting</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 85%</td>\
  </tr>\
  <tr>\
    <td>Linux</td>\
    <td>▰▰▰▰▰▰▰▱▱▱ 70%</td>\
  </tr></table>";
}

function about(){
  return "<p style=width:1000px;font-size:20px;text-align:left>My name is Bareq and I am 22 years old. I was born in Baghdad, Iraq and growing up all around me I saw technology grow at a rapid pace. The more time went on the more it seemed like not only an essential part of life in the 21st Century, but as a Human Right.</p> <p style=width:1000px;font-size:20px;text-align:left>Being a curious child, I would always dismantle electronic toys and challenge myself to get them working again. This mindset stuck with me up to this age, where I have the need to know how things operate to fill my curious side. As such, I gained a good amount of knowledge about how electronics work, eventually focusing on the IT and hardware area.</p> <p style=width:1000px;font-size:20px;text-align:left>The mindset and experimentation I displayed at a young age allowed me to grasp the basics and eventually get the knowledge needed to do more and more intricate repairs, be it hardware or software. As you'd expect I am the person my friends come running to as soon as there is something wrong with their laptop or phone. I hope this job will allow me to hone my skills even further, and as an added bonus I get to wake up every day and do what I love - help people - and Tinker with electronics, gaining a better understanding of their inner workings.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}


function rickroll(){
  return "<p>We're no strangers to love<br>\
    You know the rules and so do I<br>\
    A full commitment's what I'm thinking of<br>\
    You wouldn't get this from any other guy<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    And if you ask me how I'm feeling<br>\
    Don't tell me you're too blind to see<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    (Ooh, give you up)<br>\
    (Ooh, give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    Never gonna give, never gonna give<br>\
    (Give you up)<br>\
    <br>\
    We've known each other for so long<br>\
    Your heart's been aching, but<br>\
    You're too shy to say it<br>\
    Inside, we both know what's been going on<br>\
    We know the game and we're gonna play it<br>\
    <br>\
    I just wanna tell you how I'm feeling<br>\
    Gotta make you understand<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you<br>\
    <br>\
    Never gonna give you up<br>\
    Never gonna let you down<br>\
    Never gonna run around and desert you<br>\
    Never gonna make you cry<br>\
    Never gonna say goodbye<br>\
    Never gonna tell a lie and hurt you</p>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=skills() + "\n\n\n" + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput == "rickroll") {
      var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
          }else if (txtInput == "rick") {
      var win = window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
      win.focus();
      document.getElementById('injected').innerHTML=rickroll();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
