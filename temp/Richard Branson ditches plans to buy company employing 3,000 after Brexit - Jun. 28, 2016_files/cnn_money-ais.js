//CNN Money AdFuel Modules
//
//Deployed: 2016-05-16 11:18:08

////////////////////////////////////////////
//Amazon
////////////////////////////////////////////

window.AmazonDirectMatchBuy = (function CreateAmazonModule() {

    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    
    var hasOwnProperty = objectProto.hasOwnProperty;
    var slice = arrayProto.slice;
    var toString = objectProto.toString;

    function hasOwn(object, key) {
        return object != null && hasOwnProperty.call(object, key);
    }

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }

    function once(fn) {
        return function() {
            if (fn) {
                fn.apply(this, arguments);
                fn = null;
            }
        };
    }

    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop
    
    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function(/* arguments */) {
            var args = ['[AdFuelModule - Amazon]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        }
    }

    var amznkey = window.location.hostname.toLowerCase().match(/^edition\.cnn\.com/) ? "3288" : "3159";
    var timeoutForGetAdsCallback = 1000;  //1 second
    var initialized = false;
    
    function isAmazonApiAvailable() {
        return !!window.amznads;
    }

    function refreshAdFuelPageLevelTargets(callback) {
        //remove amznslots
        log('removing PageLevelTarget: amznslots');
        window.AdFuel.removePageLevelTarget('amznslots');
            
        if (!isAmazonApiAvailable()) {
            return (callback ? callback() : true);
        }
        
        var callbackWrapper = once(function() {
            //amazon has refreshed, update AdFuel targeting
            var targeting = window.amznads.getTargeting();
            
            log('setting amazon targeting', targeting);
            
            window.AdFuel.setBulkTargeting(targeting);
            
            return (callback ? callback() : true);
        })
                        
        try {
            window.amznads.getAdsCallback(amznkey, callbackWrapper, timeoutForGetAdsCallback);
        } catch (e) {
            log('Exception thrown while requesting Amazon ads:', e);
            // manually execute callback if it hasn't run
            callbackWrapper();
        }
    }

    function getTargetingData() {
        var data = {};

        if (isAmazonApiAvailable()) {
            data = window.amznads.getTargeting();
            if (!isObject(data)) {
                data = {};
            }
        }

        return data;
    }

    var keyMap = (function() {
        var map = {};

        function has(id) {
            return id in map;
        }

        function addKey(id, key) {
            if (!has(id)) {
                map[id] = [];
            }

            map[id].push(key);
        }

        function getKeys(id) {
            return has(id) ? slice.call(map[id]) : [];
        }

        function clearKeys(id) {
            if (has(id)) {
                map[id].length = 0;
                return true;
            }
            return false;
        }

        return ({
            has: has,
            clearKeys: clearKeys,
            getKeys: getKeys,
            addKey: addKey
        });
    }());

    function clearPreviousKeyValuePairs(player) {
        var playerId = player.getId();

        if (keyMap.has(playerId)) {
            var keys = keyMap.getKeys(playerId);
            if (keys.length) {
                log('clearing previous ad key-values: ' + keys.join(', '));

                for (var i = 0, endi = keys.length; i < endi; ++i) {
                    player.setAdKeyValue(keys[i], null);
                }

                keyMap.clearKeys(playerId);
            }
        }
    }

    function setAdKeyValue(player, key, value) {
        log('setting ad key-value: ' + key + ' = "' + value + '"');

        keyMap.addKey(player.getId(), key);
        player.setAdKeyValue(key, value);
    }

    function handleTargetingData(player) {
        var targeting = getTargetingData();

        // Clear previous key-value pairs.
        clearPreviousKeyValuePairs(player);

        // Set new key-value pairs.
        for (var key in targeting) {
            if (!hasOwn(targeting, key)) continue;

            var val = targeting[key];

            if (val instanceof Array) {
                // val = val.join(',');
                for (var i = 0, endi = val.length; i < endi; ++i) {
                    setAdKeyValue(player, val[i], "1");
                }
            } else {
                setAdKeyValue(player, key, val);
            }
        }
    }

    //this is only called by the CVP object
    function setAdKeyValuePairs(player) {
        if (player.getPlayerType() !== CVP.FLASH) return;

        log('setAdKeyValuePairs(player)');
        handleTargetingData(player);
    }
    
    /* allows optional configuration:
      
        amznkey: Turner's Amazon key (default is '3159')
        timeout: duration in milliseconds for Amazon to call GetAdsCallback (default is 2000)
    */
    function init(config) {
        log('initializing', config);
        
        if (config) {
            //allow overrides
            amznkey = config.amznkey || amznkey;
            timeoutForGetAdsCallback = config.timeout || timeoutForGetAdsCallback;
        }

        if (!initialized) {
            //only do this once
            initialized = true;
        
            function registerModuleWithAdFuel() {
                window.AdFuel.registerModule('amazon', {
                    //when dispatching or refreshing slots, set amazon targeting
                    preDispatchCallback: function(builtSlots, asyncCallback) {
                        try {
                            log('preDispatch');
                            refreshAdFuelPageLevelTargets(asyncCallback);
                        } catch(err){
                            log('error setting targeting prior to dispatch', err);
                            asyncCallback(err);
                        }
                    },
                    
                    preRefreshCallback: function(slotsIdsToRefresh, asyncCallback) {
                        try {
                            log('preRefresh');
                            refreshAdFuelPageLevelTargets(asyncCallback);
                        } catch(err){
                            log('error refreshing targeting prior to refresh', err);
                            asyncCallback(err);
                        }
                    }
                });
            }
            
            if (window.AdFuel) {
                //AdFuel loaded first
                registerModuleWithAdFuel();
            } else {
                //wait for AdFuel to load
                if (document.addEventListener) {
                    document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
                } else if (document.attachEvent) {
                    document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
                }        
            }
        }
    }

    function requireInit(fn) {
        return function() {
            if (!initialized) {
                log('ERROR: init() must be called first!');
                return;
            }

            fn.apply(this, arguments);
        };
    }

    return ({
        requestAdRefresh: requireInit(refreshAdFuelPageLevelTargets),
        getTargetingData: requireInit(getTargetingData),
        setAdKeyValuePairs: requireInit(setAdKeyValuePairs),
        isAmazonApiAvailable: isAmazonApiAvailable,
        init: init
    });

}());

(function(callback) {
    var a = document,
        b = a.createElement("script"),
        c = a.getElementsByTagName("script")[0],
        d = /^(complete|loaded)$/,
        e = false;
    b.type = "text/javascript";
    b.async = true;
    b.src = "http://c.amazon-adsystem.com/aax2/amzn_ads.js";
    b.onload = b.onreadystatechange = function() {
        if (!e && !(('readyState' in b) && d.test(b.readyState))) {
            b.onload = b.onreadystatechange = null;
            e = true;
            callback();
        }
    };
    c.parentNode.insertBefore(b, c);
})(function() {
    window.AmazonDirectMatchBuy.init();
});

////////////////////////////////////////////
//Criteo
////////////////////////////////////////////

(function createAdFuelCriteoModule(){
    var priorTargetings = {};

    //backward compatibility- support registry files which reference window.crtg_content
    //if registries are executed prior to the criteo script below completing, they will need to
    //access this value, so make sure it exists
    window.crtg_content = '';

    var objectProto = Object.prototype;
    var toString = objectProto.toString;

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }

    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop

    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function(/* arguments */) {
            var args = ['[AdFuelModule - Criteo]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        }
    }

    function setTargetingForCriteo(callback) {

        var crtg_cookiename = 'crtg_trnr';
        var crtg_varname = 'crtg_content';
        var crtg_nid = '4157';
        var crtg_rnd = Math.floor(Math.random() * 99999999999);

        function crtg_getCookie(c_name) {
            var i, x, y, ARRCookies = document.cookie.split(";");
            for (i = 0; i < ARRCookies.length; i++) {
                x = ARRCookies[i].substr(0, ARRCookies[i].indexOf("="));
                y = ARRCookies[i].substr(ARRCookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == c_name) {
                    return decodeURIComponent(y);
                }
            }
            return '';
        }

        function processCookie() {
            //script has executed, grab cookie
            var targetings = {};

            var crtg_content = crtg_getCookie(crtg_cookiename);

            //backward compatibility- support registry files which reference window.crtg_content
            window.crtg_content = crtg_content;

            if (crtg_content) {
                var crtg_split = crtg_content.split(";");
                for (var i = 0; i < crtg_split.length-1; i++) {
                    var pieces = crtg_split[i].split("=");
                    var key = pieces[0];
                    var value = pieces[1];

                    //save targeting
                    targetings[key] = value;

                    //add new targeting
                    if (!priorTargetings.key) {
                        window.AdFuel.addPageLevelTarget(key, value);
                    }
                }
            }

            //remove targetings no longer valid
            for (var targetingKey in priorTargetings) {
                if (priorTargetings.hasOwnProperty(targetingKey) && !targetings[targetingKey]) {
                    window.AdFuel.removePageLevelTarget(targetingKey);
                }
            }

            log('set criteo targeting', targetings);

            //save targetings, so we can reconcile them on subsequent calls
            priorTargetings = targetings;

            if (callback) {
                callback();
            }
        }

        //add script to set Criteo cookie based on user's other cookies
        (function(callback) {
            var crtg_url = location.protocol + '//rtax.criteo.com/delivery/rta/rta.js?netId=' + encodeURIComponent(crtg_nid);
            crtg_url += '&cookieName=' + encodeURIComponent(crtg_cookiename);
            crtg_url += '&rnd=' + crtg_rnd;
            crtg_url += '&varName=' + encodeURIComponent(crtg_varname);

            var a = document,
                b = a.createElement("script"),
                c = a.getElementsByTagName("script")[0],
                d = /^(complete|loaded)$/,
                e = false;
            b.type = "text/javascript";
            b.async = true;
            b.src = crtg_url;
            b.onload = b.onreadystatechange = function() {
                if (!e && !(('readyState' in b) && d.test(b.readyState))) {
                    b.onload = b.onreadystatechange = null;
                    e = true;
                    callback();
                }
            };

            c.parentNode.insertBefore(b, c);
        })(processCookie);
    }

    function init() {

        function registerModuleWithAdFuel() {
            window.AdFuel.registerModule('criteo', {
                //when dispatching or refreshing slots, set criteo targeting
                preDispatchCallback: function(builtSlots, asyncCallback) {
                    try {
                        log('preDispatch');
                        setTargetingForCriteo(asyncCallback);
                    } catch(err){
                        log('error setting targeting prior to dispatch', err);
                        asyncCallback(err);
                    }
                },

                preRefreshCallback: function(slotsIdsToRefresh, asyncCallback) {
                    try {
                        log('preRefresh');
                        setTargetingForCriteo(asyncCallback);
                    } catch(err){
                        log('error setting targeting prior to refresh', err);
                        asyncCallback(err);
                    }
                }
            });
        }

        if (window.AdFuel) {
            //AdFuel loaded first
            registerModuleWithAdFuel();
        } else {
            //wait for AdFuel to load
            if (document.addEventListener) {
                document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
            }
        }
    }

    init();

})();

////////////////////////////////////////////
//Fastlane
////////////////////////////////////////////

(function createFastlaneModule() {
    window.rubicontag = window.rubicontag || {};
    window.rubicontag.cmd = window.rubicontag.cmd || [];
    var objectProto = Object.prototype;
    var toString = objectProto.toString;

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }

    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    function readCookie(name) {
        if (!document.cookie) {
            // there is no cookie, so go no further
            return null;
        } else { // there is a cookie
            var ca = document.cookie.split(';');
            var nameEQ = name + "=";
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    //delete spaces
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }
    }

    var log = function() {}; //noop

    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function(/* arguments */) {
            var args = ['[AdFuelModule - Fastlane/Rubicon]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        }
    }

    function addFastlaneScript() {
        var hostname = window.location.hostname.toLowerCase();
        var account_id = 11078;
        var countryCode = readCookie('countryCode') || (readCookie('CG') ? readCookie('CG').substr(0,2) : '');
        if ((countryCode !== 'US' && countryCode !== 'CA' && countryCode.length === 2) || hostname.search(/^(edition|arabic|cnnespanol)\./) >= 0) {
            // User location is international (or unknown and the site is international)
            account_id = 11016;
        }
        log("Rubicon Account ID: " + account_id);
        var rct = document.createElement('script');
        rct.type = 'text/javascript';
        rct.async = true;
        rct.src = (document.location.protocol === 'https:' ? 'https:' : 'http:') + '//ads.rubiconproject.com/header/' + account_id + '.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.appendChild(rct);
    }

    window.rubiconSlotDictionary = {};

    function buildSlotsForFastlane(registry, callback){
        window.rubicontag.cmd.push(function() {
            var rubiconSlots = [];
            var uniqueAdUnits = [];
            for(var i = 0; i < registry.length; i++) {
                var rocketeerSlot = registry[i];
                var rubiconSlot;

                // Any slot that is not _atf_ or _btf_ will be excluded from the request to Fastlane.
                var validMappings = {
                    '_atf_': 'atf',
                    '_btf_': 'btf'
                };
                // Any slot id with any of the following slot types will be excluded from the request to Fastlane.
                var invalidMappings = [ '_ns_', '_nfs_' ];
                // Any slot with any of the following ad unit segments in the slot ad unit will be excluded from the request to Fastlane.
                var invalidAdUnitSegments = [ 'super-ad-zone', 'super_ad_zone' ];
                // Any slot with an ad unit that matches any of the following ad units will be excluded from the request to Fastlane.
                var invalidAdUnits = [ 'CNN/health', 'CNN/health/healthgrades', 'CNN/health/leaf', 'CNN/health/list', 'CNN/health/photos', 'CNN/health/specials', 'CNN/health/video', 'CNN/student-news' ];
                // Any slot with a size in the following array will have that size removed from the request to Fastlane.
                var invalidSizes = [ ];

                //require valid mapping match
                for (var validMapping in validMappings) {
                    if (validMappings.hasOwnProperty(validMapping)) {
                        if (rocketeerSlot.rktr_slot_id && rocketeerSlot.rktr_slot_id.indexOf(validMapping) >= 0) {
                            var isValid = true;

                            //exclude invalid mapping matches
                            for (var invalidMapping in invalidMappings) {
                                if (rocketeerSlot.rktr_slot_id.indexOf(invalidMappings[invalidMapping]) >= 0) {
                                    log("Filtering out invalid slot type: ", invalidMappings[invalidMapping], rocketeerSlot);
                                    isValid = false;
                                }
                            }
                            for (var invalidAdUnitSegment in invalidAdUnitSegments){
                                if (rocketeerSlot.rktr_ad_id.indexOf(invalidAdUnitSegments[invalidAdUnitSegment]) >= 0) {
                                    log("Filtering out invalid ad unit segment: ", invalidAdUnitSegments[invalidAdUnitSegment], rocketeerSlot);
                                    isValid = false;
                                }
                            }
                            for (var invalidAdUnit in invalidAdUnits){
                                if (rocketeerSlot.rktr_ad_id == invalidAdUnitSegments[invalidAdUnitSegment]) {
                                    log("Filtering out invalid ad unit: ", invalidAdUnits[invalidAdUnit], rocketeerSlot);
                                    isValid = false;
                                }
                            }
                            for (var invalidSize = 0; invalidSize < invalidSizes.length; invalidSize++){
                                var friendlySize = invalidSizes[invalidSize].join('x');
                                for (var rocketeerSize = 0; rocketeerSize < rocketeerSlot.sizes.length; rocketeerSize++){
                                    var matchingSize = rocketeerSlot.sizes[rocketeerSize].join('x');
                                    if (matchingSize == friendlySize) {
                                        log("Filtering out invalid size: ", friendlySize, rocketeerSlot);
                                        rocketeerSlot.sizes.splice(rocketeerSize, 1);
                                    }
                                }
                            }

                            if (isValid) {
                                if (uniqueAdUnits.indexOf(rocketeerSlot.rktr_ad_id) < 0){
                                    uniqueAdUnits.push(rocketeerSlot.rktr_ad_id);
                                }
                                var foldPosition = validMappings[validMapping];
                                rubiconSlot = window.rubicontag.defineSlot("/8664377/" + rocketeerSlot.rktr_ad_id, rocketeerSlot.sizes, rocketeerSlot.rktr_slot_id);
                                rubiconSlot.setPosition(foldPosition);
                                var slotTargets = rocketeerSlot.targeting;
                                for (var tIndex = 0; tIndex < slotTargets.length; tIndex++){
                                    var target = slotTargets[tIndex];
                                    if (target[0] == "pos") {
                                        if (Array.isArray(target[1])) {
                                            log('Setting Keyword', target[1][0]);
                                            rubiconSlot.setFPI('pos', target[1][0]);
                                        }else{
                                            log('Setting Keyword', target[1]);
                                            rubiconSlot.setFPI('pos', target[1]);
                                        }
                                    }
                                }
                                log('Setting Keyword', rocketeerSlot.rktr_ad_id);
                                rubiconSlot.addKW(rocketeerSlot.rktr_ad_id);
                                rubiconSlots.push(rubiconSlot);
                                window.rubiconSlotDictionary[rocketeerSlot.rktr_slot_id] = rubiconSlot;
                            }
                        }
                    }
                }
            }
            for (var x = 0; x < uniqueAdUnits.length; x++) {
                var adUnitPieces = uniqueAdUnits[x].split("/");
                var adUnitPieceNames = ['site', 'section', 'subsection'];
                for (var y = 0; y < adUnitPieces.length && y < 3; y++) {
                    log('Setting FPI', adUnitPieceNames[y], adUnitPieces[y]);
                    window.rubicontag.setFPI(adUnitPieceNames[y], adUnitPieces[y]);
                }
            }
            window.rubicontag.run(function() { callback(); }, {slots: rubiconSlots});
        });
    }

    function setTargetingForFastlane(slots) {
        log("setting fastlane targeting");
        window.googletag.cmd.push(function(){
            var gptSlots = window.AdFuel.pageSlots;
            log({slots: slots, gptSlots: gptSlots});
            for (var x = 0; x < slots.length; x++) {
                var slot = slots[x];
                log("Slot ID: ", slot.rktr_slot_id);
                if (gptSlots[slot.rktr_slot_id]) {
                    var gptSlot = gptSlots[slot.rktr_slot_id];
                    log("calling window.rubicontag.setTargetingForGPTSlot...");
                    window.rubicontag.setTargetingForGPTSlot(gptSlot);
                    var targeting = gptSlot.getTargetingKeys();
                    for (var y = 0; y < targeting.length; y++) {
                        if (targeting[y].indexOf("rpfl_") >= 0) {
                            log("Setting Fastlane Targeting...", {
                                slot: gptSlot.getSlotElementId(),
                                target: {key: targeting[y], value: gptSlot.getTargeting(targeting[y])}
                            });
                        }
                    }
                }
            }
        });
    }

    function preDispatch(slots, callback) {
        log('preDispatch');
        setTargetingForFastlane(slots);
        callback();
    }

    function preRefresh(slotIds, callback){
        log('preRefresh');
        var rubiconSlots = [];
        var pseudoRocketeerSlots = [];
        var gptSlots = window.AdFuel.pageSlots;
        if (!slotIds){
            slotIds = Object.getOwnPropertyNames(gptSlots);
        }
        for (var x = 0; x < slotIds.length; x++) {
            var slotId = slotIds[x];
            log("Slot ID: ", slotId);
            if (gptSlots[slotId]) {
                var gptSlot = gptSlots[slotId];
                //clear fastlane slot level targeting
                var slotTargets = gptSlot.getTargetingKeys();
                for (var targetId in slotTargets) {
                    if (slotTargets.hasOwnProperty(targetId)) {
                        var key = slotTargets[targetId];
                        if (key.indexOf("rpfl") >= 0) {
                            window.AdFuel.removeSlotLevelTarget(slotId, key);
                        }
                    }
                }

                if (window.rubiconSlotDictionary[slotId])
                    rubiconSlots.push(window.rubiconSlotDictionary[slotId]);
                pseudoRocketeerSlots.push({rktr_slot_id: slotId});
            }

        }

        log('refreshing slots', {slotsToRefresh: rubiconSlots});
        window.rubicontag.run(function() {
            setTargetingForFastlane(pseudoRocketeerSlots);
            callback()
        }, {slots: rubiconSlots});
    }

    function registerModuleWithAdFuel() {
        window.AdFuel.setOptions({queueCallbackTimeoutInMilliseconds: 1000, dispatchCallbackTimeoutInMilliseconds: 1000, refreshCallbackTimeoutInMilliseconds: 1000});
        window.AdFuel.registerModule('Fastlane', {
            preQueueCallback: buildSlotsForFastlane,
            preDispatchCallback: preDispatch,
            preRefreshCallback: preRefresh
        });
    }

    function init() {
        addFastlaneScript();

        if (window.AdFuel) {
            //AdFuel loaded first
            registerModuleWithAdFuel();
        } else {
            //wait for AdFuel to load
            if (document.addEventListener) {
                document.addEventListener("AdFuelCreated", registerModuleWithAdFuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
            }
        }
    }

    init();
})();


////////////////////////////////////////////
//GUID
////////////////////////////////////////////

/* 
   <arguments>
        {
            "ignoreHttps" : {
                "isRequired": false,
                "isBoolean": true,
                "defaultValue": "false"
            }
        }
   </arguments>
*/

//todo: may be privatized
window.cnnad_haveCookie = function(name) {
    return document.cookie && (document.cookie.indexOf("; "+name+"=") >= 0 || document.cookie.indexOf(name+"=") == 0);
};

//todo: may be privatized
window.cnnad_readCookie = function( name ) {
	if (document.cookie) {
		var ca = document.cookie.split(';');
		var nameEQ = name + "=";
		for (var i=0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
                c = c.substring(1, c.length); //delete spaces
            }
			if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
		}
		return null;
	}
};

//used by freewheel helper
window.turner_getGuid = function() {
    return window.cnnad_readCookie("ug");
};

(function cnnad_ugsync(ignoreHttps) {

    var objectProto = Object.prototype;
    var toString = objectProto.toString;

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }
    
    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop
    
    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function(/* arguments */) {
            var args = ['[AdFuelModule - Guid]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        }
    }
    
    function processCookie() {

        function registerModuleWithAdFuel() {
            //todo: remove AdFuel.readCookie("ug") once everyone is on new ais.js
            var guid = window.turner_getGuid();
            
            log('setting guid targeting', {guid: guid});
            
            window.AdFuel.addPageLevelTarget('guid', guid);
        }
        
        if (window.AdFuel) {
            //AdFuel loaded first
            registerModuleWithAdFuel();
        } else {
            //wait for AdFuel to load
            if (document.addEventListener) {
                document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
            }    
        }
    };

    if (window.cnnad_haveCookie('ugs')) {
        processCookie();
    } else if (!ignoreHttps || location.protocol !== "https:") {
        //execute script to set cookie
        var guid_url = "http://www.ugdturner.com/xd.sjs";
        
        var a = document,
            b = a.createElement("script"),
            c = a.getElementsByTagName("script")[0],
            d = /^(complete|loaded)$/,
            e = false;
            
        b.type = "text/javascript";
        b.async = true;
        b.src = guid_url;
        
        b.onload = b.onreadystatechange = function() {
            if (!e && !(('readyState' in b) && d.test(b.readyState))) {
                b.onload = b.onreadystatechange = null;
                e = true;
                processCookie();
            }
        };
        
        c.parentNode.insertBefore(b, c);
    }
    
})("true" == "true");


////////////////////////////////////////////
//Krux
////////////////////////////////////////////

/* 
   <arguments>
        {
            "controlTag" : {
                "isRequired": false,
                "isBoolean": false,
                "defaultValue": ""
            }
        }
   </arguments>
*/

window.Krux || ((window.Krux = function() {
    window.Krux.q.push(arguments);
}).q = []);
window.kvs = [];
(function getKruxData() {
    function retrieve(n) {
        var m, k = 'kx' + n;
        if (window.localStorage) {
            return window.localStorage[k] || "";
        } else if (navigator.cookieEnabled) {
            m = document.cookie.match(k + '=([^;]*)');
            return (m && decodeURIComponent(m[1])) || "";
        } else {
            return '';
        }
    }
    window.Krux.user = retrieve('user');
    window.Krux.segments = retrieve('segs') && retrieve('segs').split(',') || [];
    for (var i = 0; i < window.Krux.segments.length; i++) {
        if (window.kvs.length < 20) {
            window.kvs.push(window.Krux.segments[i]);
        }
    }
})();

window.krux_getDESegments = function() {
    var segmentString = "&kxid=";
    if (window.Krux.user) {
        segmentString += window.Krux.user;
    }
    segmentString += '&kxseg=' + window.kvs.join(",");
    return segmentString;
};

window.krux_getFWSegments = function() {
    return 'kxseg=' + window.kvs.join(",kxseg=");
};

window.krux_getUser = function() {
    return window.Krux.user;
};

window.krux_getFWKeyValues = function(prefix, limit) {
    var segPrefix = prefix || "_fwu:386123:";
    var segLimit = limit || 35;
    var fwKVP = {};
    for (var x = 0; x < window.Krux.segments.length; x++) {
        if (x < segLimit) fwKVP[segPrefix + window.Krux.segments[x]] = 1;
    }
    return fwKVP;
};

window.Krux.setControlTag = function(controlTagId) {
    
    var objectProto = Object.prototype;
    var toString = objectProto.toString;

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }
    
    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop
    
    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function(/* arguments */) {
            var args = ['[AdFuelModule - Krux]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        }
    }
    
    function processCookie() {
    
        function registerModuleWithAdFuel() {
            var kuid = window.Krux.user;
            var ksg = window.Krux.segments;
            
            log('setting krux targeting', {kuid: kuid, ksg: ksg});
            
            window.AdFuel.addPageLevelTarget('kuid',kuid);
            window.AdFuel.addPageLevelTarget('ksg', ksg);
        }
        
        if (window.AdFuel) {
            //AdFuel loaded first
            registerModuleWithAdFuel();
        } else {
            //wait for AdFuel to load
            if (document.addEventListener) {
                document.addEventListener('AdFuelCreated', registerModuleWithAdFuel, true);
            } else if (document.attachEvent) {
                document.attachEvent('onAdFuelCreated', registerModuleWithAdFuel);
            }    
        }
    };
    
    //execute script to set cookie
    var a = document,
        b = a.createElement("script"),
        c = a.getElementsByTagName("script")[0],
        d = /^(complete|loaded)$/,
        e = false;
        
    b.type = "text/javascript";
    b.async = true;
	
    var m, src=(m=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(m[1]);
	b.src = /^https?:\/\/([^\/]+\.)?krxd\.net(:\d{1,5})?\//i.test(src) ? src : src === "disable" ? "" :
	   (location.protocol==="https:"?"https:":"http:") + "//cdn.krxd.net/controltag?confid=" + controlTagId;
       
    b.onload = b.onreadystatechange = function() {
        if (!e && !(('readyState' in b) && d.test(b.readyState))) {
            b.onload = b.onreadystatechange = null;
            e = true;
            processCookie();
        }
    };
    
    c.parentNode.insertBefore(b, c);        
};

if ("IWzCuclz") {
    //set based on site
    window.Krux.setControlTag("IWzCuclz");
}


////////////////////////////////////////////
//Transaction ID
////////////////////////////////////////////

window.cnnad_transactionID = null;

//referenced by registries 
window.cnnad_getTransactionID = function() {
	if (!window.cnnad_transactionID) {
		window.cnnad_transactionID = Math.round((new Date()).getTime() / 1000) + '' + Math.floor(Math.random()*9007199254740992);
	}
	return window.cnnad_transactionID;
};

window.turner_getTransactionId = window.cnnad_getTransactionID;

window.turner_getTransactionId();


(function init() {
            
    var objectProto = Object.prototype;
    var toString = objectProto.toString;

    function isFunction(object) {
        return toString.call(object) === '[object Function]';
    }

    function isObject(object) {
        var type = typeof object;
        return type === 'function' || type === 'object' && !!object;
    }
    
    function getURLParam(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        if (document.location.search) {
            var results = regex.exec(document.location.search);
            if (results) {
                return results[1];
            } else {
                return "";
            }
        } else {
            return "";
        }
    }

    var log = function() {}; //noop
    
    if (isObject(window.console) && isFunction(window.console.log) && getURLParam("debug") == "true") {
        log = function(/* arguments */) {
            var args = ['[AdFuelModule - TransactionId]'];
            args.push.apply(args, arguments);
            window.console.log.apply(window.console, args);
        }
    }
    
    function registerModuleWithAdfuel() {
        var transId = window.turner_getTransactionId();
            
        log('setting guid targeting', {transId: transId});
        
        window.AdFuel.addPageLevelTarget('transId', transId);
    }
    
    if (window.AdFuel) {
        //AdFuel loaded first
        registerModuleWithAdfuel();
    } else {
        //wait for AdFuel to load
        if (document.addEventListener) {
            document.addEventListener('AdFuelCreated', registerModuleWithAdfuel, true);
        } else if (document.attachEvent) {
            document.attachEvent('onAdFuelCreated', registerModuleWithAdfuel);
        }        
    } 
})();

