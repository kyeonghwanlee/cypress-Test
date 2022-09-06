import React from 'react';
import { render } from 'react-dom';
//import prettyHTML from 'diffable-html';
//import { Header } from '../components/header';

describe('empty spec', () => {
  
  /*
  beforeEach(function () {
    cy.task('db:seed')
    cy.loginByGoogleApi()
  })
  */


  it('site connent', () => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()

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

    cy.contains('내 사이트').click()
    
    cy.contains('사이트 관리').should('exist')
    cy.contains('소개').should('exist') 
    cy.contains('프로그램').should('exist') 
    cy.contains('공지사항').should('exist') 
    cy.contains('나의 강의실').should('exist')
    
    cy.contains('소개').click()
    cy.contains('프로그램').click()
    cy.contains('전체').should('exist')
    cy.contains('비공개').should('exist')
    cy.contains('클래스 생성').should('exist')
    cy.contains('패키지 생성').should('exist')

    cy.contains('공지사항').click()
    cy.contains('글쓰기').should('exist')

    cy.contains('글쓰기').click()
    cy.contains('목록으로 돌아가기').should('exist')
    cy.contains('등록').should('exist')
    cy.contains('일반').should('exist')
    cy.contains('중요').should('exist')
    cy.contains('취소').should('exist')

    cy.get('[placeholder="공지사항으로 등록할 게시글의 제목을 입력합니다."]').type('제목')
    cy.get('[class="fr-element fr-view"]').type('TEST')

    cy.get('[type="submit"]').eq(0).click()

    cy.contains('나의 강의실').click()
    cy.get('[class="router-link-exact-active router-link-active"]').click()

    cy.get('[class="lk-btn text icon header-menu-icon profile show"]').click()
    cy.contains('마이페이지로 이동').should('exist')
    cy.contains('내 정보 수정').should('exist') 
    cy.contains('서비스 구독').should('exist') 
    cy.contains('신청 내역').should('exist') 
    cy.contains('매출 관리').should('exist') 
    cy.contains('정산 관리').should('exist') 
    cy.contains('로그아웃').should('exist') 
    
    //서비스 구독 - 구독관리
    cy.contains('서비스 구독').click()
    cy.wait(1000)
    
    cy.contains('내 정보 수정').should('exist') 
    cy.contains('서비스 구독').should('exist') 
    cy.contains('신청 내역').should('exist') 
    cy.contains('매출 관리').should('exist') 
    cy.contains('정산 관리').should('exist') 
    cy.contains('구독관리').should('exist') 
    cy.contains('구독내역').should('exist') 
    cy.contains('결제정보').should('exist') 
    cy.contains('할인 쿠폰').should('exist') 
    cy.contains('구독 변경').should('exist')

    cy.contains('구독 변경').click()

    cy.contains('무료').should('exist') 
    cy.contains('마이크로').should('exist') 
    cy.contains('스몰').should('exist') 
    cy.contains('미디엄').should('exist') 
    cy.contains('라지').should('exist') 
    cy.contains('구독 플랜 변경하기').should('exist') 
    cy.contains('취소').should('exist') 

    cy.get('[class="el-switch__core"]').click()
    cy.get('[class="el-switch__core"]').click()

    cy.contains('마이크로').click()
    cy.contains('현재 사용중인 플랜보다 더 많은 수강신청을 받을 수 있어요.').should('exist')
    cy.contains('구독 플랜 변경하기').click()
    cy.get('[class="btn_common btn_gray btn_medium"]').click()

    //서비스 구독 - 구독내역
    cy.contains('구독내역').click()

    //서비스 구독 - 결제정보
    cy.contains('결제정보').click()
    cy.contains('결제 카드 추가').should('exist') 
    cy.contains('수정').should('exist') 

    cy.contains('결제 카드 추가').click()
    cy.contains('취소').should('exist') 
    cy.contains('저장').should('exist') 
    cy.contains('취소').click()
    
    cy.get('[class="btn_common btn_dark btn_x_small"]').click()
    cy.contains('저장').should('exist')
    cy.contains('올바른 이메일 주소를 입력해 주세요.').should('not.exist') 
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('dsfasfs')
    cy.contains('저장').click()
    cy.contains('올바른 이메일 주소를 입력해 주세요.').should('exist') 
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('ruoghks@gmail.com')
    cy.contains('저장').click()
    cy.get('[class="btn_common btn_point btn_popup_small focusable"]').click()
    
    //서비스 구독 - 할인쿠폰
    cy.contains('할인 쿠폰').click()
    cy.contains('쿠폰 추가').should('exist')
    cy.contains('쿠폰 추가').click()

    cy.contains('쿠폰 등록').should('exist')
    cy.contains('쿠폰 등록').click()
    cy.get('[class="btn_common btn_gray btn_small btn_point"]').click()
    cy.contains('쿠폰코드를 입력해 주세요').should('exist')
    cy.get('[class="btn_common txt_hide btn_popup_close focusable"]').click()

    //신청내역
    cy.contains('신청 내역').click()
    cy.wait(1000)   

    //매출관리
    cy.contains('매출 관리').click()
    cy.wait(1000)
    cy.contains('오늘').should('exist')
    cy.contains('1주일').should('exist')
    cy.contains('1개월').should('exist')
    cy.contains('3개월').should('exist')
    cy.contains('검색하기').should('exist')
    cy.contains('엑셀다운').should('exist')
    
    cy.contains('엑셀다운').click()
    
    //정산관리
    cy.contains('정산 관리').click()
    cy.wait(1000)
    cy.contains('오늘').should('exist')
    cy.contains('1주일').should('exist')
    cy.contains('1개월').should('exist')
    cy.contains('3개월').should('exist')
    cy.contains('검색하기').should('exist')
    cy.contains('엑셀다운').should('exist')

    cy.contains('엑셀다운').click()
  })

  it('class insert',() => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()

    cy.contains('내 사이트').click()
    
    cy.contains('프로그램').click()
    

  })

  it('Drag & Drop',() => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()
    cy.wait(1500)

    cy.visit('https://ruoghks.liveklass.com/settings/page')
    
    cy.contains('편집').eq(0).click()
    cy.wait(100)
    
    cy.get('[class="drag ki-drag text-black-04 mr-10px text-20px"]').eq(0).trigger('mousedown', { which: 1 }).trigger('mousemove', { X: 100, Y: 6000 }).trigger('mouseup', { force: true })
    
    cy.get('[class="drag ki-drag text-black-04 mr-10px text-20px"]').eq(0)
      .trigger('mousedown', { which: 1, X: 600, Y: 100 })
      .trigger('mousemove', { which: 1, X: 600, Y: 2000 })
      .trigger('mouseup')

    cy.get('[class="drag ki-drag text-black-04 mr-10px text-20px"]').eq(0).trigger('dragstart',{DataTransfer})
    cy.get('[class="drag ki-drag text-black-04 mr-10px text-20px"]').eq(4).trigger('drop',{DataTransfer})

  })
  it('사이트 관리',() => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()
    cy.wait(1500)

    cy.contains('내 사이트').eq(0).click()
    cy.wait(2000)
    //cy.get('[class="el-tooltip lk-btn rounded hide-mobile"]').invoke('attr', 'target','#').click()
    cy.visit('https://ruoghks.liveklass.com/settings/page')

  })
  
  it('드롭다운 테스트',() => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('ruoghks@gmail.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()
    cy.wait(1500)

    //cy.contains('내 사이트').eq(0).click()
    //cy.wait(2000)
    //cy.get('[class="el-tooltip lk-btn rounded hide-mobile"]').invoke('attr', 'target','#').click()
    
    cy.visit('https://ruoghks.liveklass.com/settings/page')
    cy.wait(1000)

    cy.contains('홈페이지 설정').click()

    cy.get('[class="el-input__inner"]').eq(0).click()
    cy.get('[class="el-select-dropdown__item"]').eq(9).click()
  })

  it.only('클래스 변경 후 확인 테스트',() => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('kyeonghwan.lee@liveklass.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()
    cy.wait(500)
    cy.visit('https://testlee001.liveklass.com/')
    cy.wait(500)

    cy.contains('프로그램').click()

    cy.get('[href="/classes/105854"]').eq(0).click()
    cy.wait(1000)

    cy.contains('무료').should('exist')
    cy.contains('클래스 관리').click()
    cy.wait(500)

    cy.contains('결제설정').click()
    cy.contains('유료 클래스').click()
    cy.get('[class="container-input"]').eq(0).type('10000')
    cy.wait(1000)

    cy.contains('할인 적용').click()
    cy.get('[class="container-input"]').eq(2).type('1000')
    cy.wait(1000)

    cy.contains('월 할부 금액 표시').click()
    cy.wait(1000)

    cy.contains('옵션 설정').click()
    cy.get('[placeholder="예 : 1회 코칭권"]').type('1회 수강권')
    cy.get('[class="container-input"]').eq(4).type('10000')
    cy.wait(1000)

    cy.contains('변경사항 저장하기').click()
    cy.wait(2000)
    cy.contains('저장되었습니다.').should('exist')
    cy.contains('클래스로 돌아가기').click()
    cy.wait(2000)

    cy.contains('정가 10,000원 90% 할인').should('exist')
    cy.contains('현재 판매가 1,000원').should('exist')
    cy.contains('월 500원').should('exist')
    cy.contains('2개월 무이자 할부 시').should('exist')

    cy.contains('프로모션').should('exist')
  })

  it.only('기존작업 원복',() => {
    cy.viewport(1920,1080)
    cy.visit('https://sso.liveklass.com/login?query=%7B%22next%22%3A%22%252F%22%7D')

    // id & pw text input
    cy.get('[type="text"]').type('kyeonghwan.lee@liveklass.com')
    cy.get('[type="password"]').type('@dl29240730')

    // login button click
    cy.get('[class="lk-button gradient"]').click()
    cy.wait(500)
    cy.visit('https://testlee001.liveklass.com/')
    cy.wait(500)

    cy.contains('프로그램').click()

    cy.get('[href="/classes/105854"]').eq(0).click()
    cy.wait(1000)

    cy.contains('무료').should('exist')
    cy.contains('클래스 관리').click()
    cy.wait(500)

    cy.contains('클래스 관리').click()

    cy.contains('결제설정').click()
    cy.get('[class="container-input"]').eq(0).clear()
    cy.get('[class="container-input"]').eq(2).clear()
    cy.get('[placeholder="예 : 1회 코칭권"]').clear()
    cy.get('[class="container-input"]').eq(4).clear()

    cy.contains('전체 금액 표시').click()
    cy.contains('할인 적용').click()
    cy.contains('유료 클래스').click()
    cy.contains('옵션 설정').click()

    cy.contains('변경사항 저장하기').click()
    cy.wait(2000)
    cy.contains('저장되었습니다.').should('exist')
    cy.contains('클래스로 돌아가기').click()
    cy.wait(2000)

    cy.contains('무료').should('exist')
  })
})