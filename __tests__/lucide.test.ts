import { render } from "@solidjs/testing-library";
import { describe, expect, it } from "bun:test";
import { Icon } from "../dist/server/icon";
import { academicCap } from "../solid";

describe("Icon Components", () => {
	it("renders the academicCap correctly", () => {
		const { container } = render(() => Icon({ path: academicCap }));
		expect(container.innerHTML).toContain("svg"); // Check for an SVG element
		expect(container.innerHTML).toContain("path"); // Check for path elements within the SVG
	});
});
