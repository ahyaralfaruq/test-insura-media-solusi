import { screen, render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "./App"


describe("App component", () => {
  it("should add main tag", () => {
    
    render(<App />)

    const mainEl = screen.getByRole("main")

    expect(mainEl).toBeInTheDocument()
  })
})