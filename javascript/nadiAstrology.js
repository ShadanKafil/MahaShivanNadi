
function selectedLanguage(selectedLanguage) {
    if (selectedLanguage === 'english') {
        document.getElementById("nav-tabContent-english").style.display = "block";
        document.getElementById("nav-tabContent-kanada").style.display = "none";
        document.getElementById("nav-tabContent-tamil").style.display = "none";
        document.getElementById("nav-tabContent-telugu").style.display = "none";
        document.getElementById("nav-tabContent-hindi").style.display = "none";
        
        let a = document.getElementsByClassName("arrow-en");
        a[0].classList.add("sidebar-child-one-active");
        let b = document.getElementsByClassName("lang-en");
        b[0].classList.add("sidebar-child-two-active");
        document.getElementsByClassName("arrow-ta")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-ta")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-tu")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-tu")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-hn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-hn")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-kn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-kn")[0].classList.remove("sidebar-child-two-active");

    } else if (selectedLanguage === 'tamil') {
        document.getElementById("nav-tabContent-tamil").style.display = "block";
        document.getElementById("nav-tabContent-english").style.display = "none";
        document.getElementById("nav-tabContent-hindi").style.display = "none";
        document.getElementById("nav-tabContent-telugu").style.display = "none";
        document.getElementById("nav-tabContent-kanada").style.display = "none";
        let a = document.getElementsByClassName("arrow-ta");
        a[0].classList.add("sidebar-child-one-active");
        let b = document.getElementsByClassName("lang-ta");
        b[0].classList.add("sidebar-child-two-active");
        document.getElementsByClassName("arrow-en")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-en")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-tu")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-tu")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-hn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-hn")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-kn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-kn")[0].classList.remove("sidebar-child-two-active");
    } else if (selectedLanguage === 'telugu') {
        document.getElementById("nav-tabContent-telugu").style.display = "block";
        document.getElementById("nav-tabContent-english").style.display = "none";
        document.getElementById("nav-tabContent-tamil").style.display = "none";
        document.getElementById("nav-tabContent-hindi").style.display = "none";
        document.getElementById("nav-tabContent-kanada").style.display = "none";
        let a = document.getElementsByClassName("arrow-tu");
        a[0].classList.add("sidebar-child-one-active");
        let b = document.getElementsByClassName("lang-tu");
        b[0].classList.add("sidebar-child-two-active");
        document.getElementsByClassName("arrow-ta")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-ta")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-en")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-en")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-hn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-hn")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-kn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-kn")[0].classList.remove("sidebar-child-two-active");
    } else if(selectedLanguage === 'hindi') {
        document.getElementById("nav-tabContent-hindi").style.display = "block";
        document.getElementById("nav-tabContent-english").style.display = "none";
        document.getElementById("nav-tabContent-tamil").style.display = "none";
        document.getElementById("nav-tabContent-telugu").style.display = "none";
        document.getElementById("nav-tabContent-kanada").style.display = "none";
        let a = document.getElementsByClassName("arrow-hn");
        a[0].classList.add("sidebar-child-one-active");
        let b = document.getElementsByClassName("lang-hn");
        b[0].classList.add("sidebar-child-two-active");
        document.getElementsByClassName("arrow-ta")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-ta")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-tu")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-tu")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-en")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-en")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-kn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-kn")[0].classList.remove("sidebar-child-two-active");
    } else if(selectedLanguage === 'kanada') {
        document.getElementById("nav-tabContent-kanada").style.display = "block";
        document.getElementById("nav-tabContent-english").style.display = "none";
        document.getElementById("nav-tabContent-tamil").style.display = "none";
        document.getElementById("nav-tabContent-telugu").style.display = "none";
        document.getElementById("nav-tabContent-hindi").style.display = "none";
        let a = document.getElementsByClassName("arrow-kn");
        a[0].classList.add("sidebar-child-one-active");
        let b = document.getElementsByClassName("lang-kn");
        b[0].classList.add("sidebar-child-two-active");
        document.getElementsByClassName("arrow-ta")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-ta")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-tu")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-tu")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-hn")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-hn")[0].classList.remove("sidebar-child-two-active");
        document.getElementsByClassName("arrow-en")[0].classList.remove("sidebar-child-one-active");
        document.getElementsByClassName("lang-en")[0].classList.remove("sidebar-child-two-active");
    }

}