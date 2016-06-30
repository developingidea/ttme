/*
might improve this script soon
created by zenverse.net
*/
var zv_postimagenum; //no. of post images
var zv_flydelay = 40;
var zv_nextrounddelay = 8000;
var zv_tohide = 1;
var zv_toshow = 2;
var zv_groupid = 'zv_img';
//var zv_spanid = 'zv_text';
var zv_running = false;

//#########################

function zv_gallery_run(rerun) {
if (rerun) {
zv_running = false;
}

if (!zv_running) {
setTimeout("zv_hideit('"+zv_tohide+"','"+zv_toshow+"');",zv_flydelay);
}
zv_running = true;

var zstart;
var zend;
//prepare for next round
switch (zv_postimagenum) {
  case 1:
  zstart = 1;
  zend = 1;
break;
  case 2:
  zstart = zv_toshow;
  zend = zv_tohide;
break;
  default:
  // start default
  zstart = zv_toshow;
  zend = zv_toshow+1;
  if (zend > zv_postimagenum) {
  zend = 1;
  }
  // end default
break;
} //end switch
//alert('hiding '+zv_tohide+', showing '+zv_toshow);
zv_tohide = zstart;
zv_toshow = zend;
}

//#########################

var zv_displacement = 55;
var zv_hide_pos = 0;
var zv_show_pos = 250;

function zv_hideit(id,toshow) {
document.getElementById(zv_groupid+id).style.position = 'relative';

zv_hide_pos = zv_hide_pos+zv_displacement;
document.getElementById(zv_groupid+id).style.top = '-'+zv_hide_pos+'px';

if (zv_hide_pos < 230) {
setTimeout("zv_hideit('"+id+"','"+toshow+"')",zv_flydelay);
} else {
zv_hide_pos = 0;
setTimeout("zv_showit('"+toshow+"','"+id+"')",zv_flydelay);
document.getElementById(zv_groupid+id).style.display = 'none';

document.getElementById(zv_groupid+toshow).style.position = 'relative';
document.getElementById(zv_groupid+toshow).style.top = zv_show_pos+'px';
document.getElementById(zv_groupid+toshow).style.display = 'block';
}
}

//#########################

function zv_showit(id,tohide) {
document.getElementById(zv_groupid+id).style.position = 'relative';

zv_show_pos = zv_show_pos-40;
document.getElementById(zv_groupid+id).style.top = zv_show_pos+'px';

if (zv_show_pos > 0) {
setTimeout("zv_showit('"+id+"','"+tohide+"')",zv_flydelay);
} else {
document.getElementById(zv_groupid+id).style.top = '0px';
zv_show_pos = 250;
setTimeout("zv_gallery_run(true);",zv_nextrounddelay);
}
}


//#########################

function zv_getnumofimages() {

var stopat = 1;
var tryx;
for ( var i=1; i<30; i++ ) {
  try {
    tryx = document.getElementById(zv_groupid+i).innerHTML;
  } catch (e) {
      stopat = i;
      break;
  }
}
zv_postimagenum = stopat-1;

if (zv_postimagenum == 1) {
zv_toshow = 1;
} else {
zv_toshow = 2;
}


if (zv_postimagenum) {

if (zv_postimagenum > 1) {
for (var x=2;x<=zv_postimagenum;x++) {
document.getElementById(zv_groupid+x).style.display = 'none';
//document.getElementById(zv_spanid+x).style.display = 'none';
document.getElementById(zv_groupid+x).style.visibility = 'visible';
//document.getElementById(zv_spanid+x).style.visibility = 'visible';
}
}

setTimeout("zv_gallery_run();",zv_nextrounddelay);
}
}


//#########################

function zv_addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

zv_addLoadEvent(zv_getnumofimages);
