import { expect, test } from "bun:test";

import getPosts from "./getPosts";

test("Gets at least one post", async () => {
    expect((getPosts()).length).toBeGreaterThan(0);
})