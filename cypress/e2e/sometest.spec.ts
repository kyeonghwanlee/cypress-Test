// cypress/integration/sometest.spec.ts

context('회원가입후 뭔가를 한다', (): void => {
  Cypress.on('window:before:load', (win): void => {
    win.indexedDB.deleteDatabase('firebaseLocalStorageDb');
  }); // indexedDB 초기화시켜 로그인 상태일시  로그아웃

  it('회원가입을 한다', (): void => {
    // 회원가입 함
  });
});
