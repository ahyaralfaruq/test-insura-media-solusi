import { screen, render, fireEvent } from "@testing-library/react"
import SearchBar from "./SearchBar"
import { describe, expect, it } from "vitest"

describe("SearchBar component", () => {
  it("Should input functionality", () => {

    render(<SearchBar />);

    const inputEl = screen.getByPlaceholderText("Search Pokemon")
    const buttonEl = screen.getByRole("search-button")
    fireEvent.change(inputEl)

    expect(buttonEl).toHaveRole("search-button")
    expect(inputEl).toBeInTheDocument()
  })
})