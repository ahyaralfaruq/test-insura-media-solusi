import { screen, render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import CardSection from "./CardSection"


describe("CardSection component", () => {
  it("it shows 2 button", () => {
    
    render(<CardSection />)

    const buttonPrevEl = screen.getByRole("prevButton")
    const buttonNextEl = screen.getByRole("nextButton")

    expect(buttonPrevEl).toBeInTheDocument()
    expect(buttonNextEl).toBeInTheDocument()
  })
})