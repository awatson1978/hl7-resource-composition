
// create the object using our BaseModel
Compositions = BaseModel.extend();


//Assign a collection so the object knows how to perform CRUD operations
Compositions.prototype._collection = Compositions;

// Create a persistent data store for addresses to be stored.
// HL7.Resources.Patients = new Mongo.Collection('HL7.Resources.Patients');
if(typeof Compositions === 'undefined'){
  if(Package['clinical:autopublish']){
    Compositions = new Mongo.Collection('Compositions');
  } else {
    Compositions = new Mongo.Collection('Compositions', {connection: null});
  }
}

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
Compositions._transform = function (document) {
  return new Compositions(document);
};


CompositionsSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "Composition"
  },
  "identifier" : { 
    optional: true,
    type: IdentifierSchema
  }, 
  "status" : {
    optional: true,
    type: String
  }, 
  "type" : { 
    optional: true,
    type: CodeableConceptSchema
  }, 
  "class" : { 
    optional: true,
    type: CodeableConceptSchema 
  }, 
  "subject" : { 
    optional: true,
    type: ReferenceSchema 
  }, 
  "encounter" : { 
    optional: true,
    type: ReferenceSchema
  }, 
  "date" : {
    optional: true,
    type: Date
  }, 
  "author" : {
    optional: true,
    type: [ ReferenceSchema ]
  }, 
  "title" : {
    optional: true,
    type: String
  }, 
  "confidentiality" : {
    optional: true,
    type: Code
  }, 
  "attester.mode" : {
    optional: true,
    type: [ Code ]
  }, 
  "attester.time" : {
    optional: true,
    type: Date
  }, 
  "attester.party" : { 
    optional: true,
    type: ReferenceSchema
  },
  "custodian" : { 
    optional: true,
    type: ReferenceSchema
  }, 
  "relatesTo.code" : {
    optional: true,
    type: Code
  },     
  "relatesTo.targetIdentifier" : { 
    optional: true,
    type: IdentifierSchema 
  },
  "relatesTo.targetReference" : { 
    optional: true,
    type: ReferenceSchema 
  },
  "event.code" : {
    optional: true,
    type: [ CodeableConceptSchema ]
  }, 
  "event.period" : { 
    optional: true,
    type: PeriodSchema 
  }, 
  "event.detail" : {
    optional: true,
    type: [ ReferenceSchema ]
  }, 
  "section.title" : {
    optional: true,
    type: String
  }, 
  "section.code" : { 
    optional: true,
    type: CodeableConceptSchema 
  }, 
  "section.text" : { 
    optional: true,
    type: NarrativeSchema 
  }, 
  "section.mode" : {
    optional: true,
    type: Code
  }, 
  "section.orderedBy" : { 
    optional: true,
    type: CodeableConceptSchema 
  }, 
  "section.entry" : {
    optional: true,
    type: [ ReferenceSchema ]
  }, 
  "section.emptyReason" : { 
    optional: true,
    type: CodeableConceptSchema 
  },
  "section.section" : {
    optional: true,
    blackbox: true,
    type: [ Object ]
  } 
});
Compositions.attachSchema(CompositionsSchema);

export default { Composition, Compositions, CompositionsSchema };