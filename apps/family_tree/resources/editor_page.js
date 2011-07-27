//============================================================================
// FamilyTree.editorPage
//============================================================================
/*globals FamilyTree*/

/**

 Class Documentation Here...
 @extends SC.Page
 @author Andrew Deck
 @version 0.1
 @since 0.1

*/

FamilyTree.editorPage = SC.Page.create(
/** @scope FamilyTree.editorPage.prototype */{
  
  familyPane: SC.SheetPane.extend({
    defaultResponder: 'FamilyTree.statechart',
    layout: { centerX: 0, centerY: 0, height: 300, width: 500 },
    
    contentView: SC.View.design({
      layout: { left: 0, bottom: 0, right: 0, top: 0 },
      //backgroundColor: '#FF4900',
      childViews: 'deleteButton cancelButton message'.w(),
      
      message: SC.View.extend({
        layout: { top: 0, left: 0, right: 0, bottom: 60 }
        
      }),
      
      deleteButton: SC.ButtonView.extend({
        layout: { bottom: 20, right: 120, width: 80, height: 24},
        textAlign: SC.ALIGN_CENTER,
        title: 'Delete',
        action: 'confirmDelete'
      }),
      
      cancelButton: SC.ButtonView.extend({
        layout: { bottom: 20, right: 20, width: 80, height: 24},
        textAlign: SC.ALIGN_CENTER,
        title: 'Cancel',
        action: 'cancel'
      })
    })
  }),
  
  memberPane: SC.SheetPane.extend({
    defaultResponder: 'FamilyTree.statechart',
    layout: { centerX: 0, centerY: 0, height: 300, width: 500 },
    
    contentView: SC.View.design({
      layout: { left: 0, bottom: 0, right: 0, top: 0 },
      backgroundColor: '#FF4900',
      childViews: 'deleteButton cancelButton'.w(),
      
      deleteButton: SC.ButtonView.extend({
        layout: { bottom: 20, right: 120, width: 80, height: 24},
        textAlign: SC.ALIGN_CENTER,
        title: 'Delete',
        action: 'confirmDelete'
      }),
      
      cancelButton: SC.ButtonView.extend({
        layout: { bottom: 20, right: 20, width: 80, height: 24},
        textAlign: SC.ALIGN_CENTER,
        title: 'Cancel',
        action: 'cancel'
      })
    })
  })
  
});