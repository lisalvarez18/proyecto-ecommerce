const server = require("./app");
const supertest = require("supertest");
const { default: expect } = require("expect");

describe("Homepage", () => {
    const checkHome = (supertest_response) => {
        expect(supertest_response.status).toEqual(200);
        expect(supertest_response.type).toEqual('text/html');
        expect(supertest_response.text).toEqual("Hola mundo");
    }
    it("GET / return Hola mundo", async () => {
        const res = await supertest(server).get("/");
        checkHome(res);
    });
    it("GET /index.html return Hola mundo", async () => {
        const res = await supertest(server).get("/index.html");
        checkHome(res);
    });
});