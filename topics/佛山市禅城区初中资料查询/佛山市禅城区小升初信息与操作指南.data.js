(function () {
  const core = window.__schoolGuideCoreData || {};
  const publicData = window.__schoolGuidePublicData || {};
  const privateData = window.__schoolGuidePrivateData || {};
  window.__schoolGuideData = Object.assign({}, core, publicData, privateData);
})();
