export class SearchPage {

    weblocators = {
        "searchBox": ".search-input",
        "searchBoxList": "li.ui-menu-item",
        "searchResult": "h1",
        "searchButton": "#search_submit_button",
        "productfound": "span#num_found",
        "notFound": "#product_list > center"
    }

    searchProduct(productName) {
        cy.get(this.weblocators.searchBox).type(productName)
    }

    selectFirstProduct() {
        cy.get(this.weblocators.searchBoxList).eq(2).click()
    }

    searchResult(productName) {
        cy.get(this.weblocators.searchResult).should("have.text", productName)
    }

    clickOnSearchButton() {
        cy.get(this.weblocators.searchButton).click()
    }

    isProductListed() {
        if (cy.get(this.weblocators.productfound).should("be.visible")) {
            cy.log("Product listed")
        }
        else if (cy.get(this.weblocators.notFound).should("be.visible")) {
            cy.screenshot()
        }
        else {
            cy.log("Product not listed")
        }
    }


}