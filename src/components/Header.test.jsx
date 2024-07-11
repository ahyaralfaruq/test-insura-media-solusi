import { screen, render, fireEvent } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Header from "./Header"
import SearchBar from "./ui/SearchBar"

describe("Header component", () => {
  it("Should render correctly", () => {

    render(<Header />);

    const headerEl = screen.getByRole("header")
    expect(headerEl)
  })
})