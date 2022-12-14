import { OAuth2Client } from "google-auth-library";
async function verifyGoogleTokenId(aud: string, jwt: string) {
	const client = new OAuth2Client(
		"703869173995-irpabsbejv59mcf0ddk4bisa4mto36iq.apps.googleusercontent.com"
	);
	const ticket = await client.verifyIdToken({
		audience: aud,
		idToken: jwt
	});
	console.log("ticket", ticket);
	const payload = ticket.getPayload();
	const userId = payload?.sub;
	console.log("userId", userId);
}

async function main() {
	const aud = "703869173995-irpabsbejv59mcf0ddk4bisa4mto36iq.apps.googleusercontent.com";
	const jwt =
		"eyJhbGciOiJSUzI1NiIsImtpZCI6IjE4MzkyM2M4Y2ZlYzEwZjkyY2IwMTNkMDZlMWU3Y2RkNzg3NGFlYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2Njk2Mjk2NTgsImF1ZCI6IjcwMzg2OTE3Mzk5NS1pcnBhYnNiZWp2NTltY2YwZGRrNGJpc2E0bXRvMzZpcS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMDczNDIzMDQ0Njc2NDE1NTMxOSIsImhkIjoiYXF1aWxhc3R1ZGlvLm5ldCIsImVtYWlsIjoiYXRpd2F0QGFxdWlsYXN0dWRpby5uZXQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiNzAzODY5MTczOTk1LWlycGFic2JlanY1OW1jZjBkZGs0YmlzYTRtdG8zNmlxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6IkF0aXdhdCBTZWVuYXJrIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FMbTV3dTNqZmM0LWtQTW1tRGxfczJwNzNBV0RxTWFXcXNaRWRGN0JTSXRZPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkF0aXdhdCIsImZhbWlseV9uYW1lIjoiU2VlbmFyayIsImlhdCI6MTY2OTYyOTk1OCwiZXhwIjoxNjY5NjMzNTU4LCJqdGkiOiJlNWMwZjE1ODAxYWVhNGQ3ZDE3NGEyMTEzNDZmNjNjMDQxZTYwZDA5In0.qKR1Gr0OhwCsYxvRK8Dr0e2M1yWLNGmc0_ib27ctrmQ9Z13gVjqRZTbMltGkvTW1jjU7-awn1pBgsnebn6FvXrSIi6K2O9_j1XuMWDw76TUdlVlOz4Q4s5YdF3GRC1DLjV4Shrh8xR2Nrvhtpt6RQXZgwLzvzBfc1cdsLlfI2paroUROcV_Vzka73Zr5Sw4ORpfi77SFs62l8JmL3Zva83_8l473dgTyC-hdtKCYtSN6MUKWrDK4JlBHTQmoTdcYroV7AUsBlEpNNPPHwuge-vAlDcLbialcAr57tzDlqQgexp_i2tOButFC34ljnuJRtp9F9W-uyQ0aRCW3u28K9Q";
	verifyGoogleTokenId(aud, jwt);
}

main();
