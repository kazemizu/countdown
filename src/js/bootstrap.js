export default function bootstrap() {
    var cssId = 'myCss';  // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@200&display=swap';
        link.media = 'all';
        head.appendChild(link);
    }
}