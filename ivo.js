(function() {
  var u = new Date();
  var h = new Date().getTime();
  var v = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (h + Math.random()) * 16 % 16 | 0;
    h = Math.floor(h / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });

  window['ivo_ad_1048045'] = [{
    sessionId: v,
    element: document.currentScript ? document.currentScript.parentElement : document.body,
    ascm: '%%CLICK_URL_UNESC%%',
    macros: {
      '$%7BGDPR%7D': '${GDPR}',
      '$%7BGDPR_CONSENT_755%7D': '${GDPR_CONSENT_755}',
      '$%7BGDPR_CONSENT_78%7D': '${GDPR_CONSENT_78}',
      '$%7BGDPR_CONSENT_95%7D': '${GDPR_CONSENT_95}'
    },
    organisationTracking: {
      organisationLineItemID: '',
      organisationInventoryID: '',
      organisationAudienceId: '',
      organisationAudienceSegmentId: '',
      organisationAudienceCustom: ''
    },
    rendered: false
  }];

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://t.servedbyivo.com/S2Oi6dT_LyDyny4funGztQ-init.js?' + new Date().getTime();
  document.head.appendChild(s);
})();
