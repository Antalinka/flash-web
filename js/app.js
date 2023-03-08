const apps = {
    iOS: 'http://itunes.apple.com/app/id1485265975',
  };
  
  const platform = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) return 'Windows Phone';
    if (/android/i.test(userAgent)) return 'Android';
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
    return null;
  };
  
    
  var timeout;
  function preventPopup() {
    clearTimeout(timeout);
    timeout = null;
    window.removeEventListener('pagehide', preventPopup);
  }

  const redirect = () => {
    let os = platform();
    if (os in apps) {
    const params = new URLSearchParams(window.location.search)
    let setID = params.get("setID");

    // let folderID = params.get("folderID").toString()
    // const url =  "com.flashmemory://sharing?folderID=" + setID
    // window.open(url);
    // window.location.href = url; 

    // const message = document.querySelector('.message');
    // message.innerText = "Redirect to application" + setID;

    var appUrl =  "com.flashmemory://sharing?folderID=" + setID;
    window.location = appUrl;

    timeout = setTimeout(function(){
      if(confirm('You do not seem to have the App installed, do you want to go download it now?')){
        document.location = apps[os];
      }
    }, 1000);
    window.addEventListener('pagehide', preventPopup);
    } else {
      const message = document.querySelector('.message');
      message.innerText = 'Oh, no! Open link on your iPhone';
    }
  };

  redirect();