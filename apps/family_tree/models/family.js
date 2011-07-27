// ==========================================================================
// Project:   FamilyTree.Family
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals FamilyTree */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
FamilyTree.Family = SC.Record.extend(
/** @scope FamilyTree.Family.prototype */ {
  
  primaryKey: 'guid',

  name: SC.Record.attr(String, {
    isRequired: YES
  }),
  
  members: SC.Record.toMany("FamilyTree.Person", {
    inverse: "family",
    isMaster: YES
  })
  
});
