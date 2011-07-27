//============================================================================
// FamilyTree.confirmationPage
//============================================================================
/*globals FamilyTree*/

/**

 Class Documentation Here...
 @extends SC.Page
 @author Andrew Deck
 @version 0.1
 @since 0.1

*/

FamilyTree.confirmationPage = SC.Page.create(
 /** @scope FamilyTress.confirmationPage.prototype */{
  familyPane: SC.SheetPane.extend({
    defaultResponder: 'FamilyTree.statechart',
    layout: { centerX: 0, centerY: 0, height: 200, width: 400 },
    
    contentView: SC.View.design({
      layout: { left: 0, bottom: 0, right: 0, top: 0 },
      //backgroundColor: '#FF4900',
      childViews: 'deleteButton cancelButton message'.w(),
      
      message: SC.View.extend({
        layout: { top: 80, left: 20, right: 0, bottom: 60 },
        familyName: '',
        displayProperties: ['familyName'],
        
        render: function(context) {
          var content = context.begin();
          var familyName = this.get('familyName');
          content.push("<p>Are you sure you want to delete the ", familyName, " family?</p>");
          content.end();
          sc_super();
        }    
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