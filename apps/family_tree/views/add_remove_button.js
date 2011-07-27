// ==========================================================================
// Project:   FamilyTree.AddRemoveButtonView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals FamilyTree */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
FamilyTree.AddRemoveButtonView = SC.SegmentedView.extend(
/** @scope FamilyTree.AddRemoveButtonView.prototype */ {
  layout: { bottom: 15, right: 15, height: 24, width: 82},
  allowsEmptySelection: YES,
  itemTitleKey: 'title',
  itemTargetKey: 'target',
  itemActionKey: 'action',
  itemValueKey: 'value',
  itemWidthKey: 'width'
});
