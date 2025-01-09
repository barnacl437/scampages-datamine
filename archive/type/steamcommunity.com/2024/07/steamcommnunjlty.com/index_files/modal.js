var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var selStates = new Array();
var modalDismissHandler = false;

function showGotSteamModal( contentEl, steamURL, appName )
{
	$('gotSteam_SteamURL').href = steamURL;
	$('gotSteam_AppName').update( appName );
	showModal( contentEl );
}

function showModal( contentEl, bExplicitDismisalOnly )
{
	// hide selects, which have an infinitely high z-index in IE
	sels = document.getElementsByTagName('select');
	selStates.length = 0;
	for(x=0;x<sels.length;x++)
	{
		selStates.push((sels[x].style.visibility == undefined ? 'visible' : sels[x].style.visibility));
		sels[x].style.visibility = 'hidden';
	}
	
	bgEl = document.getElementById('modalBG');
	if(!bgEl)
	{
		bgEl = document.createElement('div');
		bgEl.id = 'modalBG';
	}
	new Effect.Appear( bgEl, { from: 0.0, to: 0.8, duration: 0.4 } );
	
	cEl = $(contentEl);
	cEl.show();
	
	modalSizing( cEl );

	cEl.sizingListener = modalSizing.bind( null, cEl );

	// skip registering the resize/scroll events on iphone as we don't calculate the position correctly
	if ( !Prototype.Browser.MobileSafari )
	{
		Event.observe( window, 'resize', cEl.sizingListener );
		Event.observe( window, 'scroll', cEl.sizingListener );
	}
	
	if ( !bExplicitDismisalOnly )
		modalDismissHandler = RegisterPopupDismissal( hideModal.bind( null, cEl ), cEl, true );
}

function modalSizing( cEl )
{
	w = document.viewport.getWidth();
	h = document.viewport.getHeight();
	sl = document.viewport.getScrollOffsets().left;
	st = document.viewport.getScrollOffsets().top;

	bgEl = $('modalBG');
	bgEl.style.top = 0 + 'px';
	bgEl.style.left = 0 + 'px';
	bgEl.style.width = $(document.body).getWidth() + 'px';
	bgEl.style.height = $(document.body).getHeight() + 'px';

	cw = cEl.offsetWidth;
	ch = cEl.offsetHeight;
	t = (Math.floor((h / 2) - (ch / 2)) + st);
	l = (Math.floor((w / 2) - (cw / 2)) + sl);
	cEl.style.top = (t < 0 ? 0 : t) + 'px';
	cEl.style.left = (l < 0 ? 0 : l) + 'px';
}

function hideModal(contentEl)
{
	var cEl = $(contentEl);
	
	sels = document.getElementsByTagName('select');
	for(x=0;x<sels.length;x++)
	{
		sels[x].style.visibility = selStates[x];
	}
	
	new Effect.Fade( 'modalBG', { duration: 0.2 } );
	cEl.hide();
	
	currentModal = false;


	if ( !Prototype.Browser.MobileSafari )
	{
		Event.stopObserving( window, 'resize', cEl.sizingListener );
		Event.stopObserving( window, 'scroll', cEl.sizingListener );
	}
	if ( modalDismissHandler ) 
	{
		modalDismissHandler.unregister();
		modalDismissHandler = false;
	}
	
	if ( cEl.OnModalDismissal )
		cEl.OnModalDismissal();
}

function modalAlert(msg)
{
	modalEl = document.getElementById('modalAlert');
	if(modalEl)
	{
		for(x=0;x<modalEl.childNodes.length;x++)
		{
			modalEl.removeChild(modalEl.childNodes[x]);
		}
		modalEl.parentNode.removeChild(modalEl);
	}
	
	modalEl = document.createElement('div');
	
}



}
/*
     FILE ARCHIVED ON 09:28:54 Jul 22, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:08:04 Jan 09, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.119
  exclusion.robots: 0.039
  exclusion.robots.policy: 0.024
  esindex: 0.016
  cdx.remote: 5.797
  LoadShardBlock: 1348.037 (6)
  PetaboxLoader3.datanode: 1421.751 (8)
  load_resource: 401.933 (2)
  PetaboxLoader3.resolve: 226.914 (2)
*/