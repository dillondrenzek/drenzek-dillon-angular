describe('Project Templates & Controllers', function() {

  it('should show list projects page', function() {
    browser.get('http://localhost:8081/#/projects');
    expect(element(by.css('h3')).getText()).toEqual('List Projects');
  });

  it('should show index projects page', function() {
    browser.get('http://localhost:8081/#/projects/index');
    expect(element(by.css('h3')).getText()).toEqual('Index Projects');
  });

  it('should show create projects page', function() {
    browser.get('http://localhost:8081/#/projects/create');
    expect(element(by.css('h3')).getText()).toEqual('Create Project');
  });

  it('should show one project page', function() {
    browser.get('http://localhost:8081/#/projects/show');
    expect(element(by.css('h3')).getText()).toEqual('Show Project');
  });

  it('should show edit projects page', function() {
    browser.get('http://localhost:8081/#/projects/edit');
    expect(element(by.css('h3')).getText()).toEqual('Edit Project');
  });


});



// describe('Project API', function(){

//   describe('GET Projects', function(){

//   });

// });