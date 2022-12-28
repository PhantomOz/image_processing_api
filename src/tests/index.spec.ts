import transform from "../utilities/transform";
import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("gets the api endpoint expected fail when no queries at all", async () => {
    const response = await request.get("/api/images");
    expect(response.status).toBe(401);
  });
  it("gets the api endpoint expected fail when some queries are added", async () => {
    const response = await request.get("/api/images?filename=test&width=200");
    expect(response.status).toBe(401);
  });
  it("gets the api endpoint expected fail for can find image", async () => {
    const response = await request.get(
      "/api/images?filename=fjord&width=200&height=200"
    );
    expect(response.status).toBe(404);
  });
});
describe("Testing the transform function", () => {
  it("expect transform('ariat', 400, 200) to fail", async () => {
    await transform("ariat", 400, 200).then((err) =>
      expect(err.code).toEqual("ENOENT")
    );
  });
});
