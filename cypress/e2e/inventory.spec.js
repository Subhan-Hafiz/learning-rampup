describe('InventoryComponent', () => {
    beforeEach(() => {
        // Visit your app and make sure Mirage is serving the mocked data
        cy.visit('http://localhost:3000/devices/inventory');
    });

    it('should render the component', () => {
        cy.get('.inventory').should('exist');
        cy.contains('Inventory');
        cy.contains('View and onboard devices in your inventory. Added devices can be associated with an application.');
        cy.contains('Add Item');
    });

    it('should display boxes with correct content', () => {
        cy.contains('Require App');
        cy.contains('57');
        cy.contains('Require Subscriptions');
        cy.contains('34');
        cy.contains('Assigned & Subscribed');
        cy.contains('226');
        cy.contains('Total Services');
        cy.contains('317');
    });

    it('should filter data based on search input', () => {
        cy.intercept('GET', '/api/inventory-items*', (req) => {
            req.continue((res) => {
                
            });
        }).as('getFilteredData');

        cy.get('input[placeholder="Search inventory..."]').type('Static Product Name 1');
        cy.get('#dataTable').should('exist'); 
        cy.get('#dataTable').contains('Static Product Name 1');
    });

    it('should open confirmation layer and delete an item', () => {
        cy.intercept('DELETE', '/api/inventory-items/11', {}).as('deleteItem');
        cy.get('.delete').last().click();

        cy.contains('Are you sure you want to delete this item?').should('exist');
        cy.get('button').contains('OK').click();
        cy.get('#dataTable').should('not.contain', 'Static Product Name 1');
    });
});