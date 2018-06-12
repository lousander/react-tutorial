import React from "react"
import { mount } from "enzyme"
import Article from "./Article";

describe("Article", () => {
  beforeEach(() => {
    const fetchMock = jest.fn()
    fetchMock.mockReturnValue(
      Promise.resolve({
        json: () => {
          return Promise.resolve({
            title: "foo",
            body: "bar"
          })
        }
      })
    )
    global.fetch = fetchMock
  })

  it("should bo ok", async () => {
    const component = mount(<Article match={{params:{}}} />);
    await component.instance().componentDidMount()
    component.update()
    expect(component.find(".title").text()).toBe("foo")
  })
})
