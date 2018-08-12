import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response:
      [
        {
          "name": "id labore ex et quam laborum",
        },
        {
          "name": "quo vero reiciendis velit similique earum",
        },
        {
          "name": "odio adipisci rerum aut animi",
        }
    ]
  })
})


afterEach(() => {
  moxios.uninstall()
})

it('should fetch a list of comments and display them', function (done) {
  const wrapped = mount(
    <Root>
      <App/>
    </Root>)

  wrapped.find('.fetch-comments').simulate('click')

  moxios.wait(() => {
    wrapped.update()

    expect(wrapped.find('li').length).toEqual(3)

    done();
    wrapped.unmount()
  })
});
