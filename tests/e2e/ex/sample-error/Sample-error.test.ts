import { Selector } from "testcafe";
import page from '../pages/Sample.page';

fixture `TestCafé API demo`
    .page `http://localhost:3000/sample/`;

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker')
        .typeText(Selector("input#lsdfjk"), "hai");
});