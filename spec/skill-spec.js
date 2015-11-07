describe('Skill Templates & Controllers', function() {

  it('should show list Skills page', function() {
    browser.get('http://localhost:8081/#/skills');
    expect(element(by.css('h3')).getText()).toEqual('List Skills');
  });

  it('should show index Skills page', function() {
    browser.get('http://localhost:8081/#/skills/index');
    expect(element(by.css('h3')).getText()).toEqual('Index Skills');
  });

  it('should show create Skills page', function() {
    browser.get('http://localhost:8081/#/skills/create');
    expect(element(by.css('h3')).getText()).toEqual('Create Skill');
  });

  it('should show one Skill page', function() {
    browser.get('http://localhost:8081/#/skills/show');
    expect(element(by.css('h3')).getText()).toEqual('Show Skill');
  });

  it('should show edit Skills page', function() {
    browser.get('http://localhost:8081/#/skills/edit');
    expect(element(by.css('h3')).getText()).toEqual('Edit Skill');
  });


});