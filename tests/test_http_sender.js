const chai = require("chai");
const expect = chai.expect;
const Axios = require("axios");
const Request = require("../source/request");
const HttpSender = require("../source/http_sender");

describe ("An Axios implementation of a HTTP sender", function () {
	it("adds a data payload to the HTTP request config.", function () {
		let expectedPayload = "test payload";
		let request = new Request(expectedPayload);
		let sender = new HttpSender();
		let requestConfig = sender.buildRequestConfig(request);

		expect(requestConfig.hasOwnProperty("data")).to.equal(true);
		expect(requestConfig.data).to.equal(expectedPayload);
	});

	it ("adds a POST method to the HTTP request config when appropriate.", function () {
		let request = new Request("test payload");
		let sender = new HttpSender();
		let requestConfig = sender.buildRequestConfig(request);

		expect(requestConfig.hasOwnProperty("method")).to.equal(true);
		expect(requestConfig.method).to.equal("POST");
	});

	it ("adds a GET method to the HTTP request config when appropriate.", function () {
		let request = new Request();
		let sender = new HttpSender();
		let requestConfig = sender.buildRequestConfig(request);

		expect(requestConfig.hasOwnProperty("method")).to.equal(true);
		expect(requestConfig.method).to.equal("GET");
	});
});