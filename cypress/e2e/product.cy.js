describe('Product Management', () => {
  beforeEach(() => {
    cy.visit('/'); // Assuming the app runs on the root URL
  });

  it('should create a new product', () => {
    cy.get('input[name="nome"]').type('Test Product');
    cy.get('input[name="categoria"]').type('Test Category');
    cy.get('input[name="descricao"]').type('Test Description');
    cy.get('input[name="preco"]').type('10.99');
    cy.get('input[name="imagem"]').type('https://example.com/image.jpg'); // Replace with a valid image URL or mock
    cy.get('button').contains('Adicionar').click();
    // Add assertions to verify successful creation, e.g., check for a success message or the product in the list
  });

  it('should edit an existing product', () => {
    // Assuming there's a way to select a product for editing (e.g., a button or link with a unique identifier)
    // You might need to create a product first if the list is initially empty
    // Example: cy.get('some-selector-for-edit-button').first().click(); 
    // Then, update the fields and submit
    // Example:
    // cy.get('input[name="nome"]').clear().type('Updated Product Name');
    // cy.get('button').contains('Atualizar').click(); 
    // Add assertions to verify successful update
  });

  it('should delete a product', () => {
    // Similar to editing, you need a way to select a product for deletion
    // Example: cy.get('some-selector-for-delete-button').first().click();
    // If there's a confirmation dialog, you might need to confirm the deletion
    // Example: cy.get('button').contains('Confirmar').click();
    // Add assertions to verify successful deletion (e.g., product no longer in the list)
  });

  it('should display products on the page', () => {
    // Assuming products are displayed in a list or grid
    // Example: cy.get('some-selector-for-product-list').should('exist');
    // You can also check for specific product details
    // Example: cy.get('some-selector-for-product-name').should('contain', 'Product Name');
  });

  it('should validate form fields', () => {
    // Test empty fields
    cy.get('button').contains('Adicionar').click();
    // Add assertions to check for error messages for required fields
    // Example: cy.get('some-selector-for-nome-error').should('contain', 'Nome é obrigatório');

    // Test invalid data (e.g., non-numeric price)
    cy.get('input[name="nome"]').type('Invalid Product');
    cy.get('input[name="categoria"]').type('Invalid Category');
    cy.get('input[name="descricao"]').type('Invalid Description');
    cy.get('input[name="preco"]').type('abc');
    cy.get('input[name="imagem"]').type('Invalid URL');
    cy.get('button').contains('Adicionar').click();
    // Add assertions to check for specific validation errors
  });
});