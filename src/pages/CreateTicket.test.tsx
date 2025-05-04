import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateTicket from "./CreateTicket";
import { describe, it, expect, vi } from "vitest";

describe("CreateTicket", () => {
  it("shows alert after successful ticket submission", async () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<CreateTicket />);

    // what we values we pass for a successful ticket submission  

    fireEvent.change(screen.getByLabelText(/issue type/i), {
      target: { value: "Wi-Fi Connectivity" },
    });
    fireEvent.change(screen.getByLabelText(/explain the issue/i), {
      target: { value: "App crashes on login" },
    });

    const file = new File(["content"], "test.pdf", { type: "application/pdf" });
    fireEvent.change(screen.getByLabelText(/upload file/i), {
      target: { files: [file] },
    });

    fireEvent.click(screen.getByRole("button", { name: /submit request/i }));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith("Ticket submitted!");
    });
  });
});