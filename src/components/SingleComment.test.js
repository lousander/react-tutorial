import React from "react"

import SingleComment from "./SingleComment"
import { shallow } from "enzyme"

describe("<SingleComment />", () => {
  it("renders comment user", () => {
    const component = shallow(<SingleComment user="Eu" content="abc" />)
    expect(component.find(".comment_user").text()).toEqual("Eu")
  })
  it("renders comment body", () => {
    const component = shallow(<SingleComment user="Eu" content="abc" />)
    expect(component.find(".comment_body").find("p").text()).toEqual("abc")
  })

  describe("visibility toggle", () => {
    it("hides a comment", () => {
      const component = shallow(<SingleComment user="Eu" content="abc" />)
      const button = component.find("button")
      expect(component.find(".comment_body")).toHaveLength(1)
      button.simulate("click")
      expect(component.find(".comment_body")).toHaveLength(0)
    })
    it("shows a hidden comment", () => {
      const component = shallow(<SingleComment user="Eu" content="abc" />)
      component.setState({
        hidden: true
      })
      const button = component.find("button")
      expect(component.find(".comment_body")).toHaveLength(0)
      button.simulate("click")
      expect(component.find(".comment_body")).toHaveLength(1)
    })
  })
})