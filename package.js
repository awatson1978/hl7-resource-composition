Package.describe({
  name: 'clinical:hl7-resource-composition',
  version: '1.4.10',
  summary: 'HL7 FHIR Resource - Composition',
  git: 'https://github.com/clinical-meteor/hl7-resource-composition',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('aldeed:collection2@3.0.0');
  api.use('simple:json-routes@2.1.0');
  api.use('momentjs:moment@2.17.1');
  api.use('ecmascript@0.12.4');
  api.use('session');
  api.use('http'); 
  api.use('react-meteor-data@0.2.15');

  api.use('clinical:extended-api@2.5.0');
  api.use('matb33:collection-hooks@0.7.15');
  
  api.addFiles('lib/Compositions.js', ['client', 'server']);

  api.export('Measure');
  api.export('Composition');
  api.export('Compositionchema');

  api.mainModule('index.jsx', 'client');
});
