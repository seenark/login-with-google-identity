<script lang="ts">
	import type { CredentialResponse } from "google-one-tap";
	import { onMount, tick } from "svelte";
	import jwt_decode from "jwt-decode";

	let signinDiv: HTMLElement;

	let userObject: any | null = null;

	function handleGoogleLogin(res: CredentialResponse) {
		console.log(res);
		userObject = jwt_decode(res.credential);
		console.log(userObject);
	}

	onMount(() => {
		console.log("init");
		window.google.accounts.id.initialize({
			client_id: "703869173995-irpabsbejv59mcf0ddk4bisa4mto36iq.apps.googleusercontent.com",
			callback: handleGoogleLogin
		});
		console.log("render");
		window.google.accounts.id.renderButton(signinDiv, {
			theme: "outline",
			size: "large"
		});

		window.google.accounts.id.prompt();
	});
</script>

<div>
	<h1>Sigin</h1>
	<div bind:this={signinDiv} />

	<div>Google Token Signin</div>
</div>
