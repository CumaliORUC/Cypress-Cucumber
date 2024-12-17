import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { SearchPage } from '../Pages/SearchPage';


const searchPage=new SearchPage();

And('I search {string}', (productName) => {
    searchPage.searchProduct(productName)
})

And('I select second recommend product', () => {
    searchPage.selectFirstProduct()
})

And('I click on the search box icon', () => {
    searchPage.clickOnSearchButton()
})

Then('I should see the {string} in results', (searchProduct) => {
    searchPage.searchResult(searchProduct)
})

And('if there is no product take a screenshot', () => {
    searchPage.isProductListed()
})



