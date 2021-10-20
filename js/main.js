$(function(){
  $('.carousel__inner').slick({
    dots: false,
    arrows: true,
    autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 2,
  // centerMode: true,
  prevArrow:  '<svg class="slick-left" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27" r="27" fill="#F1F1F1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.8287 34C28.5367 34 28.2467 33.873 28.0487 33.627L23.2207 27.627C22.9227 27.256 22.9267 26.726 23.2317 26.36L28.2317 20.36C28.5847 19.936 29.2157 19.879 29.6407 20.232C30.0647 20.585 30.1217 21.216 29.7677 21.64L25.2927 27.011L29.6077 32.373C29.9537 32.803 29.8857 33.433 29.4547 33.779C29.2707 33.928 29.0487 34 28.8287 34" fill="#151515"/><mask id="mask0_2:319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="23" y="20" width="7" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.8287 34C28.5367 34 28.2467 33.873 28.0487 33.627L23.2207 27.627C22.9227 27.256 22.9267 26.726 23.2317 26.36L28.2317 20.36C28.5847 19.936 29.2157 19.879 29.6407 20.232C30.0647 20.585 30.1217 21.216 29.7677 21.64L25.2927 27.011L29.6077 32.373C29.9537 32.803 29.8857 33.433 29.4547 33.779C29.2707 33.928 29.0487 34 28.8287 34" fill="white"/></mask><g mask="url(#mask0_2:319)"><rect x="15" y="15" width="24" height="24" fill="#151515"/></g></svg>',
    nextArrow: '<svg class="slick-right" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27" cy="27" r="27" fill="#F1F1F1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M25.1713 34C25.4633 34 25.7533 33.873 25.9513 33.627L30.7793 27.627C31.0773 27.256 31.0733 26.726 30.7683 26.36L25.7683 20.36C25.4153 19.936 24.7843 19.879 24.3593 20.232C23.9353 20.585 23.8783 21.216 24.2323 21.64L28.7073 27.011L24.3923 32.373C24.0463 32.803 24.1143 33.433 24.5453 33.779C24.7293 33.928 24.9513 34 25.1713 34" fill="#151515"/<mask id="mask0_2:319" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="24" y="20" width="7" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.1713 34C25.4633 34 25.7533 33.873 25.9513 33.627L30.7793 27.627C31.0773 27.256 31.0733 26.726 30.7683 26.36L25.7683 20.36C25.4153 19.936 24.7843 19.879 24.3593 20.232C23.9353 20.585 23.8783 21.216 24.2323 21.64L28.7073 27.011L24.3923 32.373C24.0463 32.803 24.1143 33.433 24.5453 33.779C24.7293 33.928 24.9513 34 25.1713 34" fill="white"/></mask><g mask="url(#mask0_2:319)"><rect width="24" height="24" transform="matrix(-1 0 0 1 39 15)" fill="#151515"/></g></svg>'
  });

  }); 

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "css/light.css";
    let darkTheme = "css/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);

    

}

function Save(theme)
{
    var Request = new XMLHttpRequest();
    Request.open("GET", "themes.php?theme=" + theme, true); //У вас путь может отличаться
    Request.send();
}
