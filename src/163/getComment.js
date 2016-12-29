class GetComments {
  constructor (text = '', cb = function (text) {console.info(text)}, delay = 5000) {
    this.COMMENT_BOX_SEL = '.cmmts';
    this.NEXT_PAGE_BTN_SEL = '.zbtn.znxt';

    this.textValidate = this.getReg(text);
    this.cb = cb.bind(this);
    this.delay = delay;
  }

  getReg (text) {
    return new RegExp(text, 'i');
  }

  toNextPage () {
    document.querySelector(this.NEXT_PAGE_BTN_SEL).click();
    setTimeout(this.testText.bind(this), this.delay);
  }

  testText () {
    const text = this.getValidText();
    if (text) {
      this.cb(text);
    }
    this.toNextPage();
  }
  getValidText () {
    const text = document.querySelector(this.COMMENT_BOX_SEL).innerText;
    const validText = text.split('\n\n').filter(item => this.textValidate.test(item)).join('\r\n');
    return validText;
  }
  run (text) {
    if (text) {
      this.textValidate = this.getReg(text);
    }
    this.testText();
  }
}
// Example
// new GetComments().run('YouSillyGuys')
