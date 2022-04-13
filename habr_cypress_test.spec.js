//const { clearImmediate } = require("timers")
//const { isMainThread } = require("worker_threads")

describe('Cypress Tests', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

           cy.log('Ввод несуществующего логина')
            cy.log('input[id="passp-field-login"]')
                .type(data.none_existent_login)

            cy.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-Sign-In-button"] button[type="submit"]')
                .click()

            cy.log('Проверка появления элемента сигнализирующего об ошибке')
            cy.get('div[class="passp-form-field__error"]')
                .should('exist')
        });
    });
});