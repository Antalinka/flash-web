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
    // setTimeout(function () { window.location = "http://itunes.apple.com/app/id1485265975"; }, 25);

    const params = new URLSearchParams(window.location.search)
    // print("text")
    // print(params)
    let setID = params.get("setID");

    const message = document.querySelector('.message');
    message.innerText = setID;

    // console.log('params');
    // console.log(params);

    // let folderID = params.get("folderID").toString()
    window.location = "com.flashmemory://sharing?folderID=" + setID
    } else {
      const message = document.querySelector('.message');
      message.innerText = 'Oh, no! Open link on your iPhone';
    }
  };
  
  redirect();


// function addOrUpdateURLParam(key, value) {
//     const searchParams = new URLSearchParams(window.location.search)
//     searchParams.set(key, value)

//     const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString()

// }

// addOrUpdateURLParam("name", "Jane")



/*

let routes = {};
let templates = {};

let app_div = document.getElementById('app');

function home() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'About';

    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);

    app_div.appendChild(div);
};

function about() {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'Home';

    div.innerHTML = '<h1>About</h1>';
    div.appendChild(link);

    app_div.appendChild(div);
};

function route (path, template) {
  if (typeof template === 'function') {
      return routes[path] = template;
  }
  else if (typeof template === 'string') {
      return routes[path] = templates[template];
  } else {
      return;
  };
};

function template (name, templateFunction) {
  return templates[name] = templateFunction;
};

template('home', function(){
  home();
});

template('about', function(){
  about();
});

route('/', 'home');
route('/about', 'about');

function router(evt) {
  let url = window.location.hash.slice(1) || '/';
  let route = resolveRoute(url);

  route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
*/