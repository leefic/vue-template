import { defineStore } from "pinia";

export default defineStore("user", {
	state: () => {
		return {
			token: "",
		};
	},
	getters: {},
	actions: {},
});
