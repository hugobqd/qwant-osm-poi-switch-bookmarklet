javascript: (function() {    
  if (location.hostname == 'www.qwant.com') {    
    re = /(node|way|relation):[0-9]+/;
    node = window.location.href.match(re)[0].replace('node:','').replace('way:','').replace('relation:','');
    window.open('https://www.openstreetmap.org/'+ window.location.href.match(re)[1] +'/'+node);    
  } else if (location.hostname == 'www.openstreetmap.org') {    
    re = /(node|way|relation)\/[0-9]+/;
    node = window.location.href.match(re)[0].replace('node/','').replace('way/','').replace('relation/','');
    window.open('https://www.qwant.com/maps/place/osm:'+ window.location.href.match(re)[1] +':'+node);    
  }
})()
