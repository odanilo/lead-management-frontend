type MockGetLeadsInput = {
  newStatus?: 'PENDING' | 'ACCEPTED';
  delay?: number;
};

function mockGetLeads({ newStatus, delay }: MockGetLeadsInput) {
  const fixtureFile =
    newStatus === 'ACCEPTED'
      ? 'getLeadsAcceptedStatus.json'
      : 'getLeadsPendingStatus.json';

  cy.intercept(
    {
      method: 'GET',
      url: `**leads?status=${newStatus}**`,
    },
    {
      fixture: `home/${fixtureFile}`,
      delay,
    },
  ).as('GetLeadsData');
}

function mockGetLeadsWithError() {
  cy.intercept(
    {
      method: 'GET',
      url: `**leads**`,
    },
    {
      statusCode: 500,
    },
  ).as('GetLeadsWithErrorData');
}

function mockPatchLeadStatus({ hasErro }: { hasErro?: boolean } = {}) {
  cy.intercept(
    {
      method: 'PATCH',
      url: `**leads/**`,
    },
    {
      statusCode: hasErro ? 500 : 200,
    },
  ).as('PatchLeadStatusData');
}

describe('Home tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render error view when fetch fails', () => {
    mockGetLeadsWithError();

    cy.wait('@GetLeadsWithErrorData');

    cy.get('[data-cy="TimelineCard_Error_Title"]', { timeout: 15000 })
      .should('be.visible')
      .and('have.text', 'An error occurred while fetching the leads');

    cy.get('[data-cy="TimelineCard_Error_Description"]', { timeout: 15000 })
      .should('be.visible')
      .and('have.text', 'Please try again later.');
  });

  it('should render loading while fetching is pending', () => {
    mockGetLeads({ newStatus: 'PENDING', delay: 500 });
    mockGetLeads({ newStatus: 'ACCEPTED' });

    cy.get('[data-cy="TimelinePending_Container"]').should('be.visible');

    cy.wait('@GetLeadsData');
  });

  it('should render tabs and content', () => {
    mockGetLeads({ newStatus: 'PENDING' });
    mockGetLeads({ newStatus: 'ACCEPTED' });

    cy.wait('@GetLeadsData');

    cy.get('[data-cy="Tab_Trigger_Invited"]')
      .should('be.visible')
      .should('have.text', 'Invited');
    cy.get('[data-cy="Tab_Trigger_Accepted"]')
      .should('be.visible')
      .should('have.text', 'Accepted');

    cy.get('[data-cy="TimelineCard_Pending_0"]').should('be.visible');
    cy.get('[data-cy="TimelineCard_Accepted_0"]').should('not.exist');

    cy.get('[data-cy="TimelineCard_Pending_0"]').within(() => {
      cy.get('[data-cy="AvatarBase_Container"]').should('be.visible');

      cy.get('[data-cy="TimelineCard_Title"]')
        .should('be.visible')
        .should('have.text', 'John');

      cy.get('[data-cy="TimelineCard_Time"]')
        .should('be.visible')
        .should('have.attr', 'datetime', '2025-01-04 14:37:00')
        .should('have.text', 'January 4 @ 11:37 AM');

      cy.get('[data-cy="TimelineCard_Lead_Details"]').should('be.visible');

      cy.get('[data-cy="TimelineCard_Lead_Suburb"]')
        .should('be.visible')
        .should('have.text', 'Brooklyn');

      cy.get('[data-cy="TimelineCard_Lead_Category"]')
        .should('be.visible')
        .should('have.text', 'Paintes');

      cy.get('[data-cy="TimelineCard_Lead_JobId"]')
        .should('be.visible')
        .should('have.text', 'Job ID: J1001');

      cy.get('[data-cy="TimelineCard_Lead_Description"]')
        .should('be.visible')
        .should('contain.text', 'Paint the exterior of a house.');

      cy.get('[data-cy="TimelineCard_Button_Accept"]')
        .should('be.visible')
        .should('have.text', 'Accept');

      cy.get('[data-cy="TimelineCard_Button_Decline"]')
        .should('be.visible')
        .should('have.text', 'Decline');

      cy.get('[data-cy="TimelineCard_Lead_Price"]')
        .should('be.visible')
        .should('have.text', '$150.00 Lead invitation');
    });

    cy.get('[data-cy="Tab_Trigger_Accepted"]').click();

    cy.get('[data-cy="TimelineCard_Pending_0"]').should('not.exist');
    cy.get('[data-cy="TimelineCard_Accepted_0"]').should('be.visible');
  });

  it('should be able to accept lead', () => {
    mockGetLeads({ newStatus: 'PENDING' });
    mockGetLeads({ newStatus: 'ACCEPTED' });

    cy.wait('@GetLeadsData');

    mockPatchLeadStatus();

    cy.get('[data-cy="TimelineCard_Button_Accept"]').first().click();

    cy.wait('@PatchLeadStatusData');
    cy.wait('@GetLeadsData');

    cy.get('[data-cy="Toast_Title"]')
      .should('be.visible')
      .should('have.text', 'Lead successfully updated');

    cy.get('[data-cy="Toast_Description"]')
      .should('be.visible')
      .should('have.text', 'Lead is now marked as accepted');
  });

  it('should show error when changing lead status fails', () => {
    mockGetLeads({ newStatus: 'PENDING' });
    mockGetLeads({ newStatus: 'ACCEPTED' });

    cy.wait('@GetLeadsData');

    mockPatchLeadStatus({ hasErro: true });

    cy.get('[data-cy="TimelineCard_Button_Accept"]').first().click();

    cy.wait('@PatchLeadStatusData');
    cy.wait('@GetLeadsData');

    cy.get('[data-cy="Toast_Title"]')
      .should('be.visible')
      .should('have.text', 'Failed to update the lead');

    cy.get('[data-cy="Toast_Description"]').should('be.visible');
  });
});
