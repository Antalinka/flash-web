const apps = {
    // Android: 'https://play.google.com/',
    iOS: 'http://itunes.apple.com/app/id1485265975',
  };
  
  const platform = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) return 'Windows Phone';
    if (/android/i.test(userAgent)) return 'Android';
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
    return null;
  };
  
  const redirect = () => {
    let os = platform();
    if (os in apps) {
    //   location.replace(apps[os]);
    setTimeout(function () { window.location = "http://itunes.apple.com/app/id1485265975"; }, 25);

    const params = new URLSearchParams(window.location.search)
    let folderID = params.get("folderID").toString()
    window.location = "com.flashmemory://sharing?folderID=" + folderID


    } else {
      const message = document.querySelector('.message');
      message.innerText = 'Your OS is not supported';
    }
  };
  
  redirect();


// function addOrUpdateURLParam(key, value) {
//     const searchParams = new URLSearchParams(window.location.search)
//     searchParams.set(key, value)

//     const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString()

// }

// addOrUpdateURLParam("name", "Jane")