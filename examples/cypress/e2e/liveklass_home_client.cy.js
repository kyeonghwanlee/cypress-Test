// https://youtu.be/OIAzwr-_jhY
describe('Basic spec', () => {

  beforeEach(function () {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()
  })

  it('homepage connect', () => {
    cy.viewport(1920,1080)
    cy.visit('http://liveklass.com')

    //main page move test
    cy.get('[class="button is-button-small is-alternate w-button"]').click()
    cy.url().should('include','/templates')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 
    cy.go('back') 

    cy.contains('지금 무료로 시작하기').click()
    cy.url().should('include','/templates')
    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 
    //cy.get('[class="button-2-copy max-width-full"]').eq(0).invoke('removeAttr', 'target').click()

    
    cy.go('back')  

    //features page move tests
        cy.contains('기능소개').click()
    cy.url().should('include','/features')
    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 
    
    //pricing page move test
    cy.contains('가격안내').click()
    cy.url().should('include','/pricing')
    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 

    //story page move test
    cy.contains('고객 스토리').click()
    cy.url().should('include','/story')
    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 

    //connect page move test
    cy.contains('오늘만 무료').click()
    cy.url().should('include','/connect')
    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 
    
  })
  
  it('2. login menu test', () => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    cy.contains('카카오톡으로 로그인').should('exist')
    cy.contains('구글로 로그인').should('exist')
    cy.contains('페이스북으로 로그인').should('exist')
    cy.contains('이메일로 로그인').should('exist')

    // Sign Up
    cy.contains('회원가입').click()
    cy.url().should('include','/createaccount')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    cy.go('back')

    // Forgot password
    cy.contains('비밀번호 재설정').click() 
    cy.contains('이메일 발송').should('exist')

    // email input false
    cy.contains('이메일 형식으로 입력해 주세요').should('not.exist')

    cy.get('[placeholder="이메일을 입력해주세요"]').type('@dl29240730')
    cy.contains('이메일 발송').click()

    cy.contains('이메일 형식으로 입력해 주세요').should('exist') 

    // check
    cy.contains('비밀번호를 재설정할 수 있는 링크를 메일로 발송하였습니다.').should('not.exist')
    cy.get('[placeholder="이메일을 입력해주세요"]').clear()
    cy.get('[placeholder="이메일을 입력해주세요"]').type('ruoghks@gmail.com')
    cy.contains('이메일 발송').click() 
    cy.contains('비밀번호를 재설정할 수 있는 링크를 메일로 발송하였습니다.').should('exist')

    // Ok button
    cy.contains('확인').click()
  })
  
  it('3-1. Login failse (error email&error password)', () => {
    // setting
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // email text input false
    cy.contains('가입된 이메일이 아닙니다. 입력한 내용을 다시 확인해주세요.').should('not.exist')

    cy.get('[type="text"]').type('admin')
    cy.get('[type="password"]').type('admin')
    cy.get('[class="lk-button gradient"]').click()

    cy.contains('가입된 이메일이 아닙니다. 입력한 내용을 다시 확인해주세요.').should('exist') 
  })

  it('3-2. Login failse(no password)', () => {
    // setting
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // email text input false
    cy.contains('비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.').should('not.exist')

    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('admin')
    cy.get('[class="lk-button gradient"]').click()

    cy.contains('비밀번호가 일치하지 않습니다. 입력한 내용을 다시 확인해 주세요.').should('exist') 
  })

  it('3-3. Login failse(no email & password)', () => {
    // setting
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // email text input false
    cy.contains('필수 정보입니다.').should('not.exist')
    cy.get('[class="lk-button gradient"]').click()
    cy.contains('필수 정보입니다.').should('exist') 
  })

  it('4. Login should mypage login & logout', () => {
    // TODO: Set this as Channel.draft_form_value
    //const id = '6285f1e10c66185a08c9'

    // setting
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()

    // site page verification
    cy.url().should('include','/mypage')
    cy.wait(1000)
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    //button check
    cy.contains('내 사이트').should('exist')
    cy.contains('운영 가이드').should('exist') 
    cy.contains('수강생 가이드').should('exist') 
    cy.contains('라클아카데미').should('exist') 
    cy.contains('사이트').should('exist') 
    cy.contains('클래스').should('exist')
    
    // user stting button check
    cy.get('[class="ki-user"]').click()
    cy.wait(1000)

    cy.contains('마이페이지로 이동').should('exist')
    cy.contains('내 정보 수정').should('exist') 
    cy.contains('신청 내역').should('exist') 
    cy.contains('로그아웃').should('exist')  

    cy.contains('내 정보 수정').click()
    cy.wait(1000)
    cy.url().should('include','/editinformation')    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    //button check
    cy.contains('내 사이트').should('exist')  
    cy.contains('내 정보 저장하기').should('exist')
    cy.contains('메일 인증').should('exist')
    cy.contains('비밀번호를 재설정').should('exist') 
    cy.contains('내 정보 수정').should('exist') 
    cy.contains('신청 내역').should('exist')
    cy.contains('운영 가이드').should('exist') 
    cy.contains('수강생 가이드').should('exist') 
    cy.contains('라클아카데미').should('exist') 

    //phone chage
    cy.get('[name="phone"]').clear()
    cy.get('[name="phone"]').type('01012345678')
    cy.contains('정보가 수정되었습니다').should('not.exist')
    cy.get('[type="submit"]').click()
    cy.contains('정보가 수정되었습니다').should('exist')
    cy.get('[tabindex="1001"]').click() 

    //password chage
    cy.contains('새 비밀번호를 입력해 주세요.').should('not.exist')
    cy.get('[name="password"]').type('12')
    cy.get('[type="submit"]').click()
    cy.contains('새 비밀번호를 입력해 주세요.').should('exist')

    cy.get('[name="password"]').clear()
    cy.get('[name="password"]').type('@dl292407')

    cy.contains('비밀번호는 8자리 이상 입력해 주세요.').should('not.exist')
    cy.get('[name="newPassword"]').type('@dsfjl')
    cy.contains('비밀번호는 8자리 이상 입력해 주세요.').should('exist')

    cy.contains('비밀번호가 일치하지 않습니다.').should('not.exist')
    cy.get('[name="newPassword"]').clear()
    cy.get('[name="newPassword"]').type('@dl29240730') 
    cy.get('[name="passwordConfirm"]').type('@dsfjl')
    cy.contains('비밀번호가 일치하지 않습니다.').should('exist')

    cy.get('[name="passwordConfirm"]').clear()
    cy.get('[name="passwordConfirm"]').type('@dl29240730')

    cy.contains('비밀번호를 확인해 주세요.').should('not.exist')
    cy.get('[type="submit"]').click() 
    cy.contains('비밀번호를 확인해 주세요.').should('exist')
    cy.get('[tabindex="1001"]').click()

    cy.get('[name="password"]').clear()
    cy.get('[name="password"]').type('@dl29240730')

    cy.contains('정보가 수정되었습니다').should('not.exist')
    cy.get('[type="submit"]').click() 
    cy.contains('정보가 수정되었습니다').should('exist')
    cy.get('[tabindex="1001"]').click()

    //paymenthistory
    cy.contains('신청 내역').click()
    cy.wait(1000)
    cy.url().should('include','/paymenthistory')    
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    }) 

    cy.contains('내 사이트').should('exist')  
    cy.contains('내 정보 수정').should('exist') 
    cy.contains('신청 내역').should('exist')
    cy.contains('운영 가이드').should('exist') 
    cy.contains('수강생 가이드').should('exist') 
    cy.contains('라클아카데미').should('exist') 

    // user stting cilck
    cy.get('[class="ki-user"]').click()

    // logout
    cy.contains('로그아웃').click()    
  })

  it('5. Login should login testlee001 class room join', () => {
    // setting
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()
    cy.wait(3000)

    // site page verification
    cy.url().should('include','/mypage')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    //button check
    cy.contains('내 사이트').should('exist')
    cy.contains('운영 가이드').should('exist') 
    cy.contains('수강생 가이드').should('exist') 
    cy.contains('라클아카데미').should('exist') 
    cy.contains('사이트').should('exist') 
    cy.contains('클래스').should('exist')

    //site move
    cy.get('[class="swiper-slide"]').click()
    cy.wait(1000)
    cy.get('[href="https://testlee001.liveklass.com"]').click()
    cy.wait(1000)
    
    // page check
    cy.get('[alt="logo title"]').should('exist')
    cy.get('[href="/intro"]').should('exist') 
    cy.get('[href="/classes"]').should('exist') 
    cy.get('[href="/me/classes"]').should('exist') 
    cy.get('[href="/notices"]').should('exist') 
    cy.get('[href="/me/classes"]').should('exist')
    
    //logo click
    cy.get('[alt="logo title"]').click()
    cy.wait(1000)
    cy.get('[href="/intro"]').click()
    cy.url().should('include','/intro')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    // class click
    cy.get('[href="/classes"]').click()
    cy.wait(1000)
    cy.url().should('include','/classes')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    // program click
    cy.get('[href="/me/classes"]').click()
    cy.wait(1000)
    cy.url().should('include','/me/classes')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })
    
    // Notice click
    cy.get('[href="/notices"]').click()
    cy.wait(1000)
    cy.url().should('include','/notices')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    // My lecture room click
    cy.get('[href="/me/classes"]').click()
    cy.wait(1000)
    cy.url().should('include','/me/classes')
    cy.url().then((valse) => {
      cy.log('The current real URL id: ', valse)
    })

    //Course registration
    cy.get('[href="/classes"]').click()
    cy.wait(1000)
    cy.get('[href="/classes/105127"]').eq(0).click()

    
    cy.contains('찜하기').should('exist')
    cy.contains('공유').should('exist')
    cy.contains('클래스 신청').should('exist')

    cy.contains('찜하기').click()
    
    /* 찜하기 여부 확인 및 체크 넣기 */
    //cy.go('back')
    
    //공유 버튼 클릭
    cy.contains('공유').click()
    cy.wait(3000)
    cy.contains('facebook').should('exist') 
    cy.contains('이메일').should('exist') 
    cy.contains('카카오톡').should('exist') 
    cy.contains('링크복사').should('exist')

    cy.get('[class="lk-button primary"]').click()
    cy.wait(1000)
    cy.get('[class="email"]').click({force:true})
    cy.get('[class="facebook"]').click({force:true})
    cy.get('[class="kakao"]').click({force:true})

    //공유 팝업 끄기    
    cy.get('[class="lk-close-button close"]').click()

    // 클래스 신청 버튼 클릭
    cy.contains('클래스 신청').click()
    cy.wait(3000)
    //class 신청
    cy.get('[type="text"]').clear()
    cy.get('[type="text"]').type('이경환')

    cy.get('[name="phone"]').eq(0).clear()
    cy.get('[name="phone"]').eq(1).clear() 

    cy.get('[name="phone"]').eq(0).type('01077646765')
    cy.get('[name="phone"]').eq(1).type('010776465')

    cy.get('[for="check_01"]').click()

    cy.contains('휴대폰 번호 확인을 정확하게 입력해 주세요.').should('not.exist')
    cy.get('[type="submit"]').click()
    cy.contains('휴대폰 번호 확인을 정확하게 입력해 주세요.').should('exist')

    cy.get('[name="phone"]').eq(0).clear()
    cy.get('[name="phone"]').eq(1).clear() 

    cy.get('[name="phone"]').eq(0).type('01077646765')
    cy.get('[name="phone"]').eq(1).type('01077646765')
    cy.get('[type="submit"]').click()
    cy.get('[class="btn_common btn_point btn_medium btn_new_point"]').click()
  })

  it('6-1. Login should class room go', () => {
    // setting
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()

    //site move
    cy.get('[class="swiper-slide"]').click()
    cy.get('[href="https://testlee001.liveklass.com"]').click()
    
    //Course registration
    cy.get('[href="/classes"]').click()
    cy.wait(1000)
    cy.get('[href="/classes/105127"]').eq(0).click()
    cy.wait(1000)

    //class room go
    cy.contains('강의실 입장').should('exist')
    cy.contains('강의실 입장').click()
    cy.wait(1000)
   
    //cy.contains('클래스로 돌아가기').should('exist')
    //cy.contains('클래스 수강 완료').should('exist')
    //cy.contains('리뷰 작성').should('exist')
    cy.contains('커리큘럼').should('exist')
    cy.contains('커뮤니티').should('exist')
    
    /*=================================================
    //플레이 X
    cy.get('[type="button"]').click()
    cy.get('[class="play rounded-box state-paused"]').
    =================================================*/

    //커뮤니티
    cy.contains('커뮤니티').click()
    cy.wait(1000)
    
    cy.contains('파일첨부').should('exist')
    cy.contains('등록하기').should('exist')
    cy.contains('커뮤니티').should('exist')
    cy.contains('과제').should('exist')
    cy.contains('공지사항').should('exist')
    cy.contains('내 글만 보기').should('exist')
    cy.contains('댓글달기').should('exist')
    cy.get('[class="icon-texts"]').should('exist')
    cy.get('[class="icon-texts icon-heart-w"]').should('exist')

    
    //전체글 하트
    cy.get('[class="icon-texts icon-heart-w"]').eq(0).click()

    //커뮤니티 파일 등록
    cy.get('[class="ui-textarea"]').type('1234567890')
    cy.get('input[type="file"]').attachFile('example.json')
    cy.wait(1500)
    cy.contains('등록하기').click()
    
    /*=================================================
    //커뮤니티 댓글 등록 (글 이 많을 수록 실패 추후 수정 필요)
    cy.contains('댓글달기').eq(0).click()
    cy.get('[class="lk-textarea button icon-send  fluid default"]').eq(0).type('1234567890')
    cy.get('[class="lk-icon textarea-icon-btn"]').click()
    =================================================*/
    //과제
    cy.contains('과제').click()
    cy.wait(1000)

    //전체글 하트
    cy.get('[class="icon-texts icon-heart-w"]').eq(0).click()

    //과제 파일 등록
    cy.get('[class="ui-textarea"]').type('1234567890')
    cy.get('input[type="file"]').attachFile('example.json')
    cy.wait(1500)
    cy.contains('등록하기').click()

    /*=================================================
    //과제 댓글 등록 (글 이 많을 수록 실패 추후 수정 필요)
    //cy.contains('댓글달기').eq(0).click()
    //cy.get('[class="lk-textarea button icon-send  fluid default"]').eq(0).type('1234567890')
    //cy.get('[class="lk-icon textarea-icon-btn"]').click()
    =================================================*/
    
    //리뷰 작성
    cy.contains('리뷰').click()
    cy.wait(1000)

    //cy.contains('저장').should('exist')
    //cy.contains('취소').should('exist')
    //cy.contains('리뷰 작성').should('exist')
    //cy.contains('리뷰 수정').should('exist')

    cy.get('[placeholder="클래스에 대한 평가를 작성해주세요"]').clear()
    cy.get('[placeholder="클래스에 대한 평가를 작성해주세요"]').type('1234567890')
    cy.get('[class="lk-button primary"]').click()
    
  })

  it('6-2. Login should class room go2', () => {
    // setting
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()

    //site move
    cy.get('[class="swiper-slide"]').click()
    cy.get('[href="https://testlee001.liveklass.com"]').click()
    
    //Course registration
    cy.get('[href="/classes"]').click()
    cy.get('[href="/classes/105127"]').eq(0).click()

    //class room go
    cy.contains('강의실 입장').should('exist')
    cy.contains('강의실 입장').click()

    cy.contains('클래스 수강 완료').click()

    cy.contains('클래스를 완료하신 것을 축하드립니다.').should('exist')
    cy.contains('확인').click()

    cy.contains('클래스로 돌아기기').click()
  })


/*
  it.only('4. Login should logout', () => {
    // setting
    //cy.viewport(1000,660)
    //cy.visit('https://sso.liveklass.com/mypage')

    // user stting cilck
    cy.get('[class="ki-user"]').click()

    // logout
    cy.contains('로그아웃').click()  

  })
*/

  /*
  it('homepage connect', () => {
    cy.viewport('iphone-x')
    cy.visit('http://liveklass.com')
  })
  */

})
