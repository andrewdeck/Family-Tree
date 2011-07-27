//============================================================================
// FamilyTree.statechart
//============================================================================
/*globals FamilyTree Ki*/

/**

 Class Documentation Here...
 @extends Ki.Statechart
 @author Andrew Deck && Brad Kahl
 @version 0.1
 @since 0.1

*/

FamilyTree.statechart = Ki.Statechart.create(
 /** @scope FamilyTree.statechart.prototype */{
      
   rootState: Ki.State.design({
     
     initialSubstate: 'browsing',
     
     browsing: Ki.State.design({
       
       addFamily: function () {
         this.gotoState('addFamily');
       },
       
       deleteFamily: function () {
         this.gotoState('deleteFamily');
       },
       
       addMember: function () {
         this.gotoState('addMember');
       },
       
       deleteMember: function () {
         this.gotoState('deleteMember');
       }
       
     }),
     
     editFamily: Ki.State.design({
       
       initialState: 'addFamily',
       
       addFamily: Ki.State.design({
         
         enterState: function () {
           //append add family panel
           var pane = FamilyTree.editorPage.get('familyPane');
           this.set('pane', pane);
           pane.append();
         },
         
         exitState: function () {
           //remove pane
           var pane = this.get('pane');
           pane.remove();
           this.set('pane', null);
         },
         
         cancel: function(){
           console.log('cancel');
           this.gotoState('browsing');
         }
         
       }),
       
       deleteFamily: Ki.State.design({
         
         enterState: function () {
           //append confirmation panel
           if (FamilyTree.familyController.get('content')) {
             var pane = FamilyTree.confirmationPage.get('familyPane');
              this.set('pane', pane);
              pane.append();
           } else {
             this.gotoState('browsing');
           }
         },
         
         exitState: function () {
           //remove pane
           var pane = this.get('pane');
           if (pane) {
             pane.remove();
             this.set('pane', null);
           }
           
         },
         
         cancel: function(){
           this.gotoState('browsing');
         },
         
         confirmDelete: function(){
           this.gotoState('browsing');
         }
         
       })
       
     }),
     
     editMember: Ki.State.design({
       
       addMember: Ki.State.design({
         
         enterState: function () {
           //append add member panel
           var pane = FamilyTree.editorPage.get('memberPane');
           this.set('pane', pane);
           pane.append();
         },
         
         exitState: function () {
           //remove pane
           var pane = this.get('pane');
           pane.remove();
           this.set('pane', null);
         },
         
         cancel: function(){
           this.gotoState('browsing');
         }
         
       }),
       
       deleteMember: Ki.State.design({
         
         enterState: function () {
           //append confirmation panel
           var pane = FamilyTree.confirmationPage.get('memberPane');
           this.set('pane', pane);
           pane.append();
         },
         
         exitState: function () {
           //remove pane
           var pane = this.get('pane');
           pane.remove();
           this.set('pane', null);
         },
         
         cancel: function(){
           this.gotoState('browsing');
         }
         
       })
       
     })
     
   })
});