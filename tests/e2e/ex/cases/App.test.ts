import 'testcafe';

fixture('Homepage test')
  .page('http://localhost:3000/');

import HomePage from '../pages/Home.page';

const page = new HomePage();

test('resolves when success button is clicked', async t => {
  const currentDate = new Date().toISOString().split('T')[0];

  await t.click(page.successButton)
    .expect(page.statusSelector.innerText).contains('Loading...')
    .expect(page.noteSelector.innerText).contains(`Output: ${currentDate}`)
    .wait(5000);
});

test('rejects when failure button is clicked', async t => {
  await t.click(page.failureButton)
    .expect(page.statusSelector.innerText).contains('Loading...')
    .expect(page.logSelector.innerText).contains('Error: Boom!')
    .wait(5000);
});
