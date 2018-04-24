import React from "react"

import { Comment } from "./Comments"
import { shallow } from "enzyme"

describe("<Comment />", () => {
  it("renders comment user", () => {
    const component = shallow(<Comment user="Eu" content="abc" />)
    expect(component.find(".Comment-User").text()).toEqual("Eu")
  })
  it("renders comment body", () => {
    const component = shallow(<Comment user="Eu" content="abc" />)
    expect(component.find(".Comment-Body").text()).toEqual("abc")
  })

  describe("visibility toggle", () => {
    it("hides a comment", () => {
      const component = shallow(<Comment user="Eu" content="abc" />)
      const button = component.find("button")
      expect(component.find(".Comment-Body")).toHaveLength(1)
      button.simulate("click")
      expect(component.find(".Comment-Body")).toHaveLength(0)
    })
    it("shows a hidden comment", () => {
      const component = shallow(<Comment user="Eu" content="abc" />)
      component.setState({
        hidden: true
      })
      const button = component.find("button")
      expect(component.find(".Comment-Body")).toHaveLength(0)
      button.simulate("click")
      expect(component.find(".Comment-Body")).toHaveLength(1)
    })
  })
})