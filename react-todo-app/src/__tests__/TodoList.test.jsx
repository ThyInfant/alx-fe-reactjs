import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  it("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  it("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  it("deletes a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getByText("Build a Todo App").nextSibling;
    fireEvent.click(deleteBtn);
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
