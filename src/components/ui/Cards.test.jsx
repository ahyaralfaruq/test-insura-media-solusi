import { screen, render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Cards from "./Cards"


describe("Cards component", () => {
  it("Should render data from props", () => {
    const mockData = {
      id: 1,
      weight: 7,
      height: 8,
      sprites: {
        other: {
          home: {
            front_default: "https://site.com/1.png"
          }
        }
      },
      species: {
        name: "nama"
      }
    }

    render(<Cards data={mockData} />)

    const imgEl = screen.getByRole("img")
    const id = screen.getByRole("id")
    const nama = screen.getByRole("nama")
    const berat = screen.getByRole("berat")
    const tinggi = screen.getByRole("tinggi")

    expect(imgEl).toBeInTheDocument()
    expect(nama).toHaveTextContent("nama")
    expect(berat).toHaveTextContent(7)
    expect(tinggi).toHaveTextContent(8)
    expect(id).toHaveTextContent(1)
  })
})