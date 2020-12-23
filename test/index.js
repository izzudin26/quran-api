"use strict"

const chai = require("chai")
const chaiHttp = require("chai-http")
const app = require("../build/index.js")

chai.use(chaiHttp)
chai.should();
describe("Surah", () => {
    describe("Get Surah /", () => {
        it("should get all surah", (done) => {
            chai.request(app)
                .get("/surah")
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a("array")
                    done()
                })
        })
    })
})

describe("Get Surah number", () => {
    describe("Get Surah /:numberSurah", () => {
        it("Should get available surah", (done) => {
            for (let i = 1; i < 6; i++) {
                chai.request(app)
                    .get(`/surah/${i}`)
                    .end((err, res) => {
                        res.should.have.status(200)
                        res.body.should.be.a("object")
                    })

            }
            done()
        })

        it("Should be not found surah", (done) => {
            chai.request(app)
                .get("/surah/444")
                .end((err, res) => {
                    res.should.have.status(404)
                })
            done()
        })
    })
})